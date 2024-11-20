// Función de login
function login() {
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validar los valores del formulario
    if (email && password) {
        // Recuperar usuarios registrados desde localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Buscar el usuario en el arreglo
        const user = users.find(u => u.email === email);

        if (user && user.password === password) {
            // Guardar datos del usuario logueado en localStorage
            const loggedInUser = {
                name: user.name,
                email: user.email,
            };
            localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

            // Redirigir a la página de usuario
            window.location.href = "user.html";
        } else {
            alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
        }
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

// Mostrar/Ocultar contraseña
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.toggle-password').addEventListener('click', function () {
        const passwordInput = this.previousElementSibling; // Seleccionar el campo de entrada de la contraseña
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            this.classList.remove('fa-eye');
            this.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            this.classList.remove('fa-eye-slash');
            this.classList.add('fa-eye');
        }
    });
});

// Añadir evento al formulario de login
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar envío del formulario
    login();
});

console.log('login.js is loaded'); // Mensaje de verificación en consola
