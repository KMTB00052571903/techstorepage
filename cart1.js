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
        itemElement.classList.add("cart-item");  // Cambiado a "cart-item" para coincidir con tu CSS
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
