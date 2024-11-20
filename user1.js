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

// Función para actualizar los datos del usuario
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

// Función para alternar la visualización de las secciones de Configuración y Lista de Deseos
function toggleSection(section) {
    const sectionContent = document.querySelector(`.${section}`);
    if (section === 'settings') {
        document.querySelectorAll('.edit-input').forEach(input => {
            input.style.display = input.style.display === 'none' ? 'block' : 'none';
        });
    } else {
        if (sectionContent.style.display === "none" || !sectionContent.style.display) {
            sectionContent.style.display = "block";
        } else {
            sectionContent.style.display = "none";
        }
    }
}

// Función para cerrar sesión
function logout() {
    // Eliminar los datos del usuario de localStorage
    localStorage.removeItem("loggedInUser");
    // Redirigir a la página de login
    window.location.href = "login.html";
}

// Cargar los datos del usuario y configurar el botón de logout
document.addEventListener("DOMContentLoaded", () => {
    loadUserData();

    // Agregar eventos a cada título para alternar su visualización
    document.querySelector(".info h3:nth-of-type(1)").addEventListener("click", () => toggleSection("settings"));
    document.querySelector(".info h3:nth-of-type(2)").addEventListener("click", () => toggleSection("wishlist"));

    // Configurar el botón de logout si existe en user.html
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) logoutButton.addEventListener("click", logout);
});
