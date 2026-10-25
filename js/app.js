/**
 * Toddelicious Food Truck - Interactive Application Engine
 * Brand: toddelicious.truck
 * Instagram: https://www.instagram.com/toddelicious.truck?exin=MWNneTc4MjVpZD5aA==
 */

// --- Menu Database ---
const MENU_ITEMS = [
  {
    id: 'todd-supreme',
    category: 'burgers',
    name: 'The Todd Supreme Smash',
    tagline: 'Signature House Favorite',
    price: 11.50,
    calories: '740 kcal',
    rating: 4.9,
    reviews: 620,
    badge: "Chef's Special",
    dietary: ['halal'],
    image: 'assets/transparent-burger.png',
    bgImage: 'assets/bacon-burger.jpg',
    description: 'Double 100% grass-fed Angus smash patties, molten American cheddar, signature Todd relish sauce, grilled sweet onions, and crisp pickles on a butter-toasted brioche bun.'
  },
  {
    id: 'truffle-beast',
    category: 'burgers',
    name: 'Truffle & Shroom Melt',
    tagline: 'Decadent & Earthy',
    price: 12.95,
    calories: '810 kcal',
    rating: 4.8,
    reviews: 340,
    badge: 'Gourmet',
    dietary: ['halal'],
    image: 'assets/truffle-burger.jpg',
    bgImage: 'assets/truffle-burger.jpg',
    description: 'Double smashed beef patties layered with aged Swiss cheese, roasted wild forest mushrooms, caramelized shallots, and house-whipped black truffle garlic aioli.'
  },
  {
    id: 'bacon-jam-smash',
    category: 'burgers',
    name: 'Smoky Bacon & Jam Beast',
    tagline: 'Sweet, Savory & Smoky',
    price: 12.50,
    calories: '860 kcal',
    rating: 5.0,
    reviews: 480,
    badge: 'Crowd Favorite',
    dietary: [],
    image: 'assets/bacon-burger.jpg',
    bgImage: 'assets/bacon-burger.jpg',
    description: 'Double beef patties, thick-cut hardwood smoked bacon, slow-cooked bourbon onion jam, double aged cheddar, and house smoky BBQ glaze on potato bun.'
  },
  {
    id: 'plant-crush',
    category: 'burgers',
    name: 'The Green Craver Smash',
    tagline: '100% Plant-Powered Goodness',
    price: 11.95,
    calories: '620 kcal',
    rating: 4.7,
    reviews: 190,
    badge: 'Plant Based',
    dietary: ['vegetarian', 'vegan-option'],
    image: 'assets/transparent-burger.png',
    bgImage: 'assets/truffle-burger.jpg',
    description: 'Crispy-edged plant protein smash patty, vegan smoked gouda, pickled red onions, fresh baby arugula, heirloom tomato, and tangy avocado lime crema.'
  },
  {
    id: 'hot-bird',
    category: 'chicken',
    name: 'Crispy Buttermilk Hot Bird',
    tagline: 'Extra Crunchy & Spicy Kick',
    price: 10.95,
    calories: '780 kcal',
    rating: 4.9,
    reviews: 410,
    badge: 'Spicy 🌶️',
    dietary: ['halal'],
    image: 'assets/chicken.jpg',
    bgImage: 'assets/chicken.jpg',
    description: '24-hour buttermilk soaked chicken thigh fried golden crisp, tossed in Nashville chili oil, topped with creamy cider slaw, honey mustard, and dill pickles.'
  },
  {
    id: 'dirty-truck-fries',
    category: 'fries',
    name: "Todd's Dirty Truck Fries",
    tagline: 'Loaded to the Max',
    price: 7.50,
    calories: '590 kcal',
    rating: 4.9,
    reviews: 580,
    badge: 'Must Try',
    dietary: ['halal'],
    image: 'assets/fries.jpg',
    bgImage: 'assets/fries.jpg',
    description: 'Crispy skin-on golden potato fries smothered in warm beer-cheese fondue, caramelized sweet onions, chopped grilled patty bits, and secret Todd sauce drizzle.'
  },
  {
    id: 'truffle-parm-fries',
    category: 'fries',
    name: 'Truffle Parmesan Hand-Cut Fries',
    tagline: 'Aromatic & Crispy',
    price: 6.95,
    calories: '480 kcal',
    rating: 4.8,
    reviews: 290,
    badge: 'Vegetarian',
    dietary: ['vegetarian', 'gluten-free'],
    image: 'assets/fries.jpg',
    bgImage: 'assets/fries.jpg',
    description: 'Hand-cut double fried potatoes tossed in white truffle essence, freshly grated 24-month Parmigiano-Reggiano, and chopped Italian flat parsley.'
  },
  {
    id: 'caramel-shake',
    category: 'shakes',
    name: 'Salted Caramel Biscoff Shake',
    tagline: 'Ultra Creamy & Indulgent',
    price: 6.50,
    calories: '540 kcal',
    rating: 5.0,
    reviews: 730,
    badge: 'Sweet Tooth',
    dietary: ['vegetarian'],
    image: 'assets/shake.jpg',
    bgImage: 'assets/shake.jpg',
    description: 'Hand-spun Madagascar vanilla gelato, Lotus Biscoff biscuit spread, sea-salted caramel drizzle, topped with fresh whipped cream and crushed biscuit crunch.'
  },
  {
    id: 'wild-shake',
    category: 'shakes',
    name: 'Wild Strawberry Shortcake Shake',
    tagline: 'Fruity & Velvety',
    price: 6.25,
    calories: '510 kcal',
    rating: 4.8,
    reviews: 210,
    badge: 'Summer Special',
    dietary: ['vegetarian'],
    image: 'assets/shake.jpg',
    bgImage: 'assets/shake.jpg',
    description: 'Real strawberry coulis blended with thick cream gelato, graham cracker crumbs, and topped with freeze-dried strawberry dust.'
  },
  {
    id: 'todd-sauce-duo',
    category: 'sauces',
    name: 'Duo of Todd Craft Dips',
    tagline: 'Smoky Chipotle & Garlic Aioli',
    price: 2.75,
    calories: '160 kcal',
    rating: 4.9,
    reviews: 320,
    badge: 'Add-on',
    dietary: ['vegetarian', 'gluten-free'],
    image: 'assets/fries.jpg',
    bgImage: 'assets/fries.jpg',
    description: 'Two 2oz tubs of our famous scratch-made dips: One signature smoky Todd burger relish crema, and one roasted garlic lemon herb aioli.'
  }
];

