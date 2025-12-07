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

  console.log("System Online. Welcome, Player.");
});
