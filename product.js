class Product {
    constructor(id, title, price, description, image, category) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
        this.category = category;
    }

    cardHtml(pos) {
        return `
            <div class="product-item" onclick="productSelected(${pos})">
                <div class="product-display" onclick="productSelected(${pos})">
                    <div class="product-image">
                        <img src="${this.image}" alt="${this.title}" width="250" height="250">
                    </div>
                    <label>${this.category}</label>
                    <h1>${this.title}</h1>
                    <h2>$${this.price}</h2>
                    <button class="add-to-cart" data-id="${this.id}" data-title="${this.title}" data-price="${this.price}">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
    }
}

// Función para agregar al carrito
function addToCart(product) {
    // Definir loggedInUser dentro de la función
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    // Verificar si el usuario está logueado
    if (!loggedInUser) {
        console.error("No se encontró el usuario logueado.");
        return;
    }

    const userCartKey = `cart_${loggedInUser.email}`;
    const cart = JSON.parse(localStorage.getItem(userCartKey)) || [];

    // Verificar si el producto ya está en el carrito
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += 1; // Incrementar la cantidad si ya existe
    } else {
        // Agregar un nuevo producto al carrito
        cart.push({ ...product, quantity: 1 }); // Incluir todos los detalles del producto
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem(userCartKey, JSON.stringify(cart));
    alert(`${product.title} añadido al carrito`);
}

// Asegurarse de que la función productSelected también esté definida
function productSelected(pos) {
    let productAtPos = products[pos];
    window.location = "./detail.html?name=" + productAtPos.title;
}