// --- Weekly Truck Schedule ---
const TRUCK_SCHEDULE = [
  { day: 'Monday', spot: 'Spark Innovation Hub / Tech Plaza', time: '11:30 AM - 3:30 PM', status: 'Upcoming' },
  { day: 'Tuesday', spot: 'Norfolk Riverside Walkway & Marina', time: '12:00 PM - 8:00 PM', status: 'Upcoming' },
  { day: 'Wednesday', spot: 'Arts District Market (Main Gate)', time: '12:00 PM - 9:00 PM', status: 'Upcoming' },
  { day: 'Thursday', spot: 'University Commons North Quad', time: '11:00 AM - 4:00 PM', status: 'Upcoming' },
  { day: 'Friday', spot: 'Downtown Night Sizzle & Breweries', time: '4:00 PM - 11:30 PM', status: 'Upcoming' },
  { day: 'Saturday', spot: 'Central Food Park & Live Stage', time: '12:00 PM - 11:00 PM', status: 'Upcoming' },
  { day: 'Sunday', spot: 'Farmers Market & Street Car Meet', time: '10:30 AM - 6:00 PM', status: 'Upcoming' }
];

// --- Hotspot Ingredient Data ---
const HOTSPOT_INFO = {
  bun: {
    title: 'Golden Artisan Brioche Bun',
    badge: 'Baked Fresh Daily at 5 AM',
    desc: 'Soft, buttery, and lightly toasted on the chrome grill with clarified garlic butter. Finished with roasted sesame seeds for that authentic artisanal bite.'
  },
  sauce: {
    title: 'Secret Todd Signature Sauce',
    badge: 'House Recipe',
    desc: 'Our coveted secret spread: smoky Spanish paprika, dill pickle relish, roasted garlic, cracked black pepper, and tangy slow-whisked crema.'
  },
  cheese: {
    title: 'Molten Aged Wisconsin Cheddar',
    badge: 'Double Melted',
    desc: 'Two thick slices melted under a stainless steel steam dome directly onto the hot sear, locking in the savory meat juices.'
  },
  patty: {
    title: 'Double Smashed Angus Patties',
    badge: '100% Grass-Fed Local Beef',
    desc: 'Never frozen, hand-formed balls smashed paper-thin onto a 450°F cast-iron flattop. Results in ultra-crisp caramelized lacy edges while keeping the core juicy.'
  },
  greens: {
    title: 'Crisp Oak Leaf & Vine-Ripe Tomato',
    badge: 'Farm-To-Truck Fresh',
    desc: 'Locally grown crisp greens and heirloom tomato slices delivering the fresh temperature crunch to cut through the rich savory goodness.'
  }
};

