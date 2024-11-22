console.log("login.js is loaded");

// Función de login
function login() {
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validar los valores del formulario
    if (email && password) {
        // Verificar si el usuario está registrado en localStorage
        const users = JSON.parse(localStorage.getItem("users")) || {}; // Recuperar todos los usuarios

        if (users[email] && users[email].password === password) {
            // Guardar datos del usuario logueado en localStorage
            const loggedInUser = {
                name: users[email].name,
                email: email,
            };
            localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

            // Crear un carrito vacío si no existe para este usuario
            let userCartKey = `cart_${email}`;
            if (!localStorage.getItem(userCartKey)) {
                localStorage.setItem(userCartKey, JSON.stringify([]));
            }

            // Redirigir a la página de catálogo
            alert("Inicio de sesión exitoso.");
            window.location.href = "catalog.html";
        } else {
            alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
        }
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

// Mostrar/Ocultar contraseña
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".toggle-password").addEventListener("click", function () {
        const passwordInput = this.previousElementSibling; // Seleccionar el campo de entrada de la contraseña
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            this.classList.remove("fa-eye");
            this.classList.add("fa-eye-slash");
        } else {
            passwordInput.type = "password";
            this.classList.remove("fa-eye-slash");
            this.classList.add("fa-eye");
        }
    });

    // Verificar si hay una sesión activa al cargar la página
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
        alert(`Bienvenido nuevamente, ${loggedInUser.name}`);
        window.location.href = "catalog.html";
    }
});

// Añadir evento al formulario de login
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar envío del formulario
    login();
});

// Función de cerrar sesión (puede ser llamada desde un botón en otras páginas)
function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Has cerrado sesión.");
    window.location.href = "login.html";
}
