/* =========================
   DAMmix Main Interactions
   ========================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     Scroll Reveal
     ========================= */
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 120;

      if (elementTop < windowHeight - elementVisible) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  /* =========================
     Hover Micro-Interactions
     ========================= */
  document.querySelectorAll(".card, .product-card, .btn").forEach(el => {
    el.addEventListener("mousemove", e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const midX = rect.width / 2;
      const midY = rect.height / 2;

      const tiltX = ((y - midY) / midY) * 3;
      const tiltY = ((x - midX) / midX) * -3;

      el.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-6px)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  });

  /* =========================
     Animated Meter Fill
     ========================= */
  document.querySelectorAll(".meter span").forEach(meter => {
    const width = meter.style.width;
    meter.style.width = "0";
    setTimeout(() => {
      meter.style.width = width;
    }, 400);
  });

});