// --- Application State ---
let cart = JSON.parse(localStorage.getItem('toddelicious_cart') || '[]');
let activeCategory = 'all';
let appliedPromo = null;

// --- DOM Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  renderMenuItems();
  updateCartUI();
  setupEventListeners();
  setupLiveStatus();
  setupCateringCalculator();
});

// --- Render Menu Items ---
function renderMenuItems(items = MENU_ITEMS) {
  const container = document.getElementById('menu-grid');
  if (!container) return;

  const filtered = activeCategory === 'all' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-500">
        <p class="text-lg font-medium">No items found in this category.</p>
        <button onclick="filterCategory('all')" class="mt-4 px-5 py-2 rounded-full bg-emerald-600 text-white font-semibold text-sm">View All Items</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="menu-card bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between group">
      <div>
        <div class="relative w-full h-52 rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 mb-4 flex items-center justify-center p-3">
          <img src="${item.image}" alt="${item.name}" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md">
          <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-emerald-800 font-bold text-xs px-3 py-1 rounded-full shadow-sm">
            ${item.badge}
          </span>
          <span class="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-white font-medium text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
            ★ ${item.rating}
          </span>
        </div>
        <div class="flex items-start justify-between gap-2 mb-1">
          <h3 class="font-heading text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">${item.name}</h3>
          <span class="font-heading text-lg font-extrabold text-emerald-700 whitespace-nowrap">$${item.price.toFixed(2)}</span>
        </div>
        <p class="text-xs text-amber-600 font-semibold mb-2">${item.tagline} • ${item.calories}</p>
        <p class="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">${item.description}</p>
      </div>

      <div class="pt-3 border-t border-slate-100 flex items-center gap-2">
        <button onclick="addToCart('${item.id}')" class="flex-1 bg-emerald-700 hover:bg-emerald-800 active:scale-95 text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
          Add to Bag
        </button>
        <button onclick="openItemModal('${item.id}')" title="View details" class="p-3 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
        </button>
      </div>
    </div>
  `).join('');
}

// --- Category Filtering ---
function filterCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll('.cat-pill').forEach(btn => {
    if (btn.dataset.category === cat) {
      btn.classList.add('bg-emerald-700', 'text-white', 'shadow-md');
      btn.classList.remove('bg-white', 'text-slate-700', 'hover:bg-slate-50');
    } else {
      btn.classList.remove('bg-emerald-700', 'text-white', 'shadow-md');
      btn.classList.add('bg-white', 'text-slate-700', 'hover:bg-slate-50');
    }
  });
  renderMenuItems();
}

// --- Cart Operations ---
function addToCart(itemId, qty = 1, customNote = '') {
  const item = MENU_ITEMS.find(m => m.id === itemId);
  if (!item) return;

  const existingIndex = cart.findIndex(c => c.id === itemId && c.note === customNote);
  if (existingIndex > -1) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      qty: qty,
      note: customNote
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added ${item.name} to your bag! 🍔`, 'success');
  
  // Play subtle visual bump on cart buttons
  const badges = document.querySelectorAll('.cart-badge');
  badges.forEach(b => {
    b.classList.add('scale-125');
    setTimeout(() => b.classList.remove('scale-125'), 200);
  });
}

function updateQuantity(index, delta) {
  if (cart[index]) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
  }
}

function removeFromCart(index) {
  if (cart[index]) {
    const name = cart[index].name;
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
    showToast(`Removed ${name}`, 'info');
  }
}

