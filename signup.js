

console.log('login.js is loaded');  // Si ves este mensaje en la consola del navegador, significa que el archivo se está cargando correctamente.




// Seleccionar los elementos del formulario
const form = document.querySelector("form");
const passwordInput = form.querySelector('input[type="password"]');
const confirmPasswordInput = form.querySelector('input[placeholder="Confirm password"]');
const togglePasswordIcons = form.querySelectorAll(".toggle-password");

// Mostrar/Ocultar contraseña
togglePasswordIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // Determina si el campo de entrada es el de contraseña o confirmación
        const input = icon.previousElementSibling;
        if (input.type === "password") {
            input.type = "text";
            icon.classList.add("fa-eye-slash"); // Cambia el ícono para indicar que la contraseña es visible
        } else {
            input.type = "password";
            icon.classList.remove("fa-eye-slash"); // Cambia el ícono para indicar que la contraseña está oculta
        }
    });
});

// Validar que las contraseñas coincidan al enviar el formulario
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío inmediato del formulario

    if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Passwords do not match. Please try again.");
    } else {
        alert("Account created successfully!");
        // Aquí puedes redirigir a la página principal o de inicio de sesión
        window.location.href = "user.html"; // Cambia "main.html" a la página de destino
    }
});
