const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const translations = {
  en: {
    "nav.services": "Work",
    "nav.profile": "Story",
    "nav.infrastructure": "Systems",
    "nav.contact": "Contact",
    "nav.cta": "Email me",
    "hero.eyebrow": "Solo AI practice rooted in sociology",
    "hero.title": "I build quiet generative systems that stay respectful to people.",
    "hero.body":
      "I'm Dino Di Emidio, a one-person AI studio shaped by sociology. I move slowly, observe your teams' pace, and only suggest infrastructure your people can actually hold onto.",
    "hero.tag1": "One-person studio",
    "hero.tag2": "Data & society",
    "hero.tag3": "Calm engineering",
    "hero.primaryCta": "Request a calm audit",
    "hero.secondaryCta": "Browse the work",
    "stats.degree.label": "Sociology foundation",
    "stats.degree.title": "Bachelor's in Sociology",
    "stats.degree.body":
      "Taught me to read contexts carefully, listen to communities, and keep people in every measurement.",
    "stats.research.label": "Data science depth",
    "stats.research.title": "Master's in Social Data Science",
    "stats.research.body":
      "Years spent blending statistics and ethnography so AI decisions are never cut off from reality.",
    "stats.mastery.label": "AI & management",
    "stats.mastery.title": "Second-Level Master in AI & Management",
    "stats.mastery.body":
      "Politecnico di Torino graduate focused on governance, documentation, and long-haul maintainability.",
    "stats.experience.label": "Trust",
    "stats.experience.title": "Years in AI practice",
    "stats.experience.body":
      "I stay close to clients long after delivery to make sure systems stay calm, legible, and kind.",
    "services.eyebrow": "Practice focus",
    "services.title": "Work crafted with research, care, and tidy operations.",
    "services.advisory.title": "Research-led advisory",
    "services.advisory.body":
      "Lightweight studies to align algorithms with social context before scaling anything that could surprise people.",
    "services.toggle": "Focus points",
    "services.advisory.point1": "Prompt + evaluation libraries documented for non-experts",
    "services.advisory.point2": "Human-in-the-loop rituals that respect team tempo",
    "services.advisory.point3": "Plain-language memos for decision makers",
    "services.infrastructure.title": "Steady infrastructure",
    "services.infrastructure.body":
      "Practical RAG and agent stacks that small teams can run without heroics or labyrinthine maintenance.",
    "services.infrastructure.point1": "Azure/AWS mixes with observability and graceful fallbacks",
    "services.infrastructure.point2": "Vector-native data estates with honest documentation",
    "services.infrastructure.point3": "Resilience guides for latency, privacy, and regulation",
    "services.insight.title": "Social insight notes",
    "services.insight.body":
      "Short field notes translating human behavior into grounded inputs for models, roadmaps, and teams.",
    "services.insight.point1": "Inclusive research kits and careful data hygiene",
    "services.insight.point2": "Cultural signal monitoring and policy sensemaking",
    "services.insight.point3": "Gentle workshops that onboard teams without hype",
    "about.eyebrow": "Story",
    "about.title": "I practice calm AI by mixing sociology and engineering.",
    "about.body":
      "Sociology taught me to sit with communities before touching any dataset. Later, social data science and an AI management Master gave me the tooling to build real systems, but I kept the quiet approach: small rituals, shared documentation, and no theatrics. Every engagement is a note in my own learning log.",
    "about.pill1": "Prompt architecture & RAG",
    "about.pill2": "Data storytelling",
    "about.pill3": "AI governance",
    "about.pill4": "Infra strategy",
    "about.principle1.title": "Listen first",
    "about.principle1.body": "Interviews and policy reviews happen before diagrams so the work reflects real boundaries.",
    "about.principle2.title": "Document gently",
    "about.principle2.body": "Every artifact is written in plain language and versioned so teams never feel lost.",
    "about.principle3.title": "Measure with people",
    "about.principle3.body": "Metrics are paired with qualitative check-ins to keep AI aligned with human outcomes.",
    "infra.eyebrow": "Process",
    "infra.title": "Steps I follow to keep generative systems calm.",
    "infra.step1.title": "Observe",
    "infra.step1.body":
      "Interviews, policy scans, and impact mapping to learn how teams actually work before proposing anything.",
    "infra.step2.title": "Shape",
    "infra.step2.body":
      "Architecture sketches, evaluation loops, and small proofs that confirm the system is understandable.",
    "infra.step3.title": "Settle",
    "infra.step3.body":
      "Documentation, handover sessions, and governance nudges that keep the system steady after launch.",
    "cta.eyebrow": "Say hello",
    "cta.title": "Write me if you'd like thoughtful AI support.",
    "cta.body":
      "I'm happy to audit what you already have, design generous guardrails, or simply trade notes about building calmer generative systems.",
    "cta.caption": "Usually available for short advisory sprints and embedded builds.",
    "social.eyebrow": "Footnotes",
    "social.title": "Occasional notes, repos, and snapshots from the studio.",
    "social.linkedin": "LinkedIn",
    "social.github": "GitHub",
    "social.instagram": "Instagram",
    "footer.copy": "Dino Di Emidio. Independent AI consultant."
  },
  it: {
    "nav.services": "Lavori",
    "nav.profile": "Storia",
    "nav.infrastructure": "Sistemi",
    "nav.contact": "Contatti",
    "nav.cta": "Scrivimi",
    "hero.eyebrow": "Studio AI indipendente radicato nella sociologia",
    "hero.title": "Costruisco sistemi generativi discreti che rispettano le persone.",
    "hero.body":
      "Sono Dino Di Emidio, uno studio individuale di AI formato dalla sociologia. Mi muovo con calma, osservo il ritmo dei tuoi team e suggerisco solo infrastrutture che le persone possono sostenere davvero.",
    "hero.tag1": "Studio personale",
    "hero.tag2": "Dati e società",
    "hero.tag3": "Ingegneria calma",
    "hero.primaryCta": "Richiedi un audit sereno",
    "hero.secondaryCta": "Esplora i lavori",
    "stats.degree.label": "Fondazione sociologica",
    "stats.degree.title": "Laurea in Sociologia",
    "stats.degree.body":
      "Mi ha insegnato a leggere i contesti con cura, ascoltare le comunità e tenere le persone in ogni misura.",
    "stats.research.label": "Profondità data science",
    "stats.research.title": "Master in Social Data Science",
    "stats.research.body":
      "Anni trascorsi a intrecciare statistica ed etnografia per non staccare mai le decisioni di IA dalla realtà.",
    "stats.mastery.label": "AI & management",
    "stats.mastery.title": "Master di II livello in AI & Management",
    "stats.mastery.body":
      "Laurea al Politecnico di Torino con focus su governance, documentazione e manutenzione di lungo periodo.",
    "stats.experience.label": "Fiducia",
    "stats.experience.title": "Anni di pratica AI",
    "stats.experience.body":
      "Resto vicino ai clienti anche dopo la consegna per mantenere i sistemi calmi, leggibili e gentili.",
    "services.eyebrow": "Ambiti di pratica",
    "services.title": "Lavori curati con ricerca, attenzione e operatività ordinata.",
    "services.advisory.title": "Consulenza guidata dalla ricerca",
    "services.advisory.body":
      "Indagini leggere per allineare gli algoritmi al contesto sociale prima di scalare qualcosa che possa sorprendere le persone.",
    "services.toggle": "Punti chiave",
    "services.advisory.point1": "Librerie di prompt + evaluation documentate per i non addetti",
    "services.advisory.point2": "Rituali human-in-the-loop che rispettano il ritmo del team",
    "services.advisory.point3": "Memo in linguaggio semplice per i decision maker",
    "services.infrastructure.title": "Infrastrutture stabili",
    "services.infrastructure.body":
      "Stack RAG e agenti pratici che i team piccoli possono gestire senza eroismi o manutenzioni labirintiche.",
    "services.infrastructure.point1": "Mix Azure/AWS con osservabilità e fallback morbidi",
    "services.infrastructure.point2": "Data estate vettoriali con documentazione onesta",
    "services.infrastructure.point3": "Guide di resilienza per latenza, privacy e norme",
    "services.insight.title": "Note di insight sociale",
    "services.insight.body":
      "Brevi field note che traducono i comportamenti umani in input solidi per modelli, roadmap e team.",
    "services.insight.point1": "Kit di ricerca inclusivi e igiene accurata dei dati",
    "services.insight.point2": "Monitoraggio dei segnali culturali e lettura delle policy",
    "services.insight.point3": "Workshop delicati che coinvolgono i team senza hype",
    "about.eyebrow": "Storia",
    "about.title": "Pratico un'IA calma mescolando sociologia e ingegneria.",
    "about.body":
      "La sociologia mi ha insegnato a sedermi con le comunità prima di toccare i dataset. In seguito, la Social Data Science e un Master in AI Management mi hanno dato gli attrezzi per costruire sistemi veri, ma ho mantenuto l'approccio quieto: rituali piccoli, documentazione condivisa, niente effetti speciali. Ogni progetto è una nota nel mio diario di apprendimento.",
    "about.pill1": "Architettura di prompt & RAG",
    "about.pill2": "Data storytelling",
    "about.pill3": "Governance dell'IA",
    "about.pill4": "Strategia infrastrutturale",
    "about.principle1.title": "Ascoltare prima",
    "about.principle1.body": "Interviste e analisi di policy arrivano prima dei diagrammi per riflettere i confini reali.",
    "about.principle2.title": "Documentare con delicatezza",
    "about.principle2.body": "Ogni artefatto è chiaro, versionato e leggibile per non far sentire nessuno smarrito.",
    "about.principle3.title": "Misurare con le persone",
    "about.principle3.body": "Alle metriche affianco check-in qualitativi per mantenere l'IA allineata agli esiti umani.",
    "infra.eyebrow": "Processo",
    "infra.title": "Passi che seguo per mantenere i sistemi generativi sereni.",
    "infra.step1.title": "Osservare",
    "infra.step1.body":
      "Interviste, analisi di policy e impact mapping per capire come lavorano davvero i team prima di proporre soluzioni.",
    "infra.step2.title": "Dare forma",
    "infra.step2.body":
      "Architetture, cicli di valutazione e piccole prove che confermano la comprensibilità del sistema.",
    "infra.step3.title": "Stabilizzare",
    "infra.step3.body":
      "Documentazione, sessioni di handover e suggerimenti di governance per tenere il sistema stabile dopo il lancio.",
    "cta.eyebrow": "Scrivimi",
    "cta.title": "Mandami un messaggio se cerchi un supporto attento sull'IA.",
    "cta.body":
      "Posso rivedere ciò che hai già, progettare guardrail generosi o semplicemente scambiare note su sistemi generativi più calmi.",
    "cta.caption": "Di solito disponibile per brevi sprint di advisory e progetti embedded.",
    "social.eyebrow": "Note a margine",
    "social.title": "Appunti, repo e scatti occasionali dallo studio.",
    "social.linkedin": "LinkedIn",
    "social.github": "GitHub",
    "social.instagram": "Instagram",
    "footer.copy": "Dino Di Emidio. Consulente AI indipendente."
  }
};

