// Testimonial display - static testimonials without sliding
function initTestimonialSlider() {
  const slider = document.getElementById('testimonial-slider');
  if (slider) {
    // Remove any transform styles to keep testimonials in their natural position
    slider.style.transform = 'none';
    slider.style.transition = 'none';
    
    console.log('Testimonial static display initialized');
  }
}

// Make functions globally available
window.initTestimonialSlider = initTestimonialSlider;
