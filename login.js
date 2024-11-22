console.log("login.js is loaded");

// Función de login
function login() {
    const email = document.getElementById("username").value.trim(); // Captura el email
    const password = document.getElementById("password").value.trim(); // Captura la contraseña

    // Validar los valores del formulario
    if (email && password) {
        // Recuperar usuarios registrados desde localStorage
        const users = JSON.parse(localStorage.getItem("users")) || {}; // Recuperar todos los usuarios como objeto

        // Verificar si existe un usuario con el email ingresado
        const user = users[email]; // Intenta recuperar al usuario por el email como clave

        if (user && user.password === password) {
            // Usuario encontrado y contraseña correcta
            const loggedInUser = {
                name: user.name,
                email: email,
            };

            // Guardar el usuario logueado en localStorage
            localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

            // Crear un carrito vacío si no existe para este usuario
            const userCartKey = `cart_${email}`;
            if (!localStorage.getItem(userCartKey)) {
                localStorage.setItem(userCartKey, JSON.stringify([]));
            }

            // Redirigir a la página de usuario
            alert(`Inicio de sesión exitoso. ¡Bienvenido, ${user.name}!`);
            window.location.href = "user.html"; // Redirigir a la página de usuario
        } else {
            alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
        }
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

// Mostrar/Ocultar contraseña
document.addEventListener("DOMContentLoaded", function () {
    const togglePasswordIcon = document.querySelector(".toggle-password");
    if (togglePasswordIcon) {
        togglePasswordIcon.addEventListener("click", function () {
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
    }

    // Verificar si hay una sesión activa al cargar la página
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
        alert(`Bienvenido nuevamente, ${loggedInUser.name}`);
        window.location.href = "catalog.html"; // Redirigir al catálogo si ya hay sesión activa
    }
});

// Añadir evento al formulario de login
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario
    login(); // Ejecutar la función login
});
