// // Auto-sliding testimonial carousel - truly seamless infinite loop
// function initTestimonialSlider() {
//   const slider = document.getElementById('testimonial-slider');
//   if (!slider) {
//     console.log('Testimonial slider not found');
//     return;
//   }

//   console.log('Initializing seamless auto-sliding testimonial...');
  
//   const originalCards = slider.querySelectorAll('.testimonial-card:not(.testimonial-clone)');
//   if (originalCards.length === 0) {
//     console.log('No testimonial cards found');
//     return;
//   }

//   const totalCards = originalCards.length;
//   let currentIndex = 0;
//   let isTransitioning = false;
  
//   // Clear any existing clones first
//   const existingClones = slider.querySelectorAll('.testimonial-clone');
//   existingClones.forEach(clone => clone.remove());
  
//   // Clone all cards at the end for truly seamless infinite scrolling
//   originalCards.forEach(card => {
//     const clone = card.cloneNode(true);
//     clone.classList.add('testimonial-clone');
//     slider.appendChild(clone);
//   });
  
//   // Set initial position (start with no transform to show original cards)
//   slider.style.transform = 'translateX(0)';
//   slider.style.transition = 'transform 0.8s ease-in-out';
  
//   // Function to slide to next testimonial
//   function slideNext() {
//     if (isTransitioning) return;
    
//     isTransitioning = true;
//     currentIndex++;
    
//     // Calculate slide distance (each card is 25vw wide)
//     const slideDistance = currentIndex * 25;
    
//     // Smooth slide animation
//     slider.style.transition = 'transform 0.8s ease-in-out';
//     slider.style.transform = `translateX(-${slideDistance}vw)`;
    
//     // After sliding animation completes
//     setTimeout(() => {
//       // If we've moved past the original cards into the cloned area
//       if (currentIndex >= totalCards) {
//         // Reset to the beginning position instantly (no animation)
//         currentIndex = 0;
//         slider.style.transition = 'none';
//         slider.style.transform = 'translateX(0)';
        
//         // Force browser reflow, then re-enable smooth transitions
//         slider.offsetHeight; // Force reflow
//         setTimeout(() => {
//           slider.style.transition = 'transform 0.8s ease-in-out';
//           isTransitioning = false;
//         }, 10);
//       } else {
//         isTransitioning = false;
//       }
//     }, 800); // Wait for current slide animation to complete
//   }
  
//   // Start auto-sliding every 3 seconds
//   let autoSlideInterval = setInterval(slideNext, 3000);
  
//   // Pause on hover
//   slider.addEventListener('mouseenter', () => {
//     clearInterval(autoSlideInterval);
//   });
  
//   // Resume on mouse leave
//   slider.addEventListener('mouseleave', () => {
//     clearInterval(autoSlideInterval);
//     autoSlideInterval = setInterval(slideNext, 3000);
//   });
  
//   console.log('Seamless auto-sliding testimonial initialized with', totalCards, 'original cards + clones');
//   console.log('Initial position set, testimonials should be visible now');
// }

// // Make functions globally available
// window.initTestimonialSlider = initTestimonialSlider;


