let products = [];

async function getProducts() {
    try {
        let response = await fetch("https://raw.githubusercontent.com/KMTB00052571903/techstorepage/4f8749e4c7fa2500c12abfde51f44128e49c1748/data.json");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let data = await response.json();
        console.log(data);
        parseDataToProducts(data); // Pasa los datos correctamente
    } catch (error) {
        console.error("Error al obtener los productos:", error);
    }
}

function addToCart(productId) {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    // Cargar el carrito del usuario
    const userCartKey = `cart_${loggedInUser.email}`;
    const cart = JSON.parse(localStorage.getItem(userCartKey)) || [];

    // Obtener el producto completo usando el ID
    const productToAdd = products.find(product => product.id === productId);

    // Verificar si el producto ya está en el carrito
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1; // Incrementar la cantidad si ya existe
    } else {
        // Agregar un nuevo producto al carrito
        cart.push({ ...productToAdd, quantity: 1 }); // Incluir todos los detalles del producto
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem(userCartKey, JSON.stringify(cart));
    alert("Producto agregado al carrito.");
}

function parseDataToProducts(data) { // Asegúrate de que la función reciba "data"
    products = data.map(map => new Product(map.id, map.title, map.price, map.description, map.image[0], map.category)); // Correcto acceso a la imagen
    renderAllProducts();
}

function renderAllProducts() {
    let container = document.getElementById("products"); // Mantén "products" como tu contenedor
    if (!container) {
        console.error("No se encontró el contenedor de productos");
        return;
    }

    container.innerHTML = ''; // Limpiar el contenedor antes de renderizar
    products.forEach((product, index) => {
        container.innerHTML += product.cardHtml(index);
    });

    // Añadir eventos para los botones de agregar al carrito
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const product = {
                id: event.target.dataset.id,
                title: event.target.dataset.title,
                price: parseFloat(event.target.dataset.price)
            };
            addToCart(product); // Llama a la función definida en product.js
            alert(`${product.title} añadido al carrito`);
        });
    });
}

function productSelected(pos) {
    let productAtPos = products[pos];
    window.location = "./detail.html?name=" + productAtPos.title;
}

getProducts();
