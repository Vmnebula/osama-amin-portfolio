const K1 = "QUl6YVN5Q0NRSTlEYQ==", K2 = "T0t5NXNETEQ2c3VxUA==", K3 = "RXBfOXhmeUJtaG1xTQ==";
const getKey = () => atob(K1) + atob(K2) + atob(K3);
const SYS_PROMPT = "You are Muhammad Osama Amin (go by Muhammad) speaking live through your 3D Memoji on your portfolio website. Speak in first person ('I'), warm, executive, confident, and concise (1 to 2 short sentences per turn, natural spoken English, no markdown). Always lead with VM Nebula (vmnebula.com) — the managed cloud platform that gives autonomous AI agents their own dedicated cloud computer with 1-click deployment for OpenClaw, Agent Zero, and n8n, plus strict spending limits. You also founded NayaCloud, built Sarkit (voice-first retail software), Bulk AI Studio (published on the Google Workspace Marketplace), and Substacker, and you are an open-source contributor to Redis and CrewAI. Never mention internal model version numbers, grants, angel investment numbers, or licence codes. For business inquiries, invite visitors to reach out at muhammad.osama@vmnebula.com or via LinkedIn. If the visitor says goodbye, include GOODBYE_CALL at the end.";

async function geminiLine(audioCtx, analyserNode, callCfg, callbacks, onMicDenied) {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 }
  }).catch(() => { throw onMicDenied(); });

  let closed = false;
  let speakingCount = 0;
  let activeSources = new Set();
  let history = [];
  let recognition = null;
  let mediaRecorder = null;
  let silenceTimer = null;
  const apiKey = getKey();

  const stopPlayback = () => {
    for (const src of activeSources) {
      src.onended = null;
      try { src.stop(); } catch {}
    }
    activeSources.clear();
    speakingCount = 0;
  };

  const playBase64Audio = async (b64Data) => {
    if (closed) return;
    const bin = atob(b64Data);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    let audioBuffer = null;
    try {
      audioBuffer = await audioCtx.decodeAudioData(bytes.buffer.slice(0));
    } catch {
      const int16 = new Int16Array(bytes.buffer);
      audioBuffer = audioCtx.createBuffer(1, int16.length, 24000);
      const ch = audioBuffer.getChannelData(0);
      for (let i = 0; i < int16.length; i++) ch[i] = int16[i] / 32768;
    }
    if (closed) return;
    const src = audioCtx.createBufferSource();
    src.buffer = audioBuffer;
    src.connect(analyserNode);
    speakingCount++;
    callbacks.state("speaking");
    activeSources.add(src);
    return new Promise((resolve) => {
      src.onended = () => {
        activeSources.delete(src);
        speakingCount = Math.max(0, speakingCount - 1);
        if (speakingCount === 0 && !closed) callbacks.state("listening");
        resolve();
      };
      src.start(0);
    });
  };

  const speakText = async (text) => {
    if (closed || !text) return;
    const cleanText = text.replace(/GOODBYE_CALL/g, "").trim();
    callbacks.said?.("memoji", cleanText);
    const r = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash-tts:generateContent?key=" + apiKey, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: cleanText }] }],
        generationConfig: {
          responseModalities: ["AUDIO"],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: "Puck" } } }
        }
      })
    });
    if (!r.ok) return;
    const data = await r.json();
    const inline = data?.candidates?.[0]?.content?.parts?.[0]?.inlineData;
    if (inline?.data) {
      await playBase64Audio(inline.data);
    }
    if (text.includes("GOODBYE_CALL") && !closed) {
      cleanup();
      callbacks.ended(false, "memoji said goodbye");
    }
  };

  let busy = false;
  const askGemini = async (userPart, transcriptLabel) => {
    if (closed || busy) return;
    busy = true;
    try {
      stopPlayback();
      if (transcriptLabel) callbacks.said?.("visitor", transcriptLabel);
      history.push({ role: "user", parts: [userPart] });
      const r = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=" + apiKey, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYS_PROMPT }] },
          contents: history.slice(-10),
          generationConfig: { temperature: 0.7, maxOutputTokens: 160 }
        })
      });
      const data = await r.json();
      const reply = data?.candidates?.[0]?.content?.parts?.map(p => p.text || "").join(" ").trim();
      if (reply) {
        history.push({ role: "model", parts: [{ text: reply }] });
        await speakText(reply);
      }
    } catch (err) {
      console.warn("gemini-3.8-flash turn error", err);
    } finally {
      busy = false;
    }
  };

  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SR) {
    recognition = new SR();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.onresult = (ev) => {
      const last = ev.results[ev.results.length - 1];
      if (last && last.isFinal) {
        const spoken = last[0].transcript.trim();
        if (spoken.length > 1 && speakingCount === 0) {
          askGemini({ text: spoken }, spoken);
        }
      }
    };
    recognition.onend = () => {
      if (!closed) { try { recognition.start(); } catch {} }
    };
    try { recognition.start(); } catch {}
  } else if (window.MediaRecorder) {
    const startChunkLoop = () => {
      if (closed) return;
      const chunks = [];
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = (e) => { if (e.data.size > 0) chunks.push(e.data); };
      mediaRecorder.onstop = async () => {
        if (closed || speakingCount > 0 || busy || chunks.length === 0) {
          if (!closed) setTimeout(startChunkLoop, 500);
          return;
        }
        const blob = new Blob(chunks, { type: mediaRecorder.mimeType || "audio/webm" });
        const buf = await blob.arrayBuffer();
        const bytes = new Uint8Array(buf);
        let bin = "";
        for (let i = 0; i < bytes.length; i += 32768) bin += String.fromCharCode(...bytes.subarray(i, i + 32768));
        await askGemini({ inlineData: { mimeType: blob.type.split(";")[0] || "audio/webm", data: btoa(bin) } }, "");
        if (!closed) setTimeout(startChunkLoop, 400);
      };
      mediaRecorder.start();
      silenceTimer = setTimeout(() => { if (mediaRecorder && mediaRecorder.state === "recording") mediaRecorder.stop(); }, 4500);
    };
    setTimeout(startChunkLoop, 3500);
  }

  const cleanup = () => {
    if (closed) return;
    closed = true;
    clearTimeout(silenceTimer);
    stopPlayback();
    try { recognition?.stop(); } catch {}
    try { if (mediaRecorder && mediaRecorder.state !== "inactive") mediaRecorder.stop(); } catch {}
    for (const tr of stream.getTracks()) tr.stop();
  };

  callbacks.state("listening");
  askGemini({ text: "(The visitor just tapped your 3D memoji on your portfolio site. Greet them warmly in 1 short sentence as Muhammad, founder of VM Nebula, and invite them to ask about your AI & cloud work.)" }, "");
  return cleanup;
}
export { geminiLine };