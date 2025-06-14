
  // Select elements
  const navOpenBtn = document.querySelector("[data-nav-open-btn]");
  const navCloseBtn = document.querySelector("[data-nav-close-btn]");
  const navbar = document.querySelector("[data-navbar]");
  const overlay = document.querySelector("[data-overlay]");
  const body = document.body;

  // Open navigation
  navOpenBtn.addEventListener("click", () => {
    navbar.classList.add("active");
    overlay.classList.add("active");
    body.classList.add("nav-active");
  });

  // Close navigation
  navCloseBtn.addEventListener("click", () => {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("nav-active");
  });

  // Close nav when clicking on overlay
  overlay.addEventListener("click", () => {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("nav-active");
  });

