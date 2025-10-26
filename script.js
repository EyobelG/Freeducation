
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
            <div>
                <a href="privacy.html">Privacy Policy</a> | 
                <a href="contact.html">Contact</a>
            </div>
        </footer>
    `;
});

function toggleMenu() {
    var nav = document.getElementById("myTopnav");
    nav.classList.toggle("responsive");
}


document.addEventListener("scroll", () => {
  const section = document.querySelector(".wide-range-section");
  const leftSticker = document.querySelector(".edge-sticker.left");
  const rightSticker = document.querySelector(".edge-sticker.right");

  const rect = section.getBoundingClientRect();
  const inView = rect.top < window.innerHeight * 0.75 && rect.bottom > window.innerHeight * 0.25;

  if (inView) {
    leftSticker.classList.add("visible");
    rightSticker.classList.add("visible");
  } else {
    leftSticker.classList.remove("visible");
    rightSticker.classList.remove("visible");
  }
});
