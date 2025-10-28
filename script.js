document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('footer-container').innerHTML = `
        <footer class="site-footer">
            <p>&copy; 2025 Freeducation. All rights reserved.</p>
            <div>
                <a href="contact.html">Contact Us</a>
            </div>
        </footer>
    `;
});

function toggleMenu() {
    var nav = document.getElementById("myTopnav");
    nav.classList.toggle("responsive");
}


document.addEventListener("scroll", () => {
  const section = document.querySelector("#wide-range-section");
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
