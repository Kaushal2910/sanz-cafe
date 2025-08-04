/* ========= SCROLL-REVEAL for About page ========= */
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-stagger');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => e.target.classList.toggle('show', e.isIntersecting));
}, { threshold: 0.2 });
revealElements.forEach(el => observer.observe(el));