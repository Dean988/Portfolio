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

  console.log("System Online. Welcome, Player.");
});
