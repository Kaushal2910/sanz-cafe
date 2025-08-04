/* ===== SCROLL-REVEAL ===== */
const items = document.querySelectorAll('.gallery-item');
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, idx) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('show'), idx * 100);
    }
  });
}, { threshold: 0.2 });
items.forEach(item => observer.observe(item));

/* ===== FILTER ===== */
const filterBtns = document.querySelectorAll('.filter-bar button');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    items.forEach(item => {
      const visible = filter === 'all' || item.dataset.category === filter;
      item.style.display = visible ? 'block' : 'none';
      item.classList.toggle('show', visible);
    });
  });
});

/* ===== LIGHTBOX ===== */
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `<img /><span class="close">&times;</span>`;
document.body.appendChild(lightbox);

items.forEach(item => {
  item.addEventListener('click', () => {
    lightbox.querySelector('img').src = item.querySelector('img').src;
    lightbox.style.display = 'flex';
  });
});

lightbox.addEventListener('click', (e) => {
  if (e.target.classList.contains('close') || e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

/* ESC to close */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') lightbox.style.display = 'none';
});