function clearCart() {
  cart = [];
  appliedPromo = null;
  saveCart();
  updateCartUI();
  showToast('Bag cleared', 'info');
}

function saveCart() {
  localStorage.setItem('toddelicious_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const totalCount = cart.reduce((acc, curr) => acc + curr.qty, 0);
  const subtotal = cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
  
  // Update badge counts
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = totalCount;
    el.style.display = totalCount > 0 ? 'inline-flex' : 'none';
  });

  // Update Drawer Items
  const drawerList = document.getElementById('cart-items-list');
  const emptyCartMsg = document.getElementById('cart-empty-state');
  const cartSummary = document.getElementById('cart-summary-section');

  if (drawerList) {
    if (cart.length === 0) {
      if (emptyCartMsg) emptyCartMsg.classList.remove('hidden');
      if (cartSummary) cartSummary.classList.add('hidden');
      drawerList.innerHTML = '';
    } else {
      if (emptyCartMsg) emptyCartMsg.classList.add('hidden');
      if (cartSummary) cartSummary.classList.remove('hidden');

      drawerList.innerHTML = cart.map((item, idx) => `
        <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
          <div class="w-14 h-14 bg-white rounded-xl p-1 flex-shrink-0 flex items-center justify-center border border-slate-200">
            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-contain">
          </div>
          <div class="flex-1 min-w-0">
            <h4 class="font-bold text-sm text-slate-800 truncate">${item.name}</h4>
            <p class="text-xs text-emerald-700 font-semibold">$${(item.price * item.qty).toFixed(2)}</p>
            ${item.note ? `<p class="text-[10px] text-slate-400 italic">${item.note}</p>` : ''}
          </div>
          <div class="flex items-center gap-2 bg-white px-2 py-1 rounded-lg border border-slate-200">
            <button onclick="updateQuantity(${idx}, -1)" class="text-slate-500 hover:text-slate-800 font-bold px-1 text-sm">-</button>
            <span class="text-xs font-bold text-slate-800 min-w-[14px] text-center">${item.qty}</span>
            <button onclick="updateQuantity(${idx}, 1)" class="text-slate-500 hover:text-slate-800 font-bold px-1 text-sm">+</button>
          </div>
          <button onclick="removeFromCart(${idx})" class="text-slate-300 hover:text-rose-500 transition-colors p-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
      `).join('');
    }
  }

  // Update Summary Pricing
  let discount = 0;
  if (appliedPromo === 'TODD10') {
    discount = subtotal * 0.10;
  }
  const tax = (subtotal - discount) * 0.08;
  const total = (subtotal - discount) + tax;

  const elSubtotal = document.getElementById('cart-subtotal');
  const elDiscountRow = document.getElementById('cart-discount-row');
  const elDiscount = document.getElementById('cart-discount');
  const elTax = document.getElementById('cart-tax');
  const elTotal = document.getElementById('cart-total');

  if (elSubtotal) elSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  if (elDiscountRow && elDiscount) {
    if (discount > 0) {
      elDiscountRow.classList.remove('hidden');
      elDiscount.textContent = `-$${discount.toFixed(2)}`;
    } else {
      elDiscountRow.classList.add('hidden');
    }
  }
  if (elTax) elTax.textContent = `$${tax.toFixed(2)}`;
  if (elTotal) elTotal.textContent = `$${total.toFixed(2)}`;
}

// --- Cart Drawer Toggles ---
function openCart() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('hidden', 'opacity-0');
    backdrop.classList.add('opacity-100');
    document.body.classList.add('overflow-hidden');
  }
}

function closeCart() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('opacity-0');
    setTimeout(() => {
      backdrop.classList.add('hidden');
    }, 300);
    document.body.classList.remove('overflow-hidden');
  }
}

// --- Promo Code ---
function applyPromoCode() {
  const input = document.getElementById('promo-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === 'TODD10') {
    appliedPromo = 'TODD10';
    showToast('Promo code applied: 10% OFF! 🎉', 'success');
    updateCartUI();
  } else if (code === 'FREESHAKE') {
    appliedPromo = 'FREESHAKE';
    showToast('Promo code applied: Free Biscoff Shake coupon added! 🥤', 'success');
  } else {
    showToast('Invalid promo code. Try "TODD10"', 'error');
  }
}

