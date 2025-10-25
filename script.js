
// // LOAD FOOTER ONTO PAGE
// document.addEventListener("DOMContentLoaded", () => {
//     const footerContainer = document.getElementById("footer-container");
  
//     if (footerContainer) {
//       fetch("footer.html")
//         .then(response => response.text())
//         .then(data => {
//           footerContainer.innerHTML = data;
//         })
//         .catch(error => console.error("Error loading footer:", error));
//     }
// });
  

// In script.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('footer-container').innerHTML = `
        <footer class="site-footer">
            <p>&copy; 2025 Freeducation. All rights reserved.</p>
            <a href="privacy.html">Privacy Policy</a> | 
            <a href="contact.html">Contact</a>
        </footer>
    `;
});