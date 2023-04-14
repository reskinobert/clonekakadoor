/* Toggle navbar links when toggle button is clicked */
const toggleButton = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelector(".navbar-links");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("show");
});
