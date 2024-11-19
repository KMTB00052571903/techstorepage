// Seleccionar el formulario y añadir evento de submit
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario para procesarlo en JavaScript

    // Obtener los valores del formulario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validar los valores de usuario y contraseña (esto es solo un ejemplo)
    if (username && password) {
        // Simular redireccionamiento a la "Main Page" después del login exitoso
        window.location.href = "user.html"; // Cambia "main.html" al archivo de la página principal
    } else {
        alert("Please enter both username and password.");
    }
});

function login() {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    if(email !== "", password !== "") {
        if(email === "mariac@gmail.com" && password === "taqueso12") {
            window.location = "user.html"
        } else {
            alert("Usuario o contraseña incorrecto")
        }
    } else {
        alert("Por favor complete los campos para continuar")
    }
}



document.addEventListener('DOMContentLoaded', function () {    // Espera a que el DOM esté completamente cargado antes de ejecutar el script
    
    document.querySelector('.toggle-password').addEventListener('click', function () {   // Selecciona el elemento con la clase 'toggle-password' y agrega un evento 'click'
        
        const passwordInput = this.previousElementSibling;  // Selecciona el elemento anterior al ícono, que es el campo de entrada de la contraseña
        if (passwordInput.type === 'password') {    // Verifica el tipo de entrada del campo de contraseña
            passwordInput.type = 'text';            // Si el tipo es 'password', cámbialo a 'text' para mostrar la contraseña
            this.classList.remove('fa-eye');        // Cambia la clase del ícono para mostrar el ícono de 'ojo cerrado'
            this.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';           // Si el tipo es 'text', cámbialo a 'password' para ocultar la contraseña
            this.classList.remove('fa-eye-slash');     // Cambia la clase del ícono para mostrar el ícono de 'ojo abierto'
            this.classList.add('fa-eye');
        }
    });
});

console.log('login.js is loaded');  //Si ves este mensaje en la consola del navegador, significa que el archivo se está cargando correctamente.






// Simulación de una base de datos de usuarios
const usersDB = {
    "mariac@gmail.com": "taqueso12" // Ejemplo de un usuario registrado
};

// Seleccionar el formulario y añadir evento de submit
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario para procesarlo en JavaScript

    // Obtener los valores del formulario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificar si el usuario está registrado
    if (username in usersDB) {
        // Validar contraseña
        if (usersDB[username] === password) {
            // Login exitoso, redireccionar a la página principal
            window.location.href = "user.html";
        } else {
            alert("Incorrect password. Please try again.");
        }
    } else {
        // Usuario no registrado
        if (confirm("This account doesn't exist. Would you like to create one?")) {
            window.location.href = "signup.html"; // Redirige a la página de registro
        }
    }
});
