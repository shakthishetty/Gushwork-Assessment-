// Global initialization manager for Vercel deployment
(function() {
  'use strict';
  
  console.log('Initialization manager loaded');
  
  // Track which components have been initialized
  const initialized = {
    faq: false,
    quoteModal: false,
    specsModal: false,
    testimonial: false
  };
  
  // Queue of initialization functions to run
  const initQueue = [];
  
  // Global initialization function
  window.initializeComponents = function() {
    console.log('Starting component initialization...');
    
    // Run all queued initializations
    initQueue.forEach(fn => {
      try {
        fn();
      } catch (error) {
        console.error('Initialization error:', error);
      }
    });
    
    // Initialize specific components
    initializeFAQSafe();
    initializeModalsSafe();
    initializeTestimonialSafe();
  };
  
  // Safe FAQ initialization
  function initializeFAQSafe() {
    if (initialized.faq) return;
    
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0 && window.initializeFAQ) {
      console.log('Initializing FAQ safely...');
      try {
        window.initializeFAQ();
        initialized.faq = true;
      } catch (error) {
        console.error('FAQ initialization error:', error);
      }
    } else {
      console.log('FAQ not ready, retrying...');
      setTimeout(initializeFAQSafe, 500);
    }
  }
  
  // Safe modal initialization
  function initializeModalsSafe() {
    // Quote Modal
    if (!initialized.quoteModal) {
      const quoteBtn = document.getElementById('quoteBtn');
      if (quoteBtn && window.initQuoteModal) {
        console.log('Initializing Quote Modal safely...');
        try {
          window.initQuoteModal();
          initialized.quoteModal = true;
        } catch (error) {
          console.error('Quote Modal initialization error:', error);
        }
      } else {
        setTimeout(() => initializeModalsSafe(), 500);
      }
    }
    
    // Specs Modal
    if (!initialized.specsModal) {
      const downloadBtn = document.getElementById('downloadBtn');
      if (downloadBtn && window.initSpecsModal) {
        console.log('Initializing Specs Modal safely...');
        try {
          window.initSpecsModal();
          initialized.specsModal = true;
        } catch (error) {
          console.error('Specs Modal initialization error:', error);
        }
      } else {
        setTimeout(() => initializeModalsSafe(), 500);
      }
    }
  }
  
  // Safe testimonial initialization
  function initializeTestimonialSafe() {
    if (initialized.testimonial) return;
    
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider && window.initTestimonialSlider) {
      console.log('Initializing Testimonial safely...');
      try {
        window.initTestimonialSlider();
        initialized.testimonial = true;
      } catch (error) {
        console.error('Testimonial initialization error:', error);
      }
    } else {
      setTimeout(initializeTestimonialSafe, 500);
    }
  }
  
  // Add function to queue
  window.queueInit = function(fn) {
    initQueue.push(fn);
  };
  
  // Auto-initialize when everything is ready
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(window.initializeComponents, 1000);
  });
  
  window.addEventListener('load', function() {
    setTimeout(window.initializeComponents, 2000);
  });
  
  // Final fallback initialization
  setTimeout(function() {
    console.log('Final fallback initialization...');
    window.initializeComponents();
  }, 5000);
  
})();