// --- Hotspot Pin Click Handler ---
function showHotspotInfo(partKey) {
  const info = HOTSPOT_INFO[partKey];
  if (!info) return;

  const modal = document.getElementById('hotspot-modal');
  const title = document.getElementById('hotspot-title');
  const badge = document.getElementById('hotspot-badge');
  const desc = document.getElementById('hotspot-desc');

  if (modal && title && badge && desc) {
    title.textContent = info.title;
    badge.textContent = info.badge;
    desc.textContent = info.desc;
    modal.classList.remove('hidden', 'opacity-0', 'scale-95');
    modal.classList.add('opacity-100', 'scale-100');
  }
}

function closeHotspotModal() {
  const modal = document.getElementById('hotspot-modal');
  if (modal) {
    modal.classList.add('opacity-0', 'scale-95');
    setTimeout(() => modal.classList.add('hidden'), 200);
  }
}

// --- Checkout Modal Simulation ---
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Your bag is empty! Add delicious bites first.', 'info');
    return;
  }
  closeCart();
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

function submitCheckoutOrder(e) {
  e.preventDefault();
  const name = document.getElementById('checkout-name')?.value || 'Foodie';
  const phone = document.getElementById('checkout-phone')?.value || '555-0192';
  const pickupMode = document.querySelector('input[name="pickup-mode"]:checked')?.value || 'truck';

  const orderNum = 'TD-' + Math.floor(1000 + Math.random() * 9000);
  const totalAmount = document.getElementById('cart-total')?.textContent || '$0.00';

  // Display confirmation slip
  const checkoutForm = document.getElementById('checkout-form');
  const checkoutSuccess = document.getElementById('checkout-success-view');

  if (checkoutForm && checkoutSuccess) {
    checkoutForm.classList.add('hidden');
    checkoutSuccess.classList.remove('hidden');

    document.getElementById('receipt-order-id').textContent = orderNum;
    document.getElementById('receipt-name').textContent = name;
    document.getElementById('receipt-phone').textContent = phone;
    document.getElementById('receipt-total').textContent = totalAmount;
    document.getElementById('receipt-mode').textContent = pickupMode === 'truck' ? '🚚 Truck Window Pickup' : '🛵 Curbside Delivery';

    // Clear cart
    cart = [];
    appliedPromo = null;
    saveCart();
    updateCartUI();

    showToast(`Order #${orderNum} sent to the grill! 🔥`, 'success');
  }
}

// --- Live Food Truck Radar ---
function setupLiveStatus() {
  const now = new Date();
  const hour = now.getHours();
  const dayName = now.toLocaleDateString('en-US', { weekday: 'long' });

  const statusBadge = document.getElementById('truck-live-status-pill');
  const liveSpotName = document.getElementById('truck-current-spot');
  const scheduleDayBadge = document.getElementById('today-schedule-text');

  // Let's assume truck operates 11:00 AM to 10:30 PM (11 to 22)
  const isOpen = hour >= 11 && hour <= 22;

  if (statusBadge) {
    if (isOpen) {
      statusBadge.innerHTML = `
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 -ml-2.5"></span>
        <span>TRUCK OPEN & SIZZLING</span>
      `;
      statusBadge.className = 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30';
    } else {
      statusBadge.innerHTML = `
        <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
        <span>PREPARING FRESH INGREDIENTS • OPENS AT 11:30 AM</span>
      `;
      statusBadge.className = 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-950/80 text-amber-300 border border-amber-500/30';
    }
  }

  // Find today's spot in schedule
  const todayEntry = TRUCK_SCHEDULE.find(s => s.day.toLowerCase() === dayName.toLowerCase()) || TRUCK_SCHEDULE[0];
  if (liveSpotName) {
    liveSpotName.textContent = todayEntry.spot;
  }
  if (scheduleDayBadge) {
    scheduleDayBadge.textContent = `Today (${dayName}): ${todayEntry.time}`;
  }

  // Populate Schedule Accordion
  const scheduleList = document.getElementById('schedule-list');
  if (scheduleList) {
    scheduleList.innerHTML = TRUCK_SCHEDULE.map(item => {
      const isToday = item.day.toLowerCase() === dayName.toLowerCase();
      return `
        <div class="flex items-center justify-between p-4 rounded-2xl ${isToday ? 'bg-emerald-900/30 border border-emerald-500/40' : 'bg-slate-900/50 border border-slate-800'} transition-all hover:border-emerald-500/30">
          <div class="flex items-center gap-3">
            <span class="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${isToday ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'}">
              ${item.day.slice(0, 3)}
            </span>
            <div>
              <h4 class="font-bold text-sm text-white flex items-center gap-2">
                ${item.spot}
                ${isToday ? '<span class="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">TODAY</span>' : ''}
              </h4>
              <p class="text-xs text-slate-400">${item.time}</p>
            </div>
          </div>
          <a href="https://maps.google.com" target="_blank" rel="noopener" class="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
            Map
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </div>
      `;
    }).join('');
  }
}

