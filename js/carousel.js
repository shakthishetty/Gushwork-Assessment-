// Carousel functionality
function scrollCarousel(direction) {
  console.log("scrollCarousel called with direction:", direction);
  const carousel = document.getElementById("carousel");
  
  if (!carousel) {
    console.error("Carousel element not found");
    return;
  }
  
  const card = carousel.querySelector(".card");
  
  if (!card) {
    console.error("Card element not found in carousel");
    return;
  }
  
  // Calculate scroll amount: one card width + gap
  const cardWidth = card.offsetWidth;
  const gap = 20; // gap between cards
  const scrollAmount = cardWidth + gap;
  
  console.log("Card width:", cardWidth, "Gap:", gap, "Scroll amount:", scrollAmount);

  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}

// Make function globally accessible for onclick handlers
window.scrollCarousel = scrollCarousel;

// Initialize carousel when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Wait for carousel to be loaded by main.js
  setTimeout(() => {
    initializeCarousel();
  }, 600); // Wait longer since carousel loads after other components
});

function initializeCarousel() {
  console.log("Trying to initialize carousel...");
  const carousel = document.getElementById("carousel");
  
  if (!carousel) {
    console.log("Carousel not loaded yet, retrying...");
    setTimeout(() => {
      initializeCarousel();
    }, 200);
    return;
  }
  
  console.log("Carousel found! Element:", carousel);
  const cards = carousel.querySelectorAll(".card");
  console.log("Number of cards found:", cards.length);
  
  console.log("Carousel initialized successfully!");
  
  // Optional: Add keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      console.log("Left arrow pressed");
      scrollCarousel(-1);
    } else if (e.key === 'ArrowRight') {
      console.log("Right arrow pressed");
      scrollCarousel(1);
    }
  });
}

// Make initialization function globally accessible
window.initializeCarousel = initializeCarousel;
