document.addEventListener("DOMContentLoaded", function () {
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.querySelector(".sidebar");
  const body = document.body;

  // Create overlay element
  const overlay = document.createElement("div");
  overlay.classList.add("sidebar-overlay");
  document.body.appendChild(overlay);

  // Function to check window width and set initial state
  function checkWidth() {
    if (window.innerWidth < 768) {
      body.classList.remove("sidebar-visible");
      body.classList.add("sidebar-hidden");
    } else {
      body.classList.add("sidebar-visible");
      body.classList.remove("sidebar-hidden");
    }
  }

  // Initial check
  checkWidth();

  // Toggle sidebar visibility
  sidebarToggle.addEventListener("click", function () {
    if (body.classList.contains("sidebar-visible")) {
      body.classList.remove("sidebar-visible");
      body.classList.add("sidebar-hidden");
    } else {
      body.classList.add("sidebar-visible");
      body.classList.remove("sidebar-hidden");
    }
  });

  // Close sidebar when clicking on overlay (mobile only)
  overlay.addEventListener("click", function () {
    if (window.innerWidth < 768) {
      body.classList.remove("sidebar-visible");
    }
  });

  // Update sidebar state on window resize
  window.addEventListener("resize", function () {
    checkWidth();
  });

  // Close sidebar when clicking on a link (mobile only)
  const sidebarLinks = document.querySelectorAll(".sidebar .nav-link");
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth < 768) {
        body.classList.remove("sidebar-visible");
      }
    });
  });
});
