const PRODUCTS = [
  {id:1,title:'Classic Sneakers',price:59.99,img:'Frontend/Res/product_images/icon/sample1.jpg'},
  {id:2,title:'Casual Tee',price:19.99,img:'Frontend/Res/product_images/icon/sample2.jpg'},
  {id:3,title:'Denim Jacket',price:89.99,img:'Frontend/Res/product_images/icon/sample3.jpg'},
  {id:4,title:'Leather Bag',price:129.99,img:'Frontend/Res/product_images/icon/sample4.jpg'},
  {id:5,title:'Sunglasses',price:29.99,img:'Frontend/Res/product_images/icon/sample5.jpg'},
  {id:6,title:'Sport Watch',price:149.99,img:'Frontend/Res/product_images/icon/sample6.jpg'}
];

const productList = document.getElementById('product-list');
const cartBtn = document.querySelector('.cart-btn');
const cartDrawer = document.getElementById('cart');
const closeCart = document.getElementById('close-cart');
const cartItemsEl = document.querySelector('.cart-items');
const cartTotalEl = document.getElementById('cart-total');
const cartCountEl = document.querySelector('.cart-count');

let cart = [];

function format(n){return n.toFixed(2)}

function renderProducts(list){
  productList.innerHTML = '';
  list.forEach(p=>{
    const el = document.createElement('article');
    el.className = 'product';
    el.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <h3>${p.title}</h3>
      <div class="price">$${format(p.price)}</div>
      <div class="actions">
        <button class="btn add" data-id="${p.id}">Add</button>
        <button class="btn buy" data-id="${p.id}">Buy</button>
      </div>
    `;
    productList.appendChild(el);
  })
}

function updateCartUI(){
  cartItemsEl.innerHTML = '';
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
  cart.forEach(item=>{
    const li = document.createElement('li');
    li.className = 'cart-item';
    li.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <div style="flex:1">
        <div>${item.title}</div>
        <div style="color:#666">$${format(item.price)} × ${item.qty}</div>
      </div>
      <div>
        <button data-id="${item.id}" class="btn dec">-</button>
        <button data-id="${item.id}" class="btn inc">+</button>
      </div>
    `;
    cartItemsEl.appendChild(li);
  });
  cartTotalEl.textContent = format(total);
  cartCountEl.textContent = cart.reduce((s,i)=>s+i.qty,0);
}

function addToCart(id){
  const p = PRODUCTS.find(x=>x.id==id);
  if(!p) return;
  const exist = cart.find(x=>x.id==id);
  if(exist) exist.qty++;
  else cart.push({...p,qty:1});
  updateCartUI();
}

function changeQty(id,delta){
  const item = cart.find(x=>x.id==id);
  if(!item) return;
  item.qty += delta;
  if(item.qty<=0) cart = cart.filter(x=>x.id!==id);
  updateCartUI();
}

// event delegation
productList.addEventListener('click', e=>{
  const btn = e.target.closest('button');
  if(!btn) return;
  const id = Number(btn.dataset.id);
  if(btn.classList.contains('add')) addToCart(id);
  if(btn.classList.contains('buy')) { addToCart(id); openCart(); }
});

cartBtn.addEventListener('click', openCart);
closeCart.addEventListener('click', closeCartFn);
cartItemsEl.addEventListener('click', e=>{
  const btn = e.target.closest('button');
  if(!btn) return;
  const id = Number(btn.dataset.id);
  if(btn.classList.contains('inc')) changeQty(id,1);
  if(btn.classList.contains('dec')) changeQty(id,-1);
});

function openCart(){ cartDrawer.classList.add('open'); }
function closeCartFn(){ cartDrawer.classList.remove('open'); }

// init
renderProducts(PRODUCTS);
updateCartUI();

// simple search
document.querySelector('.search').addEventListener('input', e=>{
  const q = e.target.value.trim().toLowerCase();
  renderProducts(PRODUCTS.filter(p=>p.title.toLowerCase().includes(q)));
});
