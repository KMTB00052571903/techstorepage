// Simulación de los datos de usuario (podrían venir de una base de datos en un entorno real)
const userData = {
    name: "Rosa M",
    email: "rosam@mail.com"
};

// Función para cargar los datos del usuario y mostrar el nombre en la bienvenida
function loadUserData() {
    // Cambia el nombre y el correo electrónico en la página
    document.querySelector(".Welcome-user h1").textContent = `Welcome, ${userData.name.split(" ")[0]}`;
    document.getElementById('user-name').textContent = userData.name;
    document.getElementById('user-email').textContent = userData.email;
}

// Función para actualizar los datos del usuario
function updateUserInfo() {
    const newName = document.getElementById('edit-name').value;
    const newEmail = document.getElementById('edit-email').value;

    if (newName) userData.name = newName;
    if (newEmail) userData.email = newEmail;

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

// Eventos de clic para mostrar/ocultar las secciones de Settings y Wish List
document.addEventListener("DOMContentLoaded", () => {
    loadUserData();
    // Agregar eventos a cada título para alternar su visualización
    document.querySelector(".info h3:nth-of-type(1)").addEventListener("click", () => toggleSection("settings"));
    document.querySelector(".info h3:nth-of-type(2)").addEventListener("click", () => toggleSection("wishlist"));
});
