
// cart.js

// Función para añadir un producto al carrito
function addToCart(product) {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  if (user) {
      const userEmail = user.email;
      const userCartKey = `cart_${userEmail}`;
      const cart = JSON.parse(localStorage.getItem(userCartKey)) || [];
      cart.push(product);
      localStorage.setItem(userCartKey, JSON.stringify(cart));
  } else {
      console.error('No user is logged in');
  }
}

// Función para renderizar el carrito en la pantalla
function renderCart() {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  if (user) {
      const userEmail = user.email;
      const userCartKey = `cart_${userEmail}`;
      const cart = JSON.parse(localStorage.getItem(userCartKey)) || [];
      const cartContainer = document.querySelector('#cartContainer'); // Cambia al selector real de tu HTML
      const totalContainer = document.querySelector('#totalContainer'); // Cambia al selector real de tu HTML
      cartContainer.innerHTML = '';
      let total = 0;
      cart.forEach(item => {
          const productDiv = document.createElement('div');
          productDiv.textContent = `${item.title} - $${item.price}`;
          cartContainer.appendChild(productDiv);
          total += item.price;
      });
      totalContainer.textContent = `Total: $${total.toFixed(2)}`;
  } else {
      console.error('No user is logged in');
  }
}

// Llama a renderCart al cargar la página del carrito
document.addEventListener('DOMContentLoaded', () => {
  renderCart();
});

// Función para obtener un producto por ID
function getProductById(id) {
  return data.find(product => product.id === id);
}

// Función para actualizar el total del carrito
function updateTotal() {
  const cart = loadCart();
  const total = cart.reduce((sum, item) => {
      const product = getProductById(item.id);
      return sum + product.price * item.quantity;
  }, 0);
  document.querySelector(".checkout h4").textContent = `TOTAL: $${total.toFixed(2)}`;
}

// Función para renderizar los elementos del carrito
function renderCart() {
  const cart = loadCart();
  const cartContainer = document.querySelector(".addition");
  cartContainer.innerHTML = ""; // Limpiar el contenido existente

  cart.forEach(item => {
      const product = getProductById(item.id);

      const itemElement = document.createElement("div");
      itemElement.classList.add("item");
      itemElement.innerHTML = `
          <div class="product">
              <div class="product-image">
                  <img src="${product.image[0]}" alt="${product.title}" width="150">
              </div>
              <div class="product-text">
                  <h2>${product.title}</h2>
                  <h3>USD $${product.price.toFixed(2)}</h3>
                  <div class="fit">
                      <div class="counter">
                          <div class="Lside" onclick="decreaseQuantity(${item.id})">-</div>
                          <div class="Mside">${item.quantity}</div>
                          <div class="Rside" onclick="increaseQuantity(${item.id})">+</div>
                      </div>
                      <p>ID: ${item.id}</p>
                  </div>
              </div>
          </div>
          <div class="x-button" onclick="removeFromCart(${item.id})">X</div>
      `;
      cartContainer.appendChild(itemElement);
  });
  updateTotal();
}

// Función para incrementar la cantidad de un producto en el carrito
function increaseQuantity(id) {
  const cart = loadCart();
  const item = cart.find(item => item.id === id);
  if (item) {
      item.quantity += 1;
  }
  saveCart(cart);
  renderCart();
}

// Función para disminuir la cantidad de un producto en el carrito
function decreaseQuantity(id) {
  const cart = loadCart();
  const item = cart.find(item => item.id === id);
  if (item) {
      if (item.quantity > 1) {
          item.quantity -= 1;
      } else {
          removeFromCart(id);
      }
  }
  saveCart(cart);
  renderCart();
}

// Función para eliminar un producto del carrito
function removeFromCart(id) {
  let cart = loadCart();
  cart = cart.filter(item => item.id !== id);
  saveCart(cart);
  renderCart();
}

// Llamada inicial para mostrar el carrito
renderCart();