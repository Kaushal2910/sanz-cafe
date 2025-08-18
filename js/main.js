/* =====================
   Premium Interactions
   ===================== */

/* Sticky Navbar + Glass */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 60;
  navbar.classList.toggle('scrolled', scrolled);
});

/* Hamburger */
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('show');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });
}

/* Scroll-To-Top */
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
  if (!topBtn) return;
  topBtn.classList.toggle('show', window.scrollY > 300);
});
if (topBtn) {
  topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* Parallax Hero (transform-based for performance) */
const heroMedia = document.querySelector('.hero-media');
let lastScrollY = 0;
function onScrollParallax() {
  const y = window.scrollY;
  // Dampened parallax speed
  const translate = Math.min(y * 0.15, 120);
  if (heroMedia) heroMedia.style.transform = `translateY(${translate}px) scale(1.1)`;
  lastScrollY = y;
}
window.addEventListener('scroll', onScrollParallax, { passive: true });

/* Intersection Reveal */
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });
revealEls.forEach(el => io.observe(el));

/* 3D Tilt - subtle */
const tiltCards = document.querySelectorAll('.tilt');
tiltCards.forEach(card => {
  const rect = () => card.getBoundingClientRect();
  card.addEventListener('mousemove', (e) => {
    const r = rect();
    const cx = e.clientX - r.left;
    const cy = e.clientY - r.top;
    const rx = ((cy / r.height) - 0.5) * -6;
    const ry = ((cx / r.width) - 0.5) * 6;
    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0)';
  });
});

/* Lightbox */
const galleryImages = Array.from(document.querySelectorAll('.gallery-grid .lb'));
const lightbox = document.getElementById('lightbox');
const lbImg = document.querySelector('.lb-img');
const lbPrev = document.querySelector('.lb-prev');
const lbNext = document.querySelector('.lb-next');
const lbClose = document.querySelector('.lb-close');
const lbCounter = document.querySelector('.lb-counter');

let currentIndex = 0;

function openLightbox(index) {
  if (!lightbox || !lbImg) return;
  currentIndex = index;
  lbImg.src = galleryImages[currentIndex].src;
  lbImg.alt = galleryImages[currentIndex].alt || 'Image';
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  updateCounter();
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
}

function showNext(dir = 1) {
  currentIndex = (currentIndex + dir + galleryImages.length) % galleryImages.length;
  lbImg.src = galleryImages[currentIndex].src;
  lbImg.alt = galleryImages[currentIndex].alt || 'Image';
  updateCounter();
}

function updateCounter(){
  if (lbCounter) lbCounter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
}

galleryImages.forEach((img, i) => {
  img.addEventListener('click', () => openLightbox(i));
});

lbClose && lbClose.addEventListener('click', closeLightbox);
lbPrev && lbPrev.addEventListener('click', () => showNext(-1));
lbNext && lbNext.addEventListener('click', () => showNext(1));

document.addEventListener('keydown', (e) => {
  if (!lightbox || !lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') showNext(1);
  if (e.key === 'ArrowLeft') showNext(-1);
});

lightbox && lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

/* Testimonials Carousel */
const slides = Array.from(document.querySelectorAll('.testimonial-slider .slide'));
const dots = Array.from(document.querySelectorAll('.testimonial-slider .dot'));
let slideIndex = 0;
let slideTimer;

function goToSlide(i){
  slides.forEach((s, idx) => s.classList.toggle('current', idx === i));
  dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
  slideIndex = i;
}

function nextSlide(){
  goToSlide((slideIndex + 1) % slides.length);
}

function startCarousel(){
  stopCarousel();
  slideTimer = setInterval(nextSlide, 4200);
}

function stopCarousel(){
  if (slideTimer) clearInterval(slideTimer);
}

dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => { goToSlide(idx); startCarousel(); });
});

if (slides.length) {
  startCarousel();
  // Pause on hover
  const slider = document.querySelector('.testimonial-slider');
  slider.addEventListener('mouseenter', stopCarousel);
  slider.addEventListener('mouseleave', startCarousel);
}

/* Respect reduced motion */
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
if (mediaQuery.matches) {
  // Disable parallax & tilt if reduced motion preferred
  window.removeEventListener('scroll', onScrollParallax);
  tiltCards.forEach(card => {
    card.onmousemove = null;
    card.onmouseleave = null;
  });
}
