document.addEventListener("DOMContentLoaded", function () {
  // Initialize feather icons
  feather.replace();

  // Elements
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("mainContent");
  const navbarBrand = document.querySelector(".navbar-brand");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  // Set initial state from localStorage
  const sidebarState = localStorage.getItem("sidebarState");
  if (sidebarState === "expanded" && window.innerWidth >= 768) {
    sidebar.classList.add("sidebar-expanded");
    mainContent.classList.add("main-content-expanded");
  } else {
    sidebar.classList.add("sidebar-collapsed");
    navbarBrand.classList.add("shifted");
  }

  // Toggle sidebar on click
  sidebarToggle.addEventListener("click", function () {
    sidebar.classList.toggle("sidebar-expanded");
    sidebar.classList.toggle("sidebar-collapsed");
    mainContent.classList.toggle("main-content-expanded");
    navbarBrand.classList.toggle("shifted");

    // Save state to localStorage
    localStorage.setItem(
      "sidebarState",
      sidebar.classList.contains("sidebar-expanded") ? "expanded" : "collapsed"
    );
  });

  // Add click event to each mobile link
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileNavLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Handle responsive behavior
  function checkWidth() {
    if (window.innerWidth < 768) {
      sidebar.classList.remove("sidebar-expanded");
      sidebar.classList.add("sidebar-collapsed");
      mainContent.classList.remove("main-content-expanded");
      navbarBrand.classList.add("shifted");
    }
  }

  // Initial check & listen for window resize
  checkWidth();
  window.addEventListener("resize", checkWidth);
  window.addEventListener("orientationchange", checkWidth);
});
