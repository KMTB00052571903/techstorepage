// Función para cargar los datos del usuario desde localStorage
function loadUserData() {
    const storedUserData = JSON.parse(localStorage.getItem("loggedInUser"));

    // Si hay un usuario logueado en localStorage, mostrar sus datos
    if (storedUserData) {
        document.querySelector(".Welcome-user h1").textContent = `Welcome, ${storedUserData.name.split(" ")[0]}`;
        document.getElementById('user-name').textContent = storedUserData.name;
        document.getElementById('user-email').textContent = storedUserData.email;
    } else {
        // Si no hay datos, redirigir a la página de login
        window.location.href = "login.html";
    }
}

// Función para actualizar los datos del usuario en localStorage
function updateUserInfo() {
    const newName = document.getElementById('edit-name').value;
    const newEmail = document.getElementById('edit-email').value;

    let updatedUserData = JSON.parse(localStorage.getItem("loggedInUser"));

    // Actualizar solo si hay un valor nuevo ingresado
    if (newName) updatedUserData.name = newName;
    if (newEmail) updatedUserData.email = newEmail;

    // Guardar los cambios en localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(updatedUserData));

    // Recargar los datos del usuario para reflejar los cambios
    loadUserData();

    // Ocultar los campos de edición después de la actualización
    document.querySelectorAll('.edit-input').forEach(input => input.style.display = 'none');
}

// Función para cerrar sesión
function logout() {
    // Eliminar los datos del usuario de localStorage
    localStorage.removeItem("loggedInUser");
    // Redirigir a la página de login
    window.location.href = "login.html";
}

// Eventos para cargar datos y logout
document.addEventListener("DOMContentLoaded", () => {
    loadUserData();
    // Configurar el botón de logout si existe en user.html
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) logoutButton.addEventListener("click", logout);
});
