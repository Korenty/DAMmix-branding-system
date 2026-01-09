// ===========================
// DAMmix Main JS
// ===========================

document.addEventListener("DOMContentLoaded", () => {

  // Sidebar Toggle
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const main = document.querySelector("main");

  function openSidebar() {
    sidebar.classList.add("active");
    overlay.classList.add("active");
  }

  function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  }

  hamburger.addEventListener("click", () => {
    if (sidebar.classList.contains("active")) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  overlay.addEventListener("click", closeSidebar);

  // Close sidebar when a link is clicked (mobile)
  const sidebarLinks = sidebar.querySelectorAll("nav a");
  sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
      closeSidebar();
    });
  });

  // ===========================
  // Scroll Reveal for .reveal sections
  // ===========================
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    reveals.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("visible");
      } else {
        el.classList.remove("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Initial call

  // ===========================
  // Optional: Smooth scroll for anchor links
  // ===========================
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetID = this.getAttribute("href").slice(1);
      const targetEl = document.getElementById(targetID);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

});
