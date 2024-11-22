// Verificar si el usuario está logueado al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    // Páginas que requieren protección (agrega las que necesites proteger)
    const protectedPages = ["/user.html"];

    // Verificar si la página actual es protegida
    const currentPath = window.location.pathname;

    if (!loggedInUser && protectedPages.includes(currentPath)) {
        // Redirigir al login si no hay sesión activa y la página está protegida
        window.location.href = "login.html";
    } else if (loggedInUser) {
        // Si hay sesión activa, mostrar el nombre del usuario
        const userDisplayElement = document.getElementById("user-display");
        if (userDisplayElement) {
            userDisplayElement.textContent = `Hola, ${loggedInUser.name}`;
        }
    }
});


// Función para obtener el carrito del usuario actual
function getCart() {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) return []; // Si no hay usuario logueado, devuelve un carrito vacío

    const userCarts = JSON.parse(localStorage.getItem("userCarts")) || {};
    return userCarts[loggedInUser.email] || []; // Devuelve el carrito del usuario o uno vacío
}

// Función para guardar el carrito del usuario actual
function saveCart(cart) {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) return;

    const userCarts = JSON.parse(localStorage.getItem("userCarts")) || {};
    userCarts[loggedInUser.email] = cart; // Asocia el carrito al email del usuario
    localStorage.setItem("userCarts", JSON.stringify(userCarts)); // Guarda los carritos
}

// Función para agregar un producto al carrito del usuario actual
function addToCart(product) {
    const cart = getCart(); // Obtiene el carrito actual del usuario
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity += 1; // Incrementa la cantidad si el producto ya está en el carrito
    } else {
        cart.push({ ...product, quantity: 1 }); // Agrega el producto con una cantidad inicial de 1
    }

    saveCart(cart); // Guarda el carrito actualizado
    alert("Producto agregado al carrito.");
}

// Función para cerrar sesión
function logout() {
    localStorage.removeItem("loggedInUser"); // Elimina la sesión activa
    alert("Has cerrado sesión.");
    window.location.href = "login.html"; // Redirige a la página de inicio de sesión
}


// Vincular el botón de logout al evento
document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            logout(); // Llama a la función logout al hacer clic
        });
    }
});
