// Features quote modal functionality
function initQuoteModal() {
  console.log('Initializing quote modal...'); // Debug log
  
  const quoteBtn = document.getElementById('quoteBtn');
  const modal = document.getElementById('quoteModal');
  const modalClose = document.getElementById('quoteModalClose');
  const cancelBtn = document.getElementById('quoteCancelBtn');
  const quoteForm = document.getElementById('quoteForm');

  console.log('Elements found:', { quoteBtn, modal, modalClose, cancelBtn, quoteForm }); // Debug log

  // Ensure modal is initially hidden
  if (modal) {
    modal.classList.remove('active');
    // Remove any inline styles that might interfere
    modal.style.cssText = '';
  }

  // Open modal
  if (quoteBtn && modal) {
    // Remove any existing event listeners
    quoteBtn.replaceWith(quoteBtn.cloneNode(true));
    const newQuoteBtn = document.getElementById('quoteBtn');
    
    newQuoteBtn.addEventListener('click', (e) => {
      console.log('Quote button clicked!'); // Debug log
      e.preventDefault();
      e.stopPropagation();
      
      // Force show modal
      modal.style.display = 'flex';
      modal.style.opacity = '1';
      modal.style.visibility = 'visible';
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      console.log('Modal should be visible now'); // Debug log
    });
  } else {
    console.error('Quote button or modal not found!', { quoteBtn, modal });
  }

  // Close modal function
  function closeModal() {
    console.log('Closing modal...'); // Debug log
    if (modal) {
      modal.classList.remove('active');
      modal.style.display = 'none';
      modal.style.opacity = '0';
      modal.style.visibility = 'hidden';
      document.body.style.overflow = ''; // Restore background scroll
    }
    // Reset form
    if (quoteForm) {
      quoteForm.reset();
      // Reset phone field to +91
      const phoneField = document.getElementById('quoteUserPhone');
      if (phoneField) {
        phoneField.value = '+91';
      }
    }
  }

  // Close modal events
  if (modalClose) {
    modalClose.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeModal();
    });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeModal();
    });
  }

  // Close modal when clicking overlay
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Handle phone field to maintain +91 prefix
  const phoneField = document.getElementById('quoteUserPhone');
  if (phoneField) {
    phoneField.addEventListener('input', (e) => {
      let value = e.target.value;
      // Ensure +91 prefix is always present
      if (!value.startsWith('+91')) {
        e.target.value = '+91';
      }
    });

    phoneField.addEventListener('keydown', (e) => {
      // Prevent deleting the +91 prefix
      if (e.target.selectionStart < 3 && (e.key === 'Backspace' || e.key === 'Delete')) {
        e.preventDefault();
      }
    });
  }

  // Handle form submission
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(quoteForm);
      const quoteData = {
        name: formData.get('userName'),
        email: formData.get('userEmail'),
        company: formData.get('userCompany'),
        phone: formData.get('userPhone')
      };

      // Validate phone number (should have digits after +91)
      if (!quoteData.phone || quoteData.phone.length <= 3) {
        alert('Please enter a valid phone number.');
        return;
      }

      // Here you would normally send data to server
      console.log('Quote request:', quoteData);

      // Show success message
      alert(`Thank you ${quoteData.name}! Your quote request has been submitted. Our team will contact you within 24 hours.`);
      
      // Close modal
      closeModal();

      // You can add actual form submission logic here
      // For example: submit to your CRM, email service, etc.
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Wait longer for the component to be loaded via main.js
  setTimeout(initQuoteModal, 500);
});

// Also initialize when called directly
window.addEventListener('load', () => {
  setTimeout(initQuoteModal, 200);
});

// Make function globally available
window.initQuoteModal = initQuoteModal;