const localeElements = document.querySelectorAll("[data-i18n]");
const langButtons = document.querySelectorAll("[data-lang-button]");
const LANGUAGE_STORAGE_KEY = "preferred-language";
const fallbackLanguage = "en";

const setLanguage = (language) => {
  const selectedLanguage = translations[language] ? language : fallbackLanguage;
  const dictionary = translations[selectedLanguage];
  document.documentElement.lang = selectedLanguage;

  localeElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) return;
    const copy = dictionary[key];
    if (copy !== undefined) {
      element.textContent = copy;
    }
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.langButton === selectedLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive.toString());
  });

  localStorage.setItem(LANGUAGE_STORAGE_KEY, selectedLanguage);
};

const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
setLanguage(storedLanguage || fallbackLanguage);

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.langButton || fallbackLanguage);
  });
});

const cursorCloud = document.querySelector(".cursor-cloud");
const pointerFine = window.matchMedia("(pointer: fine)");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (cursorCloud && pointerFine.matches && !reduceMotion.matches) {
  let currentX = window.innerWidth / 2;
  let currentY = window.innerHeight / 2;
  let targetX = currentX;
  let targetY = currentY;
  let alpha = 0;
  let targetAlpha = 0;
  let fadeTimeout;

  const animate = () => {
    currentX += (targetX - currentX) * 0.18;
    currentY += (targetY - currentY) * 0.18;
    alpha += (targetAlpha - alpha) * 0.08;

    cursorCloud.style.setProperty("--x", `${currentX}px`);
    cursorCloud.style.setProperty("--y", `${currentY}px`);
    cursorCloud.style.setProperty("--scale", (0.32 + alpha * 0.28).toFixed(3));
    cursorCloud.style.setProperty("--alpha", alpha.toFixed(3));

    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);

  const update = (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
    targetAlpha = 0.4;
    clearTimeout(fadeTimeout);
    fadeTimeout = setTimeout(() => {
      targetAlpha = 0;
    }, 220);
  };

  document.addEventListener("pointermove", update);
  document.addEventListener("pointerdown", update);
  document.addEventListener("pointerleave", () => {
    targetAlpha = 0;
  });

  pointerFine.addEventListener?.("change", (event) => {
    if (!event.matches && cursorCloud) {
      cursorCloud.style.display = "none";
    }
  });
  reduceMotion.addEventListener?.("change", (event) => {
    if (event.matches && cursorCloud) {
      cursorCloud.style.display = "none";
    }
  });
} else if (cursorCloud) {
  cursorCloud.style.display = "none";
}

