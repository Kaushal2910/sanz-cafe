/* ==========  STICKY NAVBAR  ========== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.backgroundColor = window.scrollY > 60 ? '#000' : 'transparent';
});

/* ==========  HAMBURGER  ========== */
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-links');
hamburger.addEventListener('click', () => nav.classList.toggle('show'));

/* ==========  SCROLL-TO-TOP BUTTON  ========== */
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
  topBtn.classList.toggle('show', window.scrollY > 300);
});
topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ==========  SCROLL-REVEAL (simple fade-up)  ========== */
const reveal = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => entry.target.classList.toggle('fade-up', entry.isIntersecting));
}, { threshold: 0.2 });
reveal.forEach(el => observer.observe(el));