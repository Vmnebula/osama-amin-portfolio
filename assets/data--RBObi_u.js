(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();
var e={
  name:`Muhammad Osama Amin`,
  first:`Osama`,
  role:`Applied AI & Cloud Architect · Founder`,
  tagline:`Founder at VM Nebula & NayaCloud (DIFC). Official Redis Contributor.`,
  blurb:`I ship production AI runtimes, multi-tenant cloud infrastructure, and multimodal voice systems—engineered and verified under real load.`,
  email:`osamaaminemail@gmail.com`,
  phone:`+92 310 5035067`,
  phoneAlt:`muhammad.osama@vmnebula.com`,
  location:`Islamabad, PK · Dubai, UAE (DIFC)`,
  timeZone:`Asia/Karachi`,
  careerStart:`2020-01-01T00:00:00Z`,
  resume:`https://vmnebula.github.io/osama-amin-portfolio/Muhammad_Osama_Amin_CV_Tech.pdf`,
  github:`https://github.com/Vmnebula`,
  linkedin:`https://www.linkedin.com/in/muhammad-osama-amin/`
},
t=[
  {text:`hey`,label:`English`},
  {text:`salam`,label:`Urdu / Pashto`},
  {text:`marhaba`,label:`Arabic`},
  {text:`servus`,label:`German`}
],
n=[
  `Scaling [VM Nebula](https://vmnebula.com) (ElevenLabs Grant awardee), piloting [Sarkit](https://sarkit.vmnebula.com) across 136 suppliers, and shipping async cluster fixes to [redis/redis-py](https://github.com/redis/redis-py/pulls?q=is%3Apr+author%3AVmnebula) with [Gemini 3.8 Live](https://ai.google.dev).`
],
r=[
  {name:`Python`,slug:`python`,note:`core systems & Redis PRs`},
  {name:`TypeScript`,slug:`typescript`,note:`every frontend & agent SDK`},
  {name:`FastAPI`,slug:`fastapi`,note:`high-throughput AI gateways`},
  {name:`Django`,slug:`django`,note:`enterprise & ERP backends`},
  {name:`React`,slug:`react`,note:`interactive consoles`},
  {name:`Next.js`,slug:`nextdotjs`,note:`NayaCloud & SaaS portals`},
  {name:`LangChain`,slug:`langchain`,note:`production RAG & tool loops`},
  {name:`LangGraph`,slug:`langgraph`,note:`stateful multi-agent graphs`},
  {name:`Google ADK`,slug:`google`,note:`Vertex AI & Workspace apps`},
  {name:`Gemini 3.8`,slug:`googlegemini`,note:`powers this live voice call`},
  {name:`LiveKit`,slug:`livekit`,note:`real-time WebRTC voice`},
  {name:`Pipecat`,slug:`pipecat`,note:`low-latency audio pipelines`},
  {name:`Deepgram`,slug:`deepgram`,note:`streaming speech-to-text`},
  {name:`PostgreSQL`,slug:`postgresql`,note:`multi-tenant ledger store`},
  {name:`MongoDB`,slug:`mongodb`,note:`document & telemetry store`},
  {name:`BigQuery`,slug:`googlebigquery`,note:`analytics & FinOps metering`},
  {name:`Docker`,slug:`docker`,note:`isolated agent Orbits`},
  {name:`Kubernetes`,slug:`kubernetes`,note:`multi-cloud orchestration`},
  {name:`Google Cloud`,slug:`googlecloud`,note:`Cloud Run, Vertex & GKE`},
  {name:`Claude Code`,slug:`claude`,note:`autonomous pair engineer`}
],
i=[
  {
    company:`VM Nebula & NayaCloud (DIFC)`,
    href:`https://vmnebula.com`,
    logo:`./img/logos/recruit41.webp`,
    title:`Founder & Chief Cloud/AI Architect`,
    period:`Aug 2024 - Present`,
    location:`Dubai, UAE (DIFC) & Islamabad, PK`,
    summary:`Managed 24/7 cloud runtime for autonomous AI agents (Orbits, Pulsar metering, Stasis circuit breakers) & DIFC Innovation Hub entity (Licence CL11486).`,
    impact:[
      {label:`Isolated Agent Orbits`,stat:`87% cost reduction`,text:`Engineered container-isolated agent runtimes across GCP & Azure AI Foundry with real-time token circuit breakers.`},
      {label:`Ecosystem & Backing`,stat:`$50K angel + grants`,text:`Awarded ElevenLabs Startup Grant, SOSV Orbit Startups, NIC Peshawar, and Top 30 Finalist at 13th Wafi Tameer Awards.`}
    ],
    clients:[
      {
        name:`Sarkit Voice & Vision ERP`,
        href:`https://sarkit.vmnebula.com`,
        logo:`./img/logos/atomicwork.png`,
        summary:`Multimodal Urdu/Pashto speech & handwritten invoice vision platform for informal retail supply chains (Ignite SPARK-2026-1314).`,
        impact:[
          {label:`Live Mardan Bazaar Pilot`,stat:`1,113 SKUs · 136 suppliers`,text:`Deployed across 16 retail/wholesale categories with voice-to-ledger billing and offline-first sync.`},
          {label:`Multimodal Vision & Speech`,text:`Extracts line items from handwritten Urdu/English supplier bills and voice notes in seconds.`}
        ]
      },
      {
        name:`Vorlagen Direkt (Germany)`,
        href:`https://vorlagen-direkt.com`,
        logo:`./img/logos/spotdraft.png`,
        summary:`German-first interactive client-side calculators (ArbZG, DIN 276, Nebenkosten, EÜR) and verified blank workbooks.`,
        impact:[
          {label:`Organic Search Growth`,stat:`4,350+ monthly imp`,text:`Built zero-backend interactive German compliance aids and automated XLSX/ODS workbook generators.`}
        ]
      }
    ]
  },
  {
    company:`Open Source & Core AI Infrastructure`,
    href:`https://github.com/Vmnebula`,
    logo:`./img/logos/think41.svg`,
    title:`Official Merged Contributor (Redis, CrewAI, aiohttp)`,
    period:`2025 - Present`,
    location:`Global Open Source`,
    summary:`Resolving deep async event-loop, cluster transaction, and concurrency bugs in foundational Python data & agent libraries.`,
    impact:[
      {label:`redis/redis-py (#4513 & #4537)`,stat:`2 PRs merged to master`,text:`Fixed cross-loop socket reuse and movablekeys parser connection leaks in async RedisCluster transaction pipelines.`},
      {label:`Agent & Async Ecosystem`,stat:`crewAI · aiohttp · litellm`,text:`Shipped thread-safe Flow state snapshotting (#8750), LRU cache fixes (#8551), and WebSocket heartbeat guards (#14126).`}
    ]
  },
  {
    company:`Amin Technologies Ltd (UK) & HDPO`,
    href:`https://nayacloud.com`,
    logo:`./img/logos/nokia.svg`,
    title:`Cloud Operations Lead & Solutions Architect`,
    period:`Aug 2022 - Present`,
    location:`London, UK · Remote`,
    summary:`Led 150+ production cloud, Kubernetes, and applied AI deployments for clients across the Gulf, UK, US, and Africa.`,
    impact:[
      {label:`Multi-Cloud FinOps & Infra`,stat:`150+ deployments`,text:`Architected multi-tenant AWS, GCP, and Azure AI Foundry estates with 15M+ TPM enterprise quotas and automated CI/CD.`},
      {label:`Enterprise & NGO Platforms`,stat:`99.9% uptime`,text:`Delivered production ERP, voice automation, and cloud security operations across 4 continents.`}
    ]
  }
],
a=[
  {label:`Shipping`,value:`redis-py & VM Nebula`,detail:`async cluster internals & agent Orbits`,more:`2 PRs merged into official Redis this week`,href:`https://github.com/redis/redis-py/pulls?q=is%3Apr+author%3AVmnebula`},
  {label:`Building`,value:`Sarkit Voice ERP`,detail:`Urdu & Pashto speech-to-ledger`,more:`live across 1,113 SKUs in Mardan Bazaar`,href:`https://sarkit.vmnebula.com`},
  {label:`Running`,value:`NayaCloud DIFC`,detail:`Dubai International Financial Centre`,more:`Commercial Licence CL11486`,href:`https://nayacloud.com`},
  {label:`Next Up`,value:`Forbes 30U30 Track`,detail:`scaling sovereign & private AI infra`,more:`from Pakistan & UAE to global production`}
],
o={
  "VM Nebula":{itch:`AI agents die on laptops or burn $2,000 overnight.`,built:`24/7 isolated Agent Orbits with sub-minute circuit breakers.`},
  Sarkit:{itch:`Informal retailers won't type into complex ERPs.`,built:`Speak Urdu/Pashto or snap a handwritten bill—stock updates live.`},
  "Bulk AI Studio":{itch:`Copy-pasting 5,000 spreadsheet rows into ChatGPT.`,built:`A Google Workspace add-on that runs Gemini/OpenAI/Claude in bulk.`},
  Substacker:{itch:`Turning deep research into polished essays & audio takes hours.`,built:`An AI publishing studio with ElevenLabs voice synthesis.`},
  "Vorlagen Direkt":{itch:`German SMB templates hide behind paywalls and broken formulas.`,built:`Verified client-side calculators and clean XLSX/ODS workbooks.`}
},
s=[
  {
    name:`VM Nebula`,
    kind:`Managed AI Agent Cloud`,
    year:`2026`,
    hook:`Deploy private AI agents in 60 seconds.`,
    blurb:`Container-isolated Orbits for n8n, OpenWebUI, Agent Zero, Flowise, Ollama, and vLLM. Built-in Pulsar token metering, Horizon 85% warnings, and Stasis 100% hard circuit breakers.`,
    points:[
      `87% lower unit infrastructure cost vs legacy cloud setups`,
      `Backed by the ElevenLabs Startup Grant & SOSV Orbit Startups`,
      `Sub-minute budget guards across GCP & Azure AI Foundry`
    ],
    stack:[`TypeScript`,`Python`,`Docker`,`Google Cloud`,`Azure AI`],
    shot:`./img/projects/whisprcatch.jpg`,
    live:`https://vmnebula.com`,
    repo:`https://github.com/Vmnebula`
  },
  {
    name:`Sarkit`,
    kind:`Multimodal Voice & Vision ERP`,
    year:`2026`,
    hook:`You speak Urdu or Pashto. It runs the ledger.`,
    blurb:`Built for wholesale and retail supply chains. Speak a sale in Urdu or Pashto or snap a photo of a handwritten supplier invoice—Sarkit updates inventory, khata credit, and margins automatically.`,
    points:[
      `Live field pilot: 1,113 SKUs and 136 suppliers in Mardan Bazaar`,
      `Handles code-switched Urdu, Pashto, and English trade vocabulary`,
      `Offline-first Android & Web POS with real-time cloud sync`
    ],
    stack:[`React`,`FastAPI`,`Gemini Vision`,`ElevenLabs`,`PostgreSQL`],
    shot:`./img/projects/daytrail.jpg`,
    live:`https://sarkit.vmnebula.com`,
    repo:`https://github.com/Vmnebula`
  },
  {
    name:`Bulk AI Studio`,
    kind:`Google Workspace Marketplace App`,
    year:`2026`,
    hook:`Run LLMs across 10,000 Sheet rows at once.`,
    blurb:`Approved and published on the official Google Workspace Marketplace (App ID 323643388682). Connect Gemini, OpenAI, Claude, or Grok directly inside Google Sheets with batch retry and cost controls.`,
    points:[
      `Published on Google Workspace Marketplace (ID: 323643388682)`,
      `Multi-provider routing across Gemini, GPT, Claude & DeepSeek`,
      `Zero-code formula & batch sidebar execution`
    ],
    stack:[`TypeScript`,`Apps Script`,`Google Cloud Run`,`Gemini`],
    shot:`./img/projects/agentconf.jpg`,
    live:`https://workspace.google.com/marketplace/app/bulk_ai_studio/323643388682`,
    repo:`https://github.com/Vmnebula`
  },
  {
    name:`Substacker`,
    kind:`AI Publishing & Voice Studio`,
    year:`2026`,
    hook:`From raw technical notes to published essay + audio.`,
    blurb:`Turns rough engineering notes and research threads into structured long-form newsletters, complete with automated fact verification and ElevenLabs neural audio narration.`,
    points:[
      `Integrated ElevenLabs Startup Grant voice synthesis`,
      `Side-by-side research citation & draft editor`,
      `Live in production at substacker.vmnebula.com`
    ],
    stack:[`Next.js`,`Python`,`ElevenLabs`,`Gemini 3.8`],
    shot:`./img/projects/dayblocks.jpg`,
    live:`https://substacker.vmnebula.com`,
    repo:`https://github.com/Vmnebula`
  },
  {
    name:`Vorlagen Direkt`,
    kind:`German FinOps & Compliance Portal`,
    year:`2026`,
    hook:`Instant German business calculators & clean workbooks.`,
    blurb:`High-speed Astro portal serving interactive German ArbZG shift planners, DIN 276 construction cost estimators, Nebenkosten calculators, and formula-verified XLSX/ODS downloads.`,
    points:[
      `56 static pages + client-side calculators with 0ms server lag`,
      `4,350+ monthly Google Search impressions across DACH`,
      `Automated openpyxl/odfpy workbook generation & verification`
    ],
    stack:[`Astro`,`TypeScript`,`Python`,`OpenPyXL`],
    shot:`./img/projects/chaoslab.jpg`,
    live:`https://vorlagen-direkt.com`,
    repo:`https://github.com/Vmnebula`
  }
],
c={now:`Right now.`,work:`Ventures & engineering.`,stack:`Daily drivers.`,github:`Proof of work.`,off:`Highlights & milestones.`,contact:`Say hello.`,quests:`Products shipped to production.`},
l=structuredClone({profile:e,greetings:t,currently:n,techStack:r,experience:i,offbeat:a,projects:s,titles:c}),
u=()=>structuredClone(l);
function d(e,t){let n=(e,t)=>{Array.isArray(t)&&t.length&&e.splice(0,e.length,...t)};if(t.profile&&Object.assign(e.profile,t.profile),t.titles)for(let[n,r]of Object.entries(t.titles))r&&(e.titles[n]=r);n(e.greetings,t.greetings),n(e.currently,t.currently),n(e.techStack,t.techStack),n(e.experience,t.experience),n(e.offbeat,t.offbeat),n(e.projects,t.projects)}
function f(o){d({profile:e,greetings:t,currently:n,techStack:r,experience:i,offbeat:a,projects:s,titles:c},o)}
export{t as a,s as c,c as d,i,o as l,n,a as o,u as r,e as s,f as t,r as u};