const hamburgerButton = document.getElementById("hamburger-button");
const mobileMenu = document.getElementById("mobile-menu");

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("cross");
  mobileMenu.classList.toggle("active");
});