/* ========= MENU DATA ========= */
const data = {
  pizza: [
    { id: "p1", name: "Margherita", desc: "Classic cheese & tomato", price: 249 },
    { id: "p2", name: "corn cheese pizza", desc: "Loaded with corn and cheese", price: 280 },
    { id: "p3", name: "Tandoori Panner Pizza", desc: "Smoky Paneer with Tandoor Flavour", price: 330 },
    { id: "p4", name: "Panner Tikka Pizza", desc: "Tangy and exotic paneer tikka flavoured", price: 320 },
    { id: "p5", name: "Cheese Loaded Pizza", desc: "Mozzarella Loaded Cheese burst pizza", price: 390 },
    { id: "p6", name: "Spicy pizza", desc: "Hot sauce & spicy chicken", price: 320 }
  ],
  fries: [
    { id: "f1", name: "Classic Fries", desc: "Golden crispy potato fries", price: 120 },
    { id: "f2", name: "Cheese Fries", desc: "Topped with melted cheese", price: 140 },
    { id: "f3", name: "Chilli Cheese", desc: "Spicy chilli + cheese", price: 160 },
    { id: "f4", name: "Peri-Peri", desc: "Seasoned with peri spices", price: 160 },
    { id: "f5", name: "Cheese Chilly Nachos", desc: "Nacho topped with melted Chilly Cheese", price: 210 },
    { id: "f6", name: "Veg Loaded Nachos", desc: "Nachos topped with veggies and flavoured cheese", price: 240 }
  ],
  'garlic-breads': [
    { id: "g1", name: "Plain Garlic Bread", desc: "Buttery & garlicky", price: 110 },
    { id: "g2", name: "Cheese Garlic Bread", desc: "Cheese Loaded Garlic Bread", price: 130 },
    { id: "g3", name: "Herb & Cheese", desc: "Italian herbs + cheese", price: 150 },
    { id: "g4", name: "Spicy Jalapeño", desc: "With jalapeños & chilli flakes", price: 150 },
    { id: "g5", name: "Olive & Tomato", desc: "Olives & sun-dried tomato", price: 160 },
    { id: "g6", name: "Pesto Delight", desc: "Pesto sauce topping", price: 230 }
  ],
  sandwiches: [
    { id: "s1", name: "Corn Cheese Sandwich", desc: "Filled with Cheese and Sweet Corn", price: 180 },
    { id: "s2", name: "Veg Loaded Sandwich", desc: "Loaded and filled with veggies and melting cheese", price: 190 },
    { id: "s3", name: "Paneer Tikka", desc: "Spicy tikka chunks", price: 220 },
    { id: "s4", name: "Tandoori Paneer", desc: "Smooky Tandoor Flavoured", price: 230 },
    { id: "s5", name: "Club Sandwich", desc: "Triple-decker classic", price: 250 },
    { id: "s6", name: "Bombay Sandwich", desc: "Triple layered Sandwich filled with smashed potatoes and authentic Spices", price: 250 }
  ],
  burgers: [
    { id: "b2", name: "Zinger Spicy Burger", desc: "Crispy Zinger fillet with spice tone", price: 160 },
    { id: "b1", name: "Veg Cheese Burger", desc: "Veg patty, Lettuce, Onion, Tomato, Cheese Slice", price: 170 },
    { id: "b3", name: "Veggie Supreme", desc: "Veg patty & fresh veg with dripping Cheese", price: 230 },
    { id: "b4", name: "BBQ Bacon", desc: "BBQ sauce & bacon strips", price: 250 },
    { id: "b5", name: "Double Cheese", desc: "Double patty & cheese", price: 260 },
    { id: "b6", name: "Spicy Paneer", desc: "Spicy paneer patty", price: 270 }
  ],
  pasta: [
    { id: "pa1", name: "Aglio Olivo Pasta", desc: "Mixed Spiced dry pasta", price: 310 },
    { id: "pa2", name: "Tangy Tomato Pasta", desc: "Tangy macccroni", price: 310 },
    { id: "pa3", name: "Red Sause Pasta", desc: "Made in Spicy tomato red sauce", price: 340 },
    { id: "pa4", name: "Pink Sause Pasta", desc: "Combo of red+White Sause associated with Garlic Bread", price: 350 },
    { id: "pa5", name: "Pesto Penne", desc: "Basil pesto & pine nuts", price: 310 },
    { id: "pa6", name: "Mac & Cheese", desc: "Classic cheesy mac", price: 330 },
    { id: "pa7", name: "White Sause Pasta", desc: "Creamy White Sause Pasta accompanied by Garlic Bread", price: 390 }
  ],
  'soup-salad': [
    { id: "ss1", name: "Tomato Soup", desc: "Rich & creamy tomato", price: 140 },
    { id: "ss2", name: "Minestrone", desc: "Mixed veggie soup", price: 180 },
    { id: "ss3", name: "Caesar Salad", desc: "Romaine, croutons, parmesan", price: 280 },
    { id: "ss4", name: "Greek Salad", desc: "Olives, feta, cucumbers", price: 290 },
    { id: "ss5", name: "Chicken Soup", desc: "Shredded chicken broth", price: 260 },
    { id: "ss6", name: "Quinoa Salad", desc: "Quinoa, veggies, lemon", price: 320 }
  ],
  combos: [
    { id: "c1", name: "Combo 1", desc: "Veg Cheese Burger + fries", price: 300 },
    { id: "c2", name: "Combo 2", desc: "Veg Cheese Burger + fries + Milkshake", price: 360 },
    { id: "c3", name: "Combo 3", desc: "Burger + Fries + Nuggets", price: 420 },
    { id: "c4", name: "Salad + Soup", desc: "Any salad + any soup", price: 450 },
    { id: "c5", name: "Sandwich + Fries", desc: "Any sandwich + fries", price: 310 },
    { id: "c6", name: "Family Combo", desc: "2 pizzas, 1 fries, 2 drinks", price: 410 }
  ]
};

/* ========= UTILS ========= */
const grid = document.getElementById('menu-grid');
const categoryNav = document.querySelector('.category-nav');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.querySelector('#cart-total span');
const cartPanel = document.getElementById('cart-panel');
const cartTrigger = document.querySelector('.cart-trigger');
let cart = [];

/* ========= RENDER ========= */
function renderMenu(category = 'all') {
  grid.innerHTML = '';
  const items = category === 'all'
    ? Object.values(data).flat()
    : data[category];

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.dataset.id = item.id;
    card.innerHTML = `
      <img class="item-img" src="assets/Food/${item.id}.jpg" onerror="this.onerror=null; this.src='assets/Food/${item.id}.jpeg';" alt="${item.name}">
      <div class="item-info">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="item-footer">
          <span class="price">$${item.price.toFixed(2)}</span>
          <button class="add-btn" aria-label="Add ${item.name} to cart">Add</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}
renderMenu();

/* ========= CATEGORY FILTER ========= */
categoryNav.addEventListener('click', e => {
  if (e.target.tagName !== 'BUTTON') return;
  document.querySelector('.category-nav .active')?.classList.remove('active');
  e.target.classList.add('active');
  renderMenu(e.target.dataset.category);
});

/* ========= CART LOGIC ========= */
function updateCartUI() {
  cartCount.textContent = cart.reduce((sum, i) => sum + i.qty, 0);
  cartTotal.textContent = cart.reduce((sum, i) => sum + i.qty * i.price, 0).toFixed(2);
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `${item.qty}× ${item.name} – $${(item.qty * item.price).toFixed(2)}`;
    cartItems.appendChild(li);
  });
}

function addToCart(id) {
  const item = Object.values(data).flat().find(i => i.id === id);
  const existing = cart.find(i => i.id === id);
  existing ? existing.qty++ : cart.push({ ...item, qty: 1 });
  updateCartUI();
}

grid.addEventListener('click', e => {
  if (e.target.classList.contains('add-btn')) {
    const id = e.target.closest('.item-card').dataset.id;
    addToCart(id);
  }
});

/* ========= CART PANEL TOGGLE ========= */
cartTrigger.addEventListener('click', () => cartPanel.classList.toggle('show'));
window.addEventListener('click', e => {
  if (!cartWidget.contains(e.target) && !e.target.closest('.cart-trigger'))
    cartPanel.classList.remove('show');
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') cartPanel.classList.remove('show');
});