document.addEventListener("DOMContentLoaded", () => {
  // Load product details first
  fetch("./components/product-details.html")
    .then(res => res.text())
    .then(data => {
      document.querySelector("main").innerHTML += data;
      
      // After product details are loaded, load specs
      return fetch('./components/specs.html');
    })
    .then(res => res.text())
    .then(html => {
      // Append specs section to main content
      document.querySelector("main").innerHTML += html;
      console.log("Specs section loaded, triggering initialization...");
      
      // Trigger specs initialization after the content is added
      console.log("Specs section loaded");
      
      // After specs are loaded, load features
      return fetch('./components/features.html');
    })
    .then(res => res.text())
    .then(html => {
      // Append features section to main content
      document.querySelector("main").innerHTML += html;
      console.log("Features section loaded");
      
      // After features are loaded, load FAQ section
      return fetch('./components/faqSection.html');
    })
    .then(res => res.text())
    .then(html => {
      // Append FAQ section to main content
      document.querySelector("main").innerHTML += html;
      console.log("FAQ section loaded");
      
      // After FAQ is loaded, load carousel section
      return fetch('./components/carousel-section.html');
    })
    .then(res => res.text())
    .then(html => {
      // Append carousel section to main content
      document.querySelector("main").innerHTML += html;
      
      // After carousel is loaded, load HDPE process section
      return fetch('./components/hdpe-process.html');
    })
    .then(res => res.text())
    .then(html => {
      // Append HDPE process section to main content
      document.querySelector("main").innerHTML += html;
      
      // After HDPE process is loaded, load testimonial section (last)
      return fetch('./components/testimonial.html');
    })
    .then(res => res.text())
    .then(html => {
      // Append testimonial section to main content
      document.querySelector("main").innerHTML += html;
      
      // Initialize testimonial slider after content is loaded
      if (window.initTestimonialSlider) {
        setTimeout(() => {
          window.initTestimonialSlider();
        }, 50);
      }
      
      // After testimonial is loaded, load portfolio section (last)
      return fetch('./components/portfolio-section.html');
    })
    .then(res => res.text())
    .then(html => {
      // Append portfolio section to main content
      document.querySelector("main").innerHTML += html;
      
      // After portfolio is loaded, load download section (final section)
      return fetch('./components/download.html');
    })
    .then(res => res.text())
    .then(html => {
      // Append download section to main content
      document.querySelector("main").innerHTML += html;
      
      // After download is loaded, load quote section (final section)
      return fetch('./components/quote.html');
    })
    .then(res => res.text())
    .then(html => {
      // Append quote section to main content (final section)
      document.querySelector("main").innerHTML += html;
      console.log("All sections loaded successfully!");
      
      // Final initialization call for Vercel
      if (window.initAll) {
        setTimeout(() => {
          console.log('Final simple initialization call...');
          window.initAll();
        }, 2000);
      }
    })
    .catch(err => {
      console.error('Error loading components:', err);
    });
});


