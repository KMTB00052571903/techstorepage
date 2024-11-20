const params = new URLSearchParams(window.location.search);
const nameFromUrl = params.get("name");

function getProduct() {
    // Suponiendo que 'data' es un array global que contiene productos
    for (let i = 0; i < data.length; i++) {
        let map = data[i];
        if (map["title"] === nameFromUrl) {
            // Creación del producto con la información de 'map'
            let product = new Product(map["id"], map["title"], map["price"], map["description"], map["image"], map["category"]);
            return product;
        }
    }
    return null; // Si no se encuentra el producto, retorna null
}

function renderProduct() {
    // Llamamos a getProduct() y verificamos si se devuelve un producto
    let product = getProduct();

    if (product) {
        let h1Title = document.getElementById("title");
        h1Title.innerHTML = product.title;

        let pDescription = document.getElementById("description");
        pDescription.innerHTML = product.description;

        let h2Price = document.getElementById("price");
        h2Price.innerHTML = "$ " + product.price;

        let image = document.getElementById("image");
        image.src = product.image; // Asegúrate de que product.image sea una URL válida
    } else {
        console.error("Producto no encontrado.");
    }

    // Agregar el evento al botón "Añadir al carrito"
    const addToCartButton = document.querySelector(".sub-button");
    addToCartButton.addEventListener("click", () => addToCart(product));
}

function addToCart(product) {
    // Recuperar el carrito actual de localStorage o inicializar uno vacío
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Verificar si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1; // Incrementar cantidad si el producto ya existe
    } else {
        cart.push({ ...product, quantity: 1 }); // Agregar el producto con cantidad 1
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Redirigir a la página del carrito
    window.location.href = "cart.html";
}

// Llamar a renderProduct() para mostrar el producto
renderProduct();
