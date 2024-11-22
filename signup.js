console.log("signup.js is loaded"); // Confirmación de que el archivo se cargó

document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar los campos del formulario por sus IDs
    const signupForm = document.getElementById("signupForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    // Mostrar un error si no encuentra los campos
    if (!nameInput || !emailInput) {
        console.error("No se encontraron los campos de nombre o email.");
        return; // Detener el script si no encuentra los campos
    }

    // Alternar visibilidad de contraseñas
    const togglePasswordIcons = document.querySelectorAll(".toggle-password");
    togglePasswordIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            const input = icon.previousElementSibling; // Seleccionar el input asociado al icono
            if (input.type === "password") {
                input.type = "text"; // Cambiar a texto para mostrar la contraseña
                icon.classList.add("fa-eye-slash");
            } else {
                input.type = "password"; // Cambiar a contraseña para ocultar
                icon.classList.remove("fa-eye-slash");
            }
        });
    });

    // Validar y guardar los datos del formulario
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Validar contraseñas
        if (passwordInput.value !== confirmPasswordInput.value) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        // Obtener la lista de usuarios registrados o crear un objeto vacío si no existe
        let users = JSON.parse(localStorage.getItem("users")) || {};

        // Verificar si el correo ya está registrado
        if (users[emailInput.value]) {
            alert("Este correo ya está registrado. Intenta con otro.");
            return;
        }

        // Guardar los datos del nuevo usuario
        const newUser = {
            name: nameInput.value.trim(),
            password: passwordInput.value.trim()
        };
        users[emailInput.value.trim()] = newUser; // Almacenar el usuario con el correo como clave
        localStorage.setItem("users", JSON.stringify(users)); // Guardar en localStorage

        alert("Account created successfully!");
        window.location.href = "login.html"; // Redirigir al login
    });
});
