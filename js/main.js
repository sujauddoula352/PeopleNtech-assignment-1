 const menuToggle = document.getElementById("menuToggle");
  const menuClose = document.getElementById("menuClose");
  const mobileMenu = document.getElementById("mobileMenu");

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.remove("-translate-x-full");
  });

  menuClose.addEventListener("click", () => {
    mobileMenu.classList.add("-translate-x-full");
  });