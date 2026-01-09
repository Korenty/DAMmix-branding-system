/* =========================
   DAMmix Main JS
   ========================= */

document.addEventListener("DOMContentLoaded", () => {

  // Sidebar toggle
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('aside');
  hamburger.addEventListener('click', ()=> sidebar.classList.toggle('active'));

  // Scroll reveal
  const reveals = document.querySelectorAll(".reveal");
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    reveals.forEach(el=>{
      const top = el.getBoundingClientRect().top;
      if(top < windowHeight - 100){ el.classList.add("active"); }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // Expandable Read More
  document.querySelectorAll('.read-more, .expand-btn').forEach(btn=>{
    btn.addEventListener('click', e=>{
      e.preventDefault();
      const targetId = btn.getAttribute('data-target');
      if(targetId){
        const target = document.getElementById(targetId);
        target.classList.toggle('expanded');
        btn.textContent = target.classList.contains('expanded') ? 'Show Less' : 'Read More';
      } else {
        // redirect to page
        window.location.href = btn.getAttribute('href');
      }
    });
  });

  // Animate stress-test meters
  window.addEventListener('load', ()=>{
    document.querySelectorAll('.meter span').forEach(span=>{
      const width = span.getAttribute('data-value');
      span.style.width = width || '100%';
    });
  });

});
