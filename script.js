const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const translations = {
  en: {
    "nav.services": "Capabilities",
    "nav.profile": "Profile",
    "nav.infrastructure": "Method",
    "nav.contact": "Contact",
    "nav.cta": "Start a conversation",
    "hero.eyebrow": "Independent AI strategy studio",
    "hero.title": "Strategic generative systems shaped by sociology, governance, and operational rigour.",
    "hero.body":
      "I'm Dino Di Emidio. I translate field research and infrastructure design into professional AI programs, ensuring every workflow stays auditable, ethical, and adaptable for leadership teams.",
    "hero.tag1": "Advisory & architecture",
    "hero.tag2": "Sociology-led AI",
    "hero.tag3": "Operational stewardship",
    "hero.primaryCta": "Book an introductory call",
    "hero.secondaryCta": "See capabilities",
    "stats.degree.label": "Sociology foundation",
    "stats.degree.title": "Bachelor's in Sociology",
    "stats.degree.body":
      "Taught me to read contexts carefully, listen to communities, and keep people in every measurement.",
    "stats.research.label": "Data science depth",
    "stats.research.title": "Master's in Social Data Science",
    "stats.research.body":
      "Years spent blending statistics and ethnography so AI decisions remain anchored to reality.",
    "stats.mastery.label": "AI & management",
    "stats.mastery.title": "Second-Level Master in AI & Management",
    "stats.mastery.body":
      "Politecnico di Torino graduate focused on governance, documentation, and long-haul maintainability.",
    "stats.experience.label": "Trust",
    "stats.experience.title": "Years in AI practice",
    "stats.experience.body":
      "I stay close to clients long after delivery to keep systems calm, transparent, and compliant.",
    "services.eyebrow": "Capabilities",
    "services.title": "Disciplined services for research-led AI adoption.",
    "services.advisory.title": "Strategic intelligence",
    "services.advisory.body":
      "Assessments, governance playbooks, and measurable plans that align AI ambition with policy and culture.",
    "services.toggle": "Focus points",
    "services.advisory.point1": "Executive briefings and readiness audits",
    "services.advisory.point2": "Policy-aligned roadmaps with accountable KPIs",
    "services.advisory.point3": "Communication kits for boards and teams",
    "services.infrastructure.title": "Infrastructure orchestration",
    "services.infrastructure.body":
      "Modular RAG, agent, and evaluation stacks with documentation and controls suitable for regulated teams.",
    "services.infrastructure.point1": "Azure/AWS blueprints with observability baselines",
    "services.infrastructure.point2": "Vector pipelines with evaluation harnesses",
    "services.infrastructure.point3": "Resilience runbooks for latency, privacy, and compliance",
    "services.insight.title": "Human insight programs",
    "services.insight.body":
      "Qualitative and quantitative loops that translate behaviour into grounded prompts, policies, and enablement.",
    "services.insight.point1": "Inclusive research ops and data hygiene protocols",
    "services.insight.point2": "Culture and signal monitoring for change management",
    "services.insight.point3": "Enablement sessions and narrative documentation",
    "about.eyebrow": "Profile",
    "about.title": "Sociologist delivering grounded AI outcomes.",
    "about.body":
      "My training spans sociology, social data science, and an AI & management Master at Politecnico di Torino. I pair ethnographic research with infrastructure design so leaders receive solutions that are technically sound, culturally aware, and documented for long-term governance.",
    "about.pill1": "Prompt architecture & RAG",
    "about.pill2": "Data storytelling",
    "about.pill3": "AI governance",
    "about.pill4": "Infra strategy",
    "about.principle1.title": "Due diligence",
    "about.principle1.body": "Policy reviews, stakeholder interviews, and risk registers precede any architecture.",
    "about.principle2.title": "Transparent documentation",
    "about.principle2.body": "All deliverables ship with plain-language dossiers, diagrams, and operational checklists.",
    "about.principle3.title": "Shared stewardship",
    "about.principle3.body": "Handover sessions, training, and governance nudges keep teams confident after launch.",
    "infra.eyebrow": "Method",
    "infra.title": "A professional rhythm for every engagement.",
    "infra.step1.title": "Assess",
    "infra.step1.body":
      "Diagnostics, governance reviews, and risk mapping to translate organisational reality into requirements.",
    "infra.step2.title": "Design",
    "infra.step2.body":
      "Architecture, evaluation, and roadmap design with clear owners, KPIs, and documentation.",
    "infra.step3.title": "Embed",
    "infra.step3.body":
      "Deployment oversight, training, and governance cadences to keep the system performing responsibly.",
    "cta.eyebrow": "Engage",
    "cta.title": "Ready to discuss your AI agenda?",
    "cta.body":
      "I can evaluate current initiatives, architect new programs, or serve as an embedded strategist alongside your leadership team.",
    "cta.caption": "Open for retainers, advisory sprints, and executive reviews.",
    "social.eyebrow": "Journal",
    "social.title": "Research notes, repositories, and studio updates.",
    "social.linkedin": "LinkedIn",
    "social.github": "GitHub",
    "social.instagram": "Instagram",
    "footer.copy": "Dino Di Emidio. Independent AI strategist."
  },
  it: {
    "nav.services": "Competenze",
    "nav.profile": "Profilo",
    "nav.infrastructure": "Metodo",
    "nav.contact": "Contatti",
    "nav.cta": "Avvia una conversazione",
    "hero.eyebrow": "Studio indipendente di strategia AI",
    "hero.title": "Sistemi generativi strategici guidati da sociologia, governance e rigore operativo.",
    "hero.body":
      "Sono Dino Di Emidio. Traduco ricerca sul campo e design infrastrutturale in programmi di IA professionali, così ogni flusso rimane verificabile, etico e adattabile per i vertici aziendali.",
    "hero.tag1": "Consulenza e architettura",
    "hero.tag2": "IA guidata dalla sociologia",
    "hero.tag3": "Stewardship operativa",
    "hero.primaryCta": "Prenota un primo incontro",
    "hero.secondaryCta": "Vedi le competenze",
    "stats.degree.label": "Fondazione sociologica",
    "stats.degree.title": "Laurea in Sociologia",
    "stats.degree.body":
      "Mi ha insegnato a leggere i contesti, ascoltare le comunità e includere le persone in ogni misurazione.",
    "stats.research.label": "Profondità data science",
    "stats.research.title": "Master in Social Data Science",
    "stats.research.body":
      "Anni trascorsi a intrecciare statistica ed etnografia per mantenere le decisioni di IA ancorate alla realtà.",
    "stats.mastery.label": "AI & management",
    "stats.mastery.title": "Master di II livello in AI & Management",
    "stats.mastery.body":
      "Laureato al Politecnico di Torino con focus su governance, documentazione e sostenibilità operativa.",
    "stats.experience.label": "Fiducia",
    "stats.experience.title": "Anni di pratica AI",
    "stats.experience.body":
      "Resto vicino ai clienti anche dopo la consegna per mantenere i sistemi stabili, trasparenti e conformi.",
    "services.eyebrow": "Competenze",
    "services.title": "Servizi rigorosi per adottare l'IA con metodo.",
    "services.advisory.title": "Intelligence strategica",
    "services.advisory.body":
      "Assessment, manuali di governance e piani misurabili che allineano ambizione e policy.",
    "services.toggle": "Punti chiave",
    "services.advisory.point1": "Briefing per executive e audit di readiness",
    "services.advisory.point2": "Roadmap aderenti alle policy con KPI responsabilizzati",
    "services.advisory.point3": "Kit di comunicazione per board e team",
    "services.infrastructure.title": "Orchestrazione infrastrutturale",
    "services.infrastructure.body":
      "Stack RAG, agenti ed evaluation modulari con documentazione e controlli per team regolamentati.",
    "services.infrastructure.point1": "Blueprint Azure/AWS con baseline di osservabilità",
    "services.infrastructure.point2": "Pipeline vettoriali con harness di valutazione",
    "services.infrastructure.point3": "Runbook di resilienza per latenza, privacy e compliance",
    "services.insight.title": "Programmi di insight umano",
    "services.insight.body":
      "Cicli qualitativi e quantitativi che traducono i comportamenti in prompt, policy ed enablement concreti.",
    "services.insight.point1": "Ricerca inclusiva e protocolli di igiene dati",
    "services.insight.point2": "Monitoraggio culturale e change management",
    "services.insight.point3": "Sessioni di enablement e documentazione narrativa",
    "about.eyebrow": "Profilo",
    "about.title": "Sociologo che consegna risultati di IA concreti.",
    "about.body":
      "Il mio percorso attraversa sociologia, social data science e un Master in AI & Management al Politecnico di Torino. Unisco ricerca etnografica e design infrastrutturale per offrire soluzioni solide, consapevoli del contesto e documentate per la governance nel tempo.",
    "about.pill1": "Architettura di prompt & RAG",
    "about.pill2": "Data storytelling",
    "about.pill3": "Governance dell'IA",
    "about.pill4": "Strategia infrastrutturale",
    "about.principle1.title": "Due diligence",
    "about.principle1.body": "Analisi di policy, interviste e risk register prima di progettare l'architettura.",
    "about.principle2.title": "Documentazione trasparente",
    "about.principle2.body": "Ogni consegna include dossier chiari, diagrammi e checklist operative.",
    "about.principle3.title": "Custodia condivisa",
    "about.principle3.body": "Training, handover e suggerimenti di governance per mantenere la fiducia nel tempo.",
    "infra.eyebrow": "Metodo",
    "infra.title": "Un ritmo professionale per ogni incarico.",
    "infra.step1.title": "Valutare",
    "infra.step1.body":
      "Diagnostiche, revisioni di governance e risk mapping per tradurre la realtà organizzativa in requisiti.",
    "infra.step2.title": "Progettare",
    "infra.step2.body":
      "Architetture, valutazioni e roadmap con owner chiari, KPI e documentazione.",
    "infra.step3.title": "Integrare",
    "infra.step3.body":
      "Supporto al deployment, formazione e cadenze di governance per mantenere le prestazioni in modo responsabile.",
    "cta.eyebrow": "Incarichi",
    "cta.title": "Pronto a discutere la tua agenda AI?",
    "cta.body":
      "Posso valutare iniziative in corso, progettare nuovi programmi o affiancarmi come strategist embedded al tuo leadership team.",
    "cta.caption": "Disponibile per retainer, advisory sprint e revisioni executive.",
    "social.eyebrow": "Journal",
    "social.title": "Note di ricerca, repository e aggiornamenti dallo studio.",
    "social.linkedin": "LinkedIn",
    "social.github": "GitHub",
    "social.instagram": "Instagram",
    "footer.copy": "Dino Di Emidio. Stratega AI indipendente."
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

const cleanupPanelTransition = (panel) => {
  if (!panel || !panel._heightTransitionHandler) return;
  panel.removeEventListener("transitionend", panel._heightTransitionHandler);
  panel._heightTransitionHandler = null;
};

const instantHeight = (panel, expand) => {
  panel.style.transition = "none";
  panel.style.height = expand ? "auto" : "0px";
  requestAnimationFrame(() => {
    panel.style.removeProperty("transition");
  });
};

const adjustPanelHeight = (panel, expand, animate = true) => {
  if (!panel) return;

  cleanupPanelTransition(panel);

  if (!animate) {
    instantHeight(panel, expand);
    return;
  }

  const finalize = (event) => {
    if (event.propertyName !== "height") return;
    if (expand) {
      panel.style.height = "auto";
    }
    cleanupPanelTransition(panel);
  };

  panel._heightTransitionHandler = finalize;
  panel.addEventListener("transitionend", finalize);

  const run = () => {
    if (expand) {
      const target = `${panel.scrollHeight}px`;
      if (panel.style.height === "" || panel.style.height === "auto") {
        panel.style.height = "0px";
      }
      requestAnimationFrame(() => {
        panel.style.height = target;
      });
    } else {
      const currentHeight = panel.scrollHeight;
      panel.style.height = `${currentHeight}px`;
      requestAnimationFrame(() => {
        panel.style.height = "0px";
      });
    }
  };

  run();
};

const setCardExpansion = (card, expand, { animate = true } = {}) => {
  const toggle = card.querySelector(".service-toggle");
  const panel = card.querySelector(".service-details ul");
  card.classList.toggle("expanded", expand);

  if (toggle) {
    toggle.setAttribute("aria-expanded", expand.toString());
  }

  if (card.classList.contains("collapsible")) {
    adjustPanelHeight(panel, expand, animate);
  } else if (panel) {
    cleanupPanelTransition(panel);
    panel.style.height = "";
  }
};

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
      setCardExpansion(card, false, { animate: false });
    } else {
      card.classList.remove("collapsible");
      setCardExpansion(card, true, { animate: false });
    }
  });
};

serviceCards.forEach((card) => {
  const toggle = card.querySelector(".service-toggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    if (!card.classList.contains("collapsible")) return;
    const expand = !card.classList.contains("expanded");
    setCardExpansion(card, expand);
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
