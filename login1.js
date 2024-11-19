// Simulación de una base de datos de usuarios
const usersDB = {
    "mariac@gmail.com": "taqueso12" // Ejemplo de un usuario registrado
};

// Función de login
function login() {
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificar si el usuario está registrado en usersDB
    if (email in usersDB) {
        if (usersDB[email] === password) {
            // Guardar datos del usuario en localStorage al iniciar sesión
            const userData = { name: "Rosa M", email: email };
            localStorage.setItem("loggedInUser", JSON.stringify(userData));

            // Redirigir a la página del usuario
            window.location.href = "user.html";
        } else {
            alert("Contraseña incorrecta. Inténtalo de nuevo.");
        }
    } else {
        if (confirm("Esta cuenta no existe. ¿Deseas crear una cuenta nueva?")) {
            window.location.href = "signup.html";
        }
    }
}

// Añadir evento de submit al formulario de login para ejecutar la función de login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    login();
});
