document.addEventListener('DOMContentLoaded', () => {
  // Year Update
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile Menu Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const mobileOverlay = document.querySelector('.mobile-nav-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileBtn && mobileOverlay) {
    mobileBtn.addEventListener('click', () => {
      mobileBtn.classList.toggle('active');
      mobileOverlay.classList.toggle('active');
      document.body.style.overflow = mobileOverlay.classList.contains('active') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileBtn.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // Scroll Reveal Animation
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add a small delay based on data-delay attribute if present
        const delay = entry.target.style.transitionDelay || '0s';
        setTimeout(() => {
          entry.target.classList.add('active');
        }, 0); // Let CSS handle the delay
      }
    });
  }, {
    threshold: 0.15, // Trigger a bit later for better effect
    rootMargin: "0px 0px -50px 0px"
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Parallax Effect for Visual Breaks
  const parallaxContainers = document.querySelectorAll('.parallax-container');

  window.addEventListener('scroll', () => {
    parallaxContainers.forEach(container => {
      const img = container.querySelector('.parallax-img');
      if (!img) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only animate if in view
      if (rect.top < windowHeight && rect.bottom > 0) {
        const speed = 0.5;
        const offset = (windowHeight - rect.top) * speed;
        // Subtle vertical movement
        // We need to make sure the image is tall enough or scale it up slightly in CSS to avoid gaps
        // For now, a simple translate Y
        // img.style.transform = `translateY(${offset * 0.1}px)`; 
        // Actually, let's do a simple scale effect on scroll for a "breathing" feel or just subtle parallax
        // Simple parallax: move image slightly opposite to scroll
        const yPos = -(rect.top * 0.15);
        img.style.transform = `translateY(${yPos}px) scale(1.1)`; // Scale 1.1 to prevent edges showing
      }
    });
  });

  // Custom Cursor Effect (Desktop Only)
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (!isTouchDevice) {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor-glow');
    document.body.appendChild(cursor);

    // Add styles for cursor dynamically if not in CSS
    cursor.style.position = 'fixed';
    cursor.style.width = '400px';
    cursor.style.height = '400px';
    cursor.style.borderRadius = '50%';
    cursor.style.background = 'radial-gradient(circle, rgba(0, 242, 255, 0.1), transparent 70%)'; // More subtle
    cursor.style.pointerEvents = 'none';
    cursor.style.transform = 'translate(-50%, -50%)';
    cursor.style.zIndex = '9999';
    cursor.style.transition = 'opacity 0.3s ease';
    cursor.style.mixBlendMode = 'screen';

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });

    function animateCursor() {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;

      cursorX += dx * 0.1;
      cursorY += dy * 0.1;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;

      requestAnimationFrame(animateCursor);
    }

    animateCursor();
  }
});
