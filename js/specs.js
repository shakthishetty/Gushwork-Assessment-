// Specs modal functionality
function initSpecsModal() {
  console.log('Initializing specs modal...'); // Debug log
  
  const downloadBtn = document.getElementById('downloadBtn');
  const modal = document.getElementById('downloadModal');
  const modalClose = document.getElementById('modalClose');
  const cancelBtn = document.getElementById('cancelBtn');
  const downloadForm = document.getElementById('downloadForm');

  console.log('Download elements found:', { downloadBtn, modal, modalClose, cancelBtn, downloadForm }); // Debug log

  // Ensure modal is initially hidden
  if (modal) {
    modal.classList.remove('active');
    modal.style.cssText = '';
  }

  // Open modal
  if (downloadBtn && modal) {
    // Remove any existing event listeners
    downloadBtn.replaceWith(downloadBtn.cloneNode(true));
    const newDownloadBtn = document.getElementById('downloadBtn');
    
    newDownloadBtn.addEventListener('click', (e) => {
      console.log('Download button clicked!'); // Debug log
      e.preventDefault();
      e.stopPropagation();
      
      // Force show modal
      modal.style.display = 'flex';
      modal.style.opacity = '1';
      modal.style.visibility = 'visible';
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      console.log('Download modal should be visible now'); // Debug log
    });
  } else {
    console.error('Download button or modal not found!', { downloadBtn, modal });
  }

  // Close modal function
  function closeModal() {
    console.log('Closing download modal...'); // Debug log
    if (modal) {
      modal.classList.remove('active');
      modal.style.display = 'none';
      modal.style.opacity = '0';
      modal.style.visibility = 'hidden';
      document.body.style.overflow = ''; // Restore background scroll
    }
    // Reset form
    if (downloadForm) {
      downloadForm.reset();
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

  // Handle form submission
  if (downloadForm) {
    downloadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(downloadForm);
      const userName = formData.get('userName');
      const userEmail = formData.get('userEmail');
      const userCompany = formData.get('userCompany');
      const userPhone = formData.get('userPhone');

      // Here you would normally send data to server
      console.log('Download request:', {
        name: userName,
        email: userEmail,
        company: userCompany,
        phone: userPhone
      });

      // Simulate download
      alert(`Thank you ${userName}! Your technical datasheet download will begin shortly.`);
      
      // Close modal
      closeModal();

      // You can add actual file download logic here
      // For example: window.open('path/to/technical-datasheet.pdf');
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Wait a bit for the component to be loaded via main.js
  setTimeout(initSpecsModal, 100);
});

// Make function globally available
window.initSpecsModal = initSpecsModal;
