document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const navLinks = sidebar.querySelectorAll('a');

  // Sidebar toggle
  const openSidebar = () => { sidebar.classList.add('active'); overlay.classList.add('active'); }
  const closeSidebar = () => { sidebar.classList.remove('active'); overlay.classList.remove('active'); }
  hamburger.addEventListener('click', openSidebar);
  overlay.addEventListener('click', closeSidebar);

  // Close sidebar when link clicked (mobile)
  navLinks.forEach(link => link.addEventListener('click', closeSidebar));

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
