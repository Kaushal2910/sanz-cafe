const menu = [
  { id: 'pizza', name: 'Wood-Fired Truffle Pizza', price: 399, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=600&q=60', upsell: 'coldbrew' },
  { id: 'sandwich', name: 'BBQ Chicken Sandwich', price: 249, img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=600&q=60', upsell: 'coldbrew' },
  { id: 'coldbrew', name: 'Signature Cold Brew', price: 179, img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=60', upsell: 'cheesecake' },
  { id: 'cheesecake', name: 'Berry Cheesecake Jar', price: 199, img: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?auto=format&fit=crop&w=600&q=60', upsell: 'coffee' },
  { id: 'pasta', name: 'Pink-Sauce Penne', price: 329, img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=600&q=60', upsell: 'garlicbread' },
  { id: 'garlicbread', name: 'Cheese Garlic Bread', price: 149, img: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=600&q=60', upsell: 'pasta' }
];

let cart = [];

const cartDrawer = document.getElementById('cartDrawer');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartBadge = document.getElementById('cartBadge');
const upsellRow = document.getElementById('upsellRow');
const closeCartBtn = document.getElementById('closeCart');

function renderCart() {
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}">
        <div class="cart-item-info">
          ${item.name}<br><small>₹${item.price} × ${item.qty}</small>
        </div>
        <div class="cart-controls">
          <button onclick="changeQty('${item.id}', -1)">-</button>
          <span>${item.qty}</span>
          <button onclick="changeQty('${item.id}', 1)">+</button>
        </div>
      </div>`;
  });

  cartTotal.textContent = `₹${total}`;
  cartBadge.textContent = cart.reduce((sum, i) => sum + i.qty, 0);
  showUpsell();
}

function addToCart(id) {
  const item = menu.find(m => m.id === id);
  const existing = cart.find(c => c.id === id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  renderCart();
  openCart();
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== id);

  renderCart();
}

function showUpsell() {
  if (cart.length === 0) {
    upsellRow.innerHTML = '';
    return;
  }

  const last = cart[cart.length - 1];
  const upsellId = last.upsell;
  const upsellItem = menu.find(m => m.id === upsellId);
  if (!upsellItem) return;

  upsellRow.innerHTML = `
    <div class="mini-card">
      <img src="${upsellItem.img}" alt="${upsellItem.name}">
      <p>${upsellItem.name}</p>
      <span class="price">₹${upsellItem.price}</span>
      <button class="add-btn" onclick="addToCart('${upsellItem.id}')"><i class="fas fa-plus"></i></button>
    </div>`;
}

function openCart() {
  cartDrawer.classList.add('open');
}

function closeCart() {
  cartDrawer.classList.remove('open');
}

// Event Listeners
document.addEventListener('click', e => {
  if (e.target.closest('.add-btn')) {
    const card = e.target.closest('.item-card');
    if (card && card.dataset.category) {
      addToCart(card.dataset.category);
    }
  }
});

closeCartBtn.addEventListener('click', closeCart);

// Init AOS
AOS.init({ duration: 600, once: true });