// --- Catering Calculator ---
function setupCateringCalculator() {
  const slider = document.getElementById('catering-guests');
  const countDisp = document.getElementById('catering-guests-val');
  const packageSelect = document.getElementById('catering-package');
  const quoteDisp = document.getElementById('catering-quote-val');

  function calculate() {
    if (!slider || !quoteDisp) return;
    const guests = parseInt(slider.value, 10);
    if (countDisp) countDisp.textContent = `${guests} Guests`;

    let pricePerGuest = 16.50; // standard
    if (packageSelect && packageSelect.value === 'vip') {
      pricePerGuest = 22.00;
    } else if (packageSelect && packageSelect.value === 'late-night') {
      pricePerGuest = 14.00;
    }

    const estimatedTotal = guests * pricePerGuest;
    quoteDisp.textContent = `$${estimatedTotal.toLocaleString()}`;
  }

  if (slider) slider.addEventListener('input', calculate);
  if (packageSelect) packageSelect.addEventListener('change', calculate);
  calculate();
}

function handleCateringSubmit(e) {
  e.preventDefault();
  showToast('Catering inquiry submitted! Chef Todd will reach out within 2 hours. 🚚✨', 'success');
  e.target.reset();
}

// --- Item Details Modal ---
function openItemModal(itemId) {
  const item = MENU_ITEMS.find(m => m.id === itemId);
  if (!item) return;

  const modal = document.getElementById('item-detail-modal');
  if (!modal) return;

  document.getElementById('modal-item-img').src = item.image;
  document.getElementById('modal-item-name').textContent = item.name;
  document.getElementById('modal-item-badge').textContent = item.badge;
  document.getElementById('modal-item-price').textContent = `$${item.price.toFixed(2)}`;
  document.getElementById('modal-item-desc').textContent = item.description;
  document.getElementById('modal-item-tagline').textContent = `${item.tagline} • ${item.calories}`;

  const addBtn = document.getElementById('modal-add-to-bag-btn');
  addBtn.onclick = () => {
    addToCart(item.id, 1);
    closeItemModal();
  };

  modal.classList.remove('hidden');
}

function closeItemModal() {
  const modal = document.getElementById('item-detail-modal');
  if (modal) modal.classList.add('hidden');
}

// --- Toast Notifications ---
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const colors = {
    success: 'bg-emerald-900/90 text-white border-emerald-500/50',
    error: 'bg-rose-900/90 text-white border-rose-500/50',
    info: 'bg-slate-900/90 text-white border-slate-700'
  };

  toast.className = `toast px-4 py-3 rounded-2xl shadow-xl backdrop-blur-md border text-xs font-semibold flex items-center gap-3 ${colors[type] || colors.info}`;
  toast.innerHTML = `
    <span>${message}</span>
    <button onclick="this.parentElement.remove()" class="text-white/60 hover:text-white">&times;</button>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- Mobile Navigation ---
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-nav-panel');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// --- Global Event Listeners ---
function setupEventListeners() {
  // Close modals on Esc
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeHotspotModal();
      closeCheckoutModal();
      closeItemModal();
    }
  });

  // Newsletter form
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Welcome to the Todd Club! Free loaded fries voucher sent to your inbox 🍟🎁', 'success');
      newsletterForm.reset();
    });
  }
}
