console.log("System Initializing...");
console.log("Loading Player Profile...");

document.addEventListener('DOMContentLoaded', () => {
  // Update Year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Add random glitch effect to profile occasionally
  const avatar = document.querySelector('.avatar-container');
  if (avatar) {
    setInterval(() => {
      if (Math.random() > 0.95) {
        avatar.style.filter = `sepia(20%) hue-rotate(${Math.floor(Math.random() * 360)}deg) contrast(1.5)`;
        setTimeout(() => {
          avatar.style.filter = ''; // Reset
        }, 100);
      }
    }, 2000);
  }

  // Parallax for Holograms
  const holoImages = document.querySelectorAll('.holo-img');
  document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
      const x = (e.clientX / window.innerWidth - 0.5) * 20; // -10 to 10
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      holoImages.forEach(img => {
        img.style.transform = `translate(${-x}px, ${-y}px) scale(1.05)`;
      });

      // Particle Trail
      if (Math.random() > 0.8) { // Don't spawn too many
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${e.clientX}px`;
        particle.style.top = `${e.clientY}px`;
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
      }
    }
  });

  // 3D Tilt Effect for Cards
  const cards = document.querySelectorAll('[data-tilt]');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  });

  // --- EASTER EGGS ---

  // 1. Click Explosion
  document.addEventListener('click', (e) => {
    createExplosion(e.clientX, e.clientY);
  });

  function createExplosion(x, y) {
    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        // Random velocity
        const velocityX = (Math.random() - 0.5) * 10;
        const velocityY = (Math.random() - 0.5) * 10;
        
        particle.style.setProperty('--tx', `${velocityX * 20}px`);
        particle.style.setProperty('--ty', `${velocityY * 20}px`);
        particle.style.animation = `explosionParticle 0.8s forwards ease-out`; // Custom animation for click
        
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 800);
    }
  }

  // 2. Konami Code (God Mode)
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;

  document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateGodMode();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
  });

  function activateGodMode() {
    document.body.classList.toggle('god-mode');
    if (document.body.classList.contains('god-mode')) {
        console.log("GOD MODE ACTIVATED: UNLIMITED POWER!");
        alert("GOD MODE ACTIVATED: UNLIMITED POWER!"); // Direct feedback
        // Change colors
        document.documentElement.style.setProperty('--accent-primary', '#ff00ff');
        document.documentElement.style.setProperty('--accent-secondary', '#ffe600');
    } else {
        console.log("GOD MODE DEACTIVATED");
        // Reset colors (approximate originals)
        document.documentElement.style.setProperty('--accent-primary', '#00f2ff');
        document.documentElement.style.setProperty('--accent-secondary', '#bd00ff');
    }
  }

  console.log("System Online. Welcome, Player.");
});
