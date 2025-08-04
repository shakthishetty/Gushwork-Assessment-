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
      
      // After specs are loaded, load features
      return fetch('./components/features.html');
    })
    .then(res => res.text())
    .then(html => {
      // Append features section to main content
      document.querySelector("main").innerHTML += html;
      
      // After features are loaded, load carousel section
      return fetch('./components/carousel-section.html');
    })
    .then(res => res.text())
    .then(html => {
      // Append carousel section to main content
      document.querySelector("main").innerHTML += html;
      
      // After carousel is loaded, load FAQ section
      return fetch('./components/faqSection.html');
    })
    .then(res => res.text())
    .then(html => {
      // Append FAQ section to main content
      document.querySelector("main").innerHTML += html;
    })
    .catch(err => {
      console.error('Error loading components:', err);
    });
});
