// FAQ Section Logic
document.addEventListener("DOMContentLoaded", () => {
  // Wait a bit for the FAQ section to be loaded via fetch
  setTimeout(() => {
    initializeFAQ();
  }, 500); // Increased delay
});

// Also try to initialize when all content is loaded
window.addEventListener("load", () => {
  setTimeout(() => {
    initializeFAQ();
  }, 100);
});

function initializeFAQ() {
  console.log("Trying to initialize FAQ...");
  const items = document.querySelectorAll('.faq-item');
  console.log("Found FAQ items:", items.length);
  
  if (items.length === 0) {
    // If FAQ items are not loaded yet, try again after a short delay
    console.log("No FAQ items found, retrying...");
    setTimeout(() => {
      initializeFAQ();
    }, 200);
    return;
  }

  console.log("Setting up FAQ event listeners...");
  items.forEach((item, index) => {
    const question = item.querySelector('.faq-question');
    const icon = item.querySelector('.icon');
    const answer = item.querySelector('.faq-answer');
    
    console.log(`FAQ item ${index}:`, { 
      question: !!question, 
      icon: !!icon, 
      answer: !!answer,
      hasContent: answer ? answer.textContent.trim().length > 0 : false 
    });
    
    // Remove any existing event listeners by cloning the element
    if (question) {
      const newQuestion = question.cloneNode(true);
      question.parentNode.replaceChild(newQuestion, question);
      
      // Add click event to the button
      newQuestion.addEventListener('click', (e) => {
        console.log("FAQ question clicked:", index);
        e.preventDefault();
        e.stopPropagation();
        toggleFAQ(item, items);
      });
    }
  });
  
  console.log("FAQ initialization complete!");
}

// Make function globally accessible
window.initializeFAQ = initializeFAQ;

function toggleFAQ(currentItem, allItems) {
  console.log("toggleFAQ called for item:", currentItem);
  
  // Close all other items first
  allItems.forEach((item) => {
    if (item !== currentItem && item.classList.contains('open')) {
      console.log("Closing other FAQ item");
      item.classList.remove('open');
    }
  });
  
  // Toggle current item
  const wasOpen = currentItem.classList.contains('open');
  if (wasOpen) {
    console.log("Closing current FAQ item");
    currentItem.classList.remove('open');
  } else {
    console.log("Opening current FAQ item");
    currentItem.classList.add('open');
  }
  
  // Force a reflow to ensure the animation works
  currentItem.offsetHeight;
  
  console.log("FAQ item state:", wasOpen ? "closed" : "opened");
}
