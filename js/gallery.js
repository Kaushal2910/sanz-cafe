// Carousel simple scroll
const track = document.querySelector('.carousel-track');
const left  = document.querySelector('.arrow.left');
const right = document.querySelector('.arrow.right');
const scrollAmount = 300;

left.addEventListener('click', () => track.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
right.addEventListener('click', () => track.scrollBy({ left: scrollAmount, behavior: 'smooth' }));

// Light-box click (basic)
track.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    const full = document.createElement('div');
    full.style.cssText = `
      position:fixed; inset:0; background:rgba(0,0,0,.85);
      display:flex; align-items:center; justify-content:center; z-index:999;
    `;
    const img = document.createElement('img');
    img.src = e.target.src;
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    img.style.borderRadius = '8px';
    full.appendChild(img);
    document.body.appendChild(full);
    full.onclick = () => document.body.removeChild(full);
  }
});