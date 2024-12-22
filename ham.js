const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
  // Toggle active classes for animation
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
});
