// Simple and reliable initialization for Vercel
(function() {
  'use strict';
  
  console.log('Simple init manager loaded');
  
  // Simple initialization function
  window.initAll = function() {
    console.log('Starting simple initialization...');
    
    // Initialize FAQ
    setTimeout(() => {
      const faqItems = document.querySelectorAll('.faq-item');
      console.log('FAQ items found:', faqItems.length);
      
      if (faqItems.length > 0) {
        console.log('Initializing FAQ directly...');
        
        faqItems.forEach((item, index) => {
          const question = item.querySelector('.faq-question');
          if (question) {
            // Remove existing listeners
            const newQuestion = question.cloneNode(true);
            question.parentNode.replaceChild(newQuestion, question);
            
            // Add new listener
            newQuestion.addEventListener('click', function(e) {
              e.preventDefault();
              console.log('FAQ clicked:', index);
              
              // Close all others
              faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                  otherItem.classList.remove('open');
                }
              });
              
              // Toggle current
              item.classList.toggle('open');
            });
          }
        });
      }
    }, 500);
    
    // Initialize Quote Modal
    setTimeout(() => {
      const quoteBtn = document.getElementById('quoteBtn');
      const quoteModal = document.getElementById('quoteModal');
      console.log('Quote elements:', { btn: !!quoteBtn, modal: !!quoteModal });
      
      if (quoteBtn && quoteModal) {
        console.log('Initializing Quote Modal directly...');
        
        // Remove existing listeners
        const newBtn = quoteBtn.cloneNode(true);
        quoteBtn.parentNode.replaceChild(newBtn, quoteBtn);
        
        // Add click listener
        newBtn.addEventListener('click', function(e) {
          e.preventDefault();
          console.log('Quote button clicked!');
          
          quoteModal.style.display = 'flex';
          quoteModal.style.opacity = '1';
          quoteModal.style.visibility = 'visible';
          quoteModal.classList.add('active');
          document.body.style.overflow = 'hidden';
        });
        
        // Close modal listeners
        const closeBtn = quoteModal.querySelector('.modal-close');
        const cancelBtn = quoteModal.querySelector('#quoteCancelBtn');
        
        if (closeBtn) {
          closeBtn.addEventListener('click', function() {
            quoteModal.style.display = 'none';
            quoteModal.classList.remove('active');
            document.body.style.overflow = '';
          });
        }
        
        if (cancelBtn) {
          cancelBtn.addEventListener('click', function() {
            quoteModal.style.display = 'none';
            quoteModal.classList.remove('active');
            document.body.style.overflow = '';
          });
        }
        
        // Click outside to close
        quoteModal.addEventListener('click', function(e) {
          if (e.target === quoteModal) {
            quoteModal.style.display = 'none';
            quoteModal.classList.remove('active');
            document.body.style.overflow = '';
          }
        });
      }
    }, 1000);
    
    // Initialize Download Modal
    setTimeout(() => {
      const downloadBtn = document.getElementById('downloadBtn');
      const downloadModal = document.getElementById('downloadModal');
      console.log('Download elements:', { btn: !!downloadBtn, modal: !!downloadModal });
      
      if (downloadBtn && downloadModal) {
        console.log('Initializing Download Modal directly...');
        
        // Remove existing listeners
        const newBtn = downloadBtn.cloneNode(true);
        downloadBtn.parentNode.replaceChild(newBtn, downloadBtn);
        
        // Add click listener
        newBtn.addEventListener('click', function(e) {
          e.preventDefault();
          console.log('Download button clicked!');
          
          downloadModal.style.display = 'flex';
          downloadModal.style.opacity = '1';
          downloadModal.style.visibility = 'visible';
          downloadModal.classList.add('active');
          document.body.style.overflow = 'hidden';
        });
        
        // Close modal listeners
        const closeBtn = downloadModal.querySelector('#modalClose');
        const cancelBtn = downloadModal.querySelector('#cancelBtn');
        
        if (closeBtn) {
          closeBtn.addEventListener('click', function() {
            downloadModal.style.display = 'none';
            downloadModal.classList.remove('active');
            document.body.style.overflow = '';
          });
        }
        
        if (cancelBtn) {
          cancelBtn.addEventListener('click', function() {
            downloadModal.style.display = 'none';
            downloadModal.classList.remove('active');
            document.body.style.overflow = '';
          });
        }
        
        // Click outside to close
        downloadModal.addEventListener('click', function(e) {
          if (e.target === downloadModal) {
            downloadModal.style.display = 'none';
            downloadModal.classList.remove('active');
            document.body.style.overflow = '';
          }
        });
      }
    }, 1500);
  };
  
  // Run initialization multiple times
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(window.initAll, 2000);
  });
  
  window.addEventListener('load', function() {
    setTimeout(window.initAll, 3000);
  });
  
  // Final fallback
  setTimeout(function() {
    console.log('Final fallback initialization...');
    window.initAll();
  }, 5000);
  
})();
