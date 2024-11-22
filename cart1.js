let data = [
    {
        "id": 1,
        "title": "Arcade Donkey Kong",
        "price": 299.99,
        "description": "Classic Donkey Kong arcade cabinet with original sound and joystick controls.",
        "image": ["https://github.com/rmcarvajal/techpics/raw/main/dk cabinet.png"],
        "category": "arcades",
      },
      {
        "id": 2,
        "title": "Pac Man Cabinet",
        "price": 349.99,
        "description": "Relive the nostalgia with this authentic Pac Man arcade cabinet.",
        "image": ["https://github.com/rmcarvajal/techpics/raw/main/pacman cabinet.jpg"],
        "category": "arcades",
      },
      {
        "id": 3,
        "title": "4 Player cabinet",
        "price": 499.99,
        "description": "Enjoy multiplayer arcade fun with this 4-player cabinet, perfect for group gaming.",
        "image": ["https://github.com/rmcarvajal/techpics/raw/main/4 player cabinet.jpg"],
        "category": "arcades",
      },
      {
        "id": 4,
        "title": "Mortal Kombat 2 Cabinet",
        "price": 399.99,
        "description": "Fight your way to victory on this Mortal Kombat 2 arcade machine.",
        "image": ["https://github.com/rmcarvajal/techpics/raw/main/mk2 cabinet.png"],
        "category": "arcades",
      },
    
      // Category: Videogames
      {
        "id": 5,
        "title": "The Legend of Zelda",
        "price": 59.99,
        "description": "Embark on a legendary adventure with Link in The Legend of Zelda.",
        "image": ["https://github.com/rmcarvajal/techpics/raw/main/tlz cart.jpg"],
        "category": "videogames",
      },
      {
        "id": 6,
        "title": "Super Mario Bros.",
        "price": 49.99,
        "description": "Join Mario on an adventure to rescue Princess Peach.",
        "image": ["https://github.com/rmcarvajal/techpics/raw/main/smb cart.png"],
        "category": "videogames",
      },
      {
        "id": 7,
        "title": "Street Fighter II",
        "price": 39.99,
        "description": "Classic fighting game featuring iconic characters and intense battles.",
        "image": ["https://github.com/rmcarvajal/techpics/raw/main/sf2 cart.png"],
        "category": "videogames",
      },
      {
        "id": 8,
        "title": "Sonic the Hedgehog",
        "price": 29.99,
        "description": "Run through thrilling levels with Sonic in this classic game.",
        "image": ["https://github.com/rmcarvajal/techpics/raw/main/sonic cart.png"],
        "category": "videogames",
      },
    
      
      {
        "id": 9,
        "title": "Nintendo Switch",
        "price": 299.99,
        "description": "Portable and versatile console for gaming at home or on the go.",
        "image": ["https://github.com/rmcarvajal/techpics/raw/main/switch.png"],
        "category": "consoles",
      },
      {
        "id": 10,
        "title": "PlayStation 5",
        "price": 499.99,
        "description": "The latest PlayStation console with cutting-edge graphics and performance.",
        "image": ["https://github.com/rmcarvajal/techpics/raw/main/ps5.png"],
        "category": "consoles",
      },
      {
        "id": 11,
        "title": "Xbox Series X",
        "price": 499.99,
        "description": "Microsoft's most powerful console with superior gaming capabilities.",
        "image": ["https://github.com/rmcarvajal/techpics/raw/main/xbox.png"],
        "category": "consoles",
      },
      {
        "id": 12,
        "title": "Retro Mini Console",
        "price": 69.99,
        "description": "A mini console loaded with classic games from the past.",
        "image": ["https://github.com/rmcarvajal/techpics/raw/main/mini.png"],
        "category": "consoles",
      }
];

// Obtener los elementos del carrito desde localStorage o inicializar como vacío
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

// Obtener referencia al contenedor del carrito y al total
const cartContainer = document.querySelector(".addition");
const totalContainer = document.querySelector(".checkout h4");

// Función para obtener un producto por ID
function getProductById(id) {
    return data.find(product => product.id === id);
}

// Función para actualizar el total del carrito
function updateTotal() {
    const total = cartItems.reduce((sum, item) => {
        const product = getProductById(item.id);
        return sum + product.price * item.quantity;
    }, 0);
    totalContainer.textContent = `TOTAL: $${total.toFixed(2)}`;
}

// Función para renderizar los elementos del carrito
function renderCart() {
    cartContainer.innerHTML = ""; // Limpiar el contenido existente para evitar duplicados

    cartItems.forEach(item => {
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
    saveCartToLocalStorage();
}

// Función para incrementar la cantidad de un producto en el carrito
function increaseQuantity(id) {
    const item = cartItems.find(item => item.id === id);
    if (item) {
        item.quantity += 1;
        renderCart();
    }
}

// Función para disminuir la cantidad de un producto en el carrito
function decreaseQuantity(id) {
    const item = cartItems.find(item => item.id === id);
    if (item && item.quantity > 1) {
        item.quantity -= 1;
    } else {
        removeFromCart(id);
    }
    renderCart();
}

// Función para eliminar un producto del carrito
function removeFromCart(id) {
    cartItems = cartItems.filter(item => item.id !== id);
    renderCart();
}

// Función para guardar el carrito en localStorage
function saveCartToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cartItems));
}

// Llamada inicial para mostrar el carrito
renderCart();

function loadCart() {
  // Verificar si hay un usuario logueado
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!loggedInUser) {
      alert("Debes iniciar sesión para ver tu carrito.");
      window.location.href = "login.html";
      return;
  }

  // Recuperar el carrito del usuario logueado
  let userCartKey = `cart_${loggedInUser.email}`;
  let cart = JSON.parse(localStorage.getItem(userCartKey)) || [];

  // Renderizar los productos en el carrito
  const cartContainer = document.getElementById("cartContainer");
  cartContainer.innerHTML = ""; // Limpiar el contenido previo

  if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Tu carrito está vacío.</p>";
  } else {
      cart.forEach(product => {
          const productElement = document.createElement("div");
          productElement.innerHTML = `
              <div>
                  <img src="${product.image}" alt="${product.title}" />
                  <h3>${product.title}</h3>
                  <p>Precio: $${product.price}</p>
                  <p>Cantidad: ${product.quantity}</p>
              </div>
          `;
          cartContainer.appendChild(productElement);
      });
  }
}

loadCart();

const cart = getCart();
console.log("Carrito actual:", cart);
