const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const translations = {
  en: {
    "nav.services": "Services",
    "nav.profile": "Profile",
    "nav.infrastructure": "Infrastructure",
    "nav.contact": "Contact",
    "nav.cta": "Work together",
    "hero.eyebrow": "Generative Intelligence with Social Insight",
    "hero.title": "Human-centered AI infrastructures sculpted by sociology, data science, and advanced engineering.",
    "hero.body":
      "I'm Dino Di Emidio, an AI consultant with a sociological background. I carry years of hands-on work in generative and predictive systems, yet I approach every collaboration with humility: I listen first, learn the rhythm of your teams, and quietly align technology with what matters to people.",
    "hero.tag1": "Generative AI Consulting",
    "hero.tag2": "Intelligent Infrastructure",
    "hero.tag3": "Ethical Strategy",
    "hero.primaryCta": "Schedule a strategy call",
    "hero.secondaryCta": "Discover the services",
    "stats.degree.label": "Foundational Degree",
    "stats.degree.title": "Bachelor's in Sociology",
    "stats.degree.body":
      "Empathy-driven research, quantitative analysis, and the ability to read societal shifts before they become datasets.",
    "stats.research.label": "Advanced Research",
    "stats.research.title": "Master's in Social Data Science",
    "stats.research.body":
      "A 360-degree command of statistical modeling, large-scale data architectures, and social signal decoding.",
    "stats.mastery.label": "Executive Mastery",
    "stats.mastery.title": "Second-Level Master in AI & Management",
    "stats.mastery.body":
      "Politecnico di Torino honors graduate, bridging cutting-edge AI engineering with decision-grade governance.",
    "stats.experience.label": "Experience",
    "stats.experience.title": "Years in the AI field",
    "stats.experience.body":
      "Trusted partner for organizations seeking resilient, human-aware intelligence solutions.",
    "services.eyebrow": "Consulting Focus",
    "services.title": "AI services engineered for clarity, creativity, and control.",
    "services.advisory.title": "Generative AI Advisory",
    "services.advisory.body":
      "Narrative-driven prompt ecosystems, fine-tuning roadmaps, and policy-aware deployments designed to fit your mission.",
    "services.toggle": "Focus points",
    "services.advisory.point1": "Blueprints for product-grade prompt libraries and agent ops",
    "services.advisory.point2": "RAG, evaluation, and safety architecture for bespoke copilots",
    "services.advisory.point3": "Ethical guardrails anchored in sociological research",
    "services.infrastructure.title": "Intelligent Infrastructure",
    "services.infrastructure.body":
      "Cloud-native patterns that stabilize generative workloads without slowing innovation.",
    "services.infrastructure.point1": "Hybrid Azure/AWS stacks with observability hooks",
    "services.infrastructure.point2": "Vector-native data estates and orchestration",
    "services.infrastructure.point3": "Resilience kits for latency, privacy, and governance",
    "services.insight.title": "Social Insight Labs",
    "services.insight.body":
      "Research capsules that translate complex human behavior into AI inputs people can trust.",
    "services.insight.point1": "Inclusive data collection and debiasing routines",
    "services.insight.point2": "Signal analysis for communities, culture, and policy",
    "services.insight.point3": "Immersive workshops to make AI adoption intuitive",
    "about.eyebrow": "Profile",
    "about.title": "Sociologist by origin, AI strategist by evolution.",
    "about.body":
      "My practice is rooted in curiosity for people. Sociology taught me to dissect systems of meaning; the Master's in Social Data Science equipped me with the analytical tools to quantify them; and the second-level Master in Artificial Intelligence & Management showed me how to translate those insights into boardroom-ready decisions without losing empathy. Years in the field have blended these disciplines into a shared compass, and I try to keep it humble by measuring impact with the people who will live with the AI.",
    "about.pill1": "Prompt architecture & RAG",
    "about.pill2": "Data storytelling",
    "about.pill3": "AI governance",
    "about.pill4": "Infra strategy",
    "about.principle1.title": "Human pulse",
    "about.principle1.body": "Every model is evaluated for the people, cultures, and policies it touches.",
    "about.principle2.title": "Clarity",
    "about.principle2.body": "Complex systems are translated into intuitive rituals for your teams.",
    "about.principle3.title": "Continuity",
    "about.principle3.body": "Roadmaps include governance, measurement, and iteration from day one.",
    "infra.eyebrow": "Blueprint",
    "infra.title": "An opinionated path to intelligent generative infrastructure.",
    "infra.step1.title": "Sense",
    "infra.step1.body":
      "Read organizational signals, policies, and social impact metrics to map the real constraints before writing a single line of code.",
    "infra.step2.title": "Shape",
    "infra.step2.body":
      "Orchestrate data estates, vector layers, and orchestration engines that allow generative services to plug in without friction.",
    "infra.step3.title": "Scale",
    "infra.step3.body":
      "Deploy monitoring, evaluation, and cultural rituals so the AI stays explainable, performant, and socially meaningful.",
    "cta.eyebrow": "Let's collaborate",
    "cta.title": "Bring me your data, your aspirations, and the people you want to empower.",
    "cta.body":
      "Together we can create generative ecosystems that respect context, scale responsibly, and keep a human pulse at their core.",
    "cta.caption": "Available for strategic advisory, embedded projects, and talks.",
    "social.eyebrow": "Stay connected",
    "social.title": "Follow the research, the builds, and the behind-the-scenes.",
    "social.linkedin": "LinkedIn",
    "social.github": "GitHub",
    "social.instagram": "Instagram",
    "footer.copy": "Dino Di Emidio. All rights reserved."
  },
  it: {
    "nav.services": "Servizi",
    "nav.profile": "Profilo",
    "nav.infrastructure": "Infrastruttura",
    "nav.contact": "Contatti",
    "nav.cta": "Collabora con me",
    "hero.eyebrow": "Intelligenza generativa con sensibilità sociale",
    "hero.title":
      "Infrastrutture di IA centrate sull'essere umano, scolpite da sociologia, data science e ingegneria avanzata.",
    "hero.body":
      "Sono Dino Di Emidio, consulente di intelligenza artificiale con formazione sociologica. Porto anni di lavoro pratico su sistemi generativi e predittivi, ma affronto ogni collaborazione con umiltà: ascolto per primo, imparo il ritmo dei tuoi team e allineo la tecnologia a ciò che conta per le persone.",
    "hero.tag1": "Consulenza di IA generativa",
    "hero.tag2": "Infrastrutture intelligenti",
    "hero.tag3": "Strategia etica",
    "hero.primaryCta": "Prenota una call strategica",
    "hero.secondaryCta": "Scopri i servizi",
    "stats.degree.label": "Formazione di base",
    "stats.degree.title": "Laurea in Sociologia",
    "stats.degree.body":
      "Ricerca guidata dall'empatia, analisi quantitativa e capacità di leggere i cambiamenti sociali prima che diventino dati.",
    "stats.research.label": "Ricerca avanzata",
    "stats.research.title": "Master in Social Data Science",
    "stats.research.body":
      "Una padronanza a 360 gradi di modellazione statistica, architetture dati su larga scala e decodifica dei segnali sociali.",
    "stats.mastery.label": "Master executive",
    "stats.mastery.title": "Master di II livello in AI & Management",
    "stats.mastery.body":
      "Laureato con lode al Politecnico di Torino, coniugo ingegneria AI d'avanguardia e governance per il decision making.",
    "stats.experience.label": "Esperienza",
    "stats.experience.title": "Anni nel campo dell'IA",
    "stats.experience.body":
      "Partner di fiducia per organizzazioni che cercano soluzioni intelligenti, resilienti e orientate alle persone.",
    "services.eyebrow": "Ambiti di consulenza",
    "services.title": "Servizi di IA progettati per chiarezza, creatività e controllo.",
    "services.advisory.title": "Consulenza su IA generativa",
    "services.advisory.body":
      "Ecosistemi di prompt narrativi, piani di fine-tuning e rollout conformi alle policy, cuciti sulla tua missione.",
    "services.toggle": "Punti chiave",
    "services.advisory.point1": "Blueprint per librerie di prompt e agenti pronti alla produzione",
    "services.advisory.point2": "Architetture RAG, valutazione e safety per copiloti su misura",
    "services.advisory.point3": "Guardrail etici radicati nella ricerca sociologica",
    "services.infrastructure.title": "Infrastrutture intelligenti",
    "services.infrastructure.body":
      "Pattern cloud-native che stabilizzano i carichi generativi senza rallentare l'innovazione.",
    "services.infrastructure.point1": "Stack ibridi Azure/AWS con osservabilità integrata",
    "services.infrastructure.point2": "Data estate vettoriali e orchestrazione dedicata",
    "services.infrastructure.point3": "Kit di resilienza per latenza, privacy e governance",
    "services.insight.title": "Social Insight Labs",
    "services.insight.body":
      "Capsule di ricerca che trasformano comportamenti complessi in input di IA affidabili.",
    "services.insight.point1": "Raccolta dati inclusiva e routine di debiasing",
    "services.insight.point2": "Analisi dei segnali di comunità, cultura e policy",
    "services.insight.point3": "Workshop immersivi per rendere intuitiva l'adozione dell'IA",
    "about.eyebrow": "Profilo",
    "about.title": "Sociologo per origine, strategist di IA per evoluzione.",
    "about.body":
      "Il mio lavoro nasce dalla curiosità per le persone. La sociologia mi ha insegnato a decodificare i sistemi di significato; il Master in Social Data Science mi ha dato gli strumenti analitici per quantificarli; il Master di II livello in Artificial Intelligence & Management mi ha mostrato come tradurre queste intuizioni in decisioni pronte per il board senza perdere empatia. Gli anni sul campo hanno unito queste discipline in una bussola condivisa, che tengo umile misurando l'impatto con chi vivrà l'IA.",
    "about.pill1": "Architettura di prompt & RAG",
    "about.pill2": "Data storytelling",
    "about.pill3": "Governance dell'IA",
    "about.pill4": "Strategia infrastrutturale",
    "about.principle1.title": "Pulsazione umana",
    "about.principle1.body": "Ogni modello è valutato rispetto alle persone, culture e policy coinvolte.",
    "about.principle2.title": "Chiarezza",
    "about.principle2.body": "I sistemi complessi diventano rituali intuitivi per i tuoi team.",
    "about.principle3.title": "Continuità",
    "about.principle3.body": "Le roadmap includono governance, misurazione e iterazione fin dal primo giorno.",
    "infra.eyebrow": "Blueprint",
    "infra.title": "Un percorso deciso verso infrastrutture generative intelligenti.",
    "infra.step1.title": "Comprendere",
    "infra.step1.body":
      "Leggo segnali organizzativi, policy e metriche di impatto sociale per mappare i vincoli reali prima di scrivere codice.",
    "infra.step2.title": "Dare forma",
    "infra.step2.body":
      "Orchestra patrimoni dati, livelli vettoriali e motori che permettono ai servizi generativi di innestarsi senza attrito.",
    "infra.step3.title": "Scalare",
    "infra.step3.body":
      "Implemento monitoraggio, valutazione e rituali culturali affinché l'IA resti spiegabile, performante e significativa.",
    "cta.eyebrow": "Collaboriamo",
    "cta.title": "Portami i tuoi dati, le ambizioni e le persone che vuoi valorizzare.",
    "cta.body":
      "Insieme creiamo ecosistemi generativi che rispettano il contesto, scalano con responsabilità e mantengono il battito umano.",
    "cta.caption": "Disponibile per advisory strategica, progetti embedded e talk.",
    "social.eyebrow": "Resta in contatto",
    "social.title": "Segui la ricerca, i progetti e il dietro le quinte.",
    "social.linkedin": "LinkedIn",
    "social.github": "GitHub",
    "social.instagram": "Instagram",
    "footer.copy": "Dino Di Emidio. Tutti i diritti riservati."
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
