
// LOAD FOOTER ONTO PAGE
document.addEventListener("DOMContentLoaded", () => {
    const footerContainer = document.getElementById("footer-container");
  
    if (footerContainer) {
      fetch("footer.html")
        .then(response => response.text())
        .then(data => {
          footerContainer.innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
    }
});
  