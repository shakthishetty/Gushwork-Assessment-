// Footer loading functionality
document.addEventListener("DOMContentLoaded", () => {
  // Load footer component
  fetch("./components/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
      console.log("Footer loaded successfully");
    })
    .catch(err => {
      console.error("Error loading footer:", err);
    });
});
