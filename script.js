const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

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
