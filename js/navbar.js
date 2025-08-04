document.addEventListener("DOMContentLoaded", () => {
  fetch('./components/navbar.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('navbar-placeholder').innerHTML = html;
      
      // Initialize smart navbar behavior after loading
      initSmartNavbar();
    })
    .catch(err => console.error("Failed to load navbar:", err));
});

// Smart navbar scroll behavior
function initSmartNavbar() {
  const navbar = document.querySelector('.navbar');
  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateNavbar() {
    const scrollY = window.scrollY;
    const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';
    const scrollThreshold = 100; // Hide navbar after scrolling 100px

    if (scrollY > scrollThreshold) {
      if (scrollDirection === 'up') {
        // Scrolling up - hide navbar
        navbar.style.transform = 'translateY(-100%)';
        navbar.style.opacity = '0';
      } else {
        // Scrolling down - show navbar
        navbar.style.transform = 'translateY(0)';
        navbar.style.opacity = '1';
      }
    } else {
      // At top of page - always show navbar
      navbar.style.transform = 'translateY(0)';
      navbar.style.opacity = '1';
    }

    lastScrollY = scrollY;
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  }

  // Listen for scroll events
  window.addEventListener('scroll', requestTick, { passive: true });
  
  // Set initial state
  updateNavbar();
}
