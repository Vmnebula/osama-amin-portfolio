(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={
  name:`Muhammad Osama Amin`,
  first:`Muhammad`,
  role:`Founder & AI Cloud Architect`,
  tagline:`Founder at VM Nebula · Open Source Contributor`,
  blurb:`I architected and built VM Nebula—the managed cloud for autonomous AI agents with built-in spend guardrails—alongside voice-first enterprise systems and upstream open-source infrastructure.`,
  email:`contact@vmnebula.com`,
  phone:``,
  phoneAlt:``,
  location:`Global · Remote`,
  timeZone:`UTC`,
  careerStart:`2020-01-01T00:00:00Z`,
  resume:`https://vmnebula.com`,
  github:`https://github.com/Vmnebula`,
  linkedin:`https://www.linkedin.com/in/muhammad-osama-amin/`
},
t=[
  {text:`hello`,label:`English`},
  {text:`salam`,label:`Urdu`},
  {text:`marhaba`,label:`Arabic`},
  {text:`servus`,label:`German`}
],
n=[
  `Building [VM Nebula](https://vmnebula.com) — the 1-click cloud computer for autonomous AI agents with built-in spending limits — and contributing upstream patches to [Redis](https://github.com/redis/redis-py), [fsspec](https://github.com/fsspec/filesystem_spec), [AsyncSSH](https://github.com/ronf/asyncssh), [Agno](https://github.com/agno-agi/agno), and [AnyIO](https://github.com/agronholm/anyio).`
],
r=[
  {name:`Python`,slug:`python`,note:`core systems`},
  {name:`TypeScript`,slug:`typescript`,note:`web & cloud`},
  {name:`FastAPI`,slug:`fastapi`,note:`production APIs`},
  {name:`React`,slug:`react`,note:`web interfaces`},
  {name:`Next.js`,slug:`nextdotjs`,note:`product portals`},
  {name:`Docker`,slug:`docker`,note:`isolated runtimes`},
  {name:`Kubernetes`,slug:`kubernetes`,note:`cluster orchestration`},
  {name:`PostgreSQL`,slug:`postgresql`,note:`primary data store`},
  {name:`Google Cloud`,slug:`googlecloud`,note:`cloud infrastructure`},
  {name:`LangChain`,slug:`langchain`,note:`agent workflows`},
  {name:`LangGraph`,slug:`langgraph`,note:`stateful orchestration`},
  {name:`Django`,slug:`django`,note:`business systems`}
],
i=[
  {
    company:`VM Nebula`,
    href:`https://vmnebula.com`,
    logo:`/osama-amin-portfolio/img/logos/recruit41.webp`,
    title:`Founder & Chief Architect`,
    period:`2024 - Present`,
    location:`vmnebula.com`,
    summary:`The agent cloud with a spending limit. Dedicated cloud computers for autonomous AI agents with 1-click deployment, persistent storage, and strict cost guardrails.`,
    impact:[
      {label:`1-Click Agent Cloud`,stat:`Instant deploy`,text:`Deploy OpenClaw, Agent Zero, n8n, and custom AI agents on dedicated cloud VMs with persistent memory and storage.`},
      {label:`Built-In Spend Limits`,stat:`Zero bill shock`,text:`Real-time usage metering and hard spending caps that keep 24/7 autonomous agents within budget.`}
    ],
    clients:[
      {
        name:`Sarkit`,
        href:`https://sarkit.pk`,
        logo:`/osama-amin-portfolio/img/logos/atomicwork.png`,
        summary:`National award-winning Voice AI Point-of-Sale and retail operating system converting natural speech and supplier invoices into structured ledger records.`,
        impact:[
          {label:`National Winner (Technology Innovation)`,text:`Selected 1st Place nationwide in Technology Innovation (2026); featured in Arab News and national broadcast media.`}
        ]
      },
      {
        name:`Bulk AI Studio`,
        href:`https://workspace.google.com/marketplace/app/bulk_ai_studio/323643388682`,
        logo:`/osama-amin-portfolio/img/logos/spotdraft.png`,
        summary:`Published Google Workspace Marketplace app for batch translation, classification, extraction, and web-grounded enrichment inside Google Sheets.`,
        impact:[
          {label:`Google Workspace Marketplace`,text:`Asynchronous batch processing with verified source citations attached to web-derived answers.`}
        ]
      }
    ]
  },
  {
    company:`Open Source Contributions`,
    href:`https://github.com/Vmnebula`,
    logo:`/osama-amin-portfolio/img/logos/think41.svg`,
    title:`Open Source Contributor (Redis, fsspec, AsyncSSH, Agno & AnyIO)`,
    period:`2025 - Present`,
    location:`Global Open Source`,
    summary:`Contributing async networking, filesystem integrity, and concurrency fixes to foundational open-source Python and AI libraries.`,
    impact:[
      {label:`Redis, fsspec & AsyncSSH`,stat:`Merged patches`,text:`Resolved async cluster connection lifecycle, filesystem wrapper delegation, and SSH authentication concurrency bugs.`},
      {label:`AI & Async Ecosystem`,stat:`Core libraries`,text:`Active contributor across Agno, AnyIO, NATS.py, RQ, APScheduler, and Lastbook.`}
    ]
  },
  {
    company:`NayaCloud Technologies`,
    href:`https://nayacloud.com`,
    logo:`/osama-amin-portfolio/img/logos/nokia.svg`,
    title:`Founder & Cloud Architect`,
    period:`2020 - Present`,
    location:`nayacloud.com`,
    summary:`Enterprise cloud architecture, platform engineering, and full-stack product delivery across multi-cloud environments.`,
    impact:[
      {label:`Cloud & Platform Engineering`,stat:`End-to-end delivery`,text:`Architected multi-cloud infrastructure, isolated virtual desktops, zero-trust networking, and automated CI/CD pipelines.`},
      {label:`Recognition & Ecosystem`,stat:`National Winner`,text:`1st Place Winner in Technology Innovation (2026); Orbit Startups (SOSV) ecosystem.`}
    ]
  }
],
a=[
  {label:`Flagship`,value:`VM Nebula`,detail:`A computer for your AI agent`,more:`1-click cloud with hard spending limits`,href:`https://vmnebula.com`},
  {label:`Open Source`,value:`Redis & Python OSS`,detail:`Async cluster & systems reliability`,more:`merged contributor in Redis, fsspec, AsyncSSH & Agno`,href:`https://github.com/Vmnebula`},
  {label:`Recognition`,value:`National Award Winner`,detail:`1st Place · Technology Innovation`,more:`selected #1 out of 700+ companies (2026)`,href:`https://sarkit.pk`},
  {label:`Press`,value:`Arab News Feature`,detail:`Voice AI & retail innovation`,more:`featured in international & national media`,href:`https://www.arabnews.pk/pakistan/saudi-backed-wafi-energy-honors-pakistani-entrepreneurs-at-awards-show-3006278`}
],
o={
  "VM Nebula":{itch:`AI agents die on laptops or cause surprise cloud bills.`,built:`Dedicated cloud VMs for AI agents with hard spending limits.`},
  Sarkit:{itch:`Merchants do not want to type into complex ERPs.`,built:`Voice-first software that turns speech and bills into ledger entries.`},
  "Bulk AI Studio":{itch:`Running prompts row by row in spreadsheets is slow.`,built:`A published Google Workspace app for batch AI in Google Sheets.`},
  Substacker:{itch:`Teams lose track of AI spend across providers.`,built:`Open-source cost attribution, live reporting, and budget controls.`},
  "Vorlagen Direkt":{itch:`Business templates often hide behind paywalls.`,built:`Fast browser calculators and formula-verified workbooks.`}
},
s=[
  {
    name:`VM Nebula`,
    kind:`Cloud Platform for AI Agents`,
    year:`2026`,
    hook:`A computer for your AI agent.`,
    blurb:`Deploy OpenClaw, Agent Zero, or n8n in 1 click on dedicated cloud VMs with persistent storage and strict AI spend controls.`,
    points:[
      `Dedicated cloud environments with persistent memory and storage`,
      `1-click templates for OpenClaw, Agent Zero, n8n, and custom agents`,
      `Built-in spending limits and live cost visibility`
    ],
    stack:[`Cloud Infrastructure`,`Containers`,`AI Agents`],
    shot:`/osama-amin-portfolio/img/projects/whisprcatch.jpg`,
    live:`https://vmnebula.com`,
    repo:`https://github.com/Vmnebula`
  },
  {
    name:`Sarkit`,
    kind:`Voice AI Point of Sale`,
    year:`2026`,
    hook:`Speak your sale. It updates the ledger.`,
    blurb:`National award-winning Voice AI retail operating system. Converts natural speech and supplier invoices into structured inventory and accounting records.`,
    points:[
      `Voice-to-ledger workflows in natural local languages`,
      `Automated line-item extraction from supplier invoices`,
      `1st Place National Winner in Technology Innovation (2026)`
    ],
    stack:[`Voice AI`,`Document Vision`,`Cloud Sync`],
    shot:`/osama-amin-portfolio/img/projects/daytrail.jpg`,
    live:`https://sarkit.pk`,
    repo:`https://github.com/Vmnebula`
  },
  {
    name:`Bulk AI Studio`,
    kind:`Published Workspace App`,
    year:`2026`,
    hook:`AI workflows inside Google Sheets.`,
    blurb:`Published on the Google Workspace Marketplace. Run translation, classification, structured extraction, and web-grounded enrichment across thousands of spreadsheet rows.`,
    points:[
      `Published on the official Google Workspace Marketplace`,
      `Asynchronous batch processing for large spreadsheets`,
      `Attaches verified source citations to web-derived answers`
    ],
    stack:[`Google Sheets`,`Batch Processing`,`Source Citations`],
    shot:`/osama-amin-portfolio/img/projects/agentconf.jpg`,
    live:`https://workspace.google.com/marketplace/app/bulk_ai_studio/323643388682`,
    repo:`https://github.com/Vmnebula`
  },
  {
    name:`Substacker`,
    kind:`Open-Source FinOps`,
    year:`2026`,
    hook:`AI cost attribution across providers.`,
    blurb:`Tracks AI usage by team and workflow with live reporting, budget guardrails, and anomaly detection so engineering teams stay in control of spend.`,
    points:[
      `Unified cost attribution across providers and teams`,
      `Live budget controls and anomaly detection`,
      `Open-source and self-hostable`
    ],
    stack:[`Cost Intelligence`,`Real-Time Metering`,`Open Source`],
    shot:`/osama-amin-portfolio/img/projects/dayblocks.jpg`,
    live:`https://github.com/Vmnebula/substacker`,
    repo:`https://github.com/Vmnebula/substacker`
  },
  {
    name:`Vorlagen Direkt`,
    kind:`Business Tools & Templates`,
    year:`2026`,
    hook:`Interactive business calculators and clean workbooks.`,
    blurb:`Fast browser-based financial and operational calculators paired with clean, formula-verified spreadsheet templates for small businesses.`,
    points:[
      `Instant client-side calculators with zero server lag`,
      `Formula-verified Excel and OpenDocument workbooks`,
      `Built for clarity, speed, and practical daily use`
    ],
    stack:[`Web Applications`,`Financial Tools`,`Spreadsheets`],
    shot:`/osama-amin-portfolio/img/projects/chaoslab.jpg`,
    live:`https://vorlagen-direkt.com`,
    repo:`https://github.com/Vmnebula`
  }
],
c={now:`Right now.`,work:`Selected work & experience.`,stack:`Core toolkit.`,github:`Proof of work.`,off:`Highlights & recognition.`,contact:`Get in touch.`,quests:`Shipped products.`},
l=structuredClone({profile:e,greetings:t,currently:n,techStack:r,experience:i,offbeat:a,projects:s,titles:c}),
u=()=>structuredClone(l);
function d(e,t){let n=(e,t)=>{Array.isArray(t)&&t.length&&e.splice(0,e.length,...t)};if(t.profile&&Object.assign(e.profile,t.profile),t.titles)for(let[n,r]of Object.entries(t.titles))r&&(e.titles[n]=r);n(e.greetings,t.greetings),n(e.currently,t.currently),n(e.techStack,t.techStack),n(e.experience,t.experience),n(e.offbeat,t.offbeat),n(e.projects,t.projects)}
function f(o){d({profile:e,greetings:t,currently:n,techStack:r,experience:i,offbeat:a,projects:s,titles:c},o)}
export{t as a,s as c,c as d,i,o as l,n,a as o,u as r,e as s,f as t,r as u};