const serviceCards = Array.from(document.querySelectorAll(".service-card"));
const mobileBreakpoint = 720;
let isMobileLayout = null;

const updateServiceCards = () => {
  const collapse = window.innerWidth <= mobileBreakpoint;
  if (collapse === isMobileLayout) {
    serviceCards.forEach((card) => {
      const toggle = card.querySelector(".service-toggle");
      if (toggle && card.classList.contains("collapsible")) {
        toggle.setAttribute("aria-expanded", card.classList.contains("expanded").toString());
      }
    });
    return;
  }
  isMobileLayout = collapse;

  serviceCards.forEach((card) => {
    const toggle = card.querySelector(".service-toggle");
    if (!toggle) return;
    if (collapse) {
      card.classList.add("collapsible");
      card.classList.remove("expanded");
      toggle.setAttribute("aria-expanded", "false");
    } else {
      card.classList.remove("collapsible");
      card.classList.add("expanded");
      toggle.setAttribute("aria-expanded", "true");
    }
  });
};

serviceCards.forEach((card) => {
  const toggle = card.querySelector(".service-toggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    if (!card.classList.contains("collapsible")) return;
    card.classList.toggle("expanded");
    toggle.setAttribute("aria-expanded", card.classList.contains("expanded").toString());
  });
});

window.addEventListener("resize", updateServiceCards);
updateServiceCards();

document.querySelectorAll("[data-scroll-target]").forEach((element) => {
  element.addEventListener("click", () => {
    const target = document.querySelector(element.dataset.scrollTarget);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
