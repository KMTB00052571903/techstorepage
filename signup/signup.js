document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los elementos con la clase 'toggle-password'
    const togglePasswordIcons = document.querySelectorAll('.toggle-password');
    
    // Agrega un evento 'click' a cada ícono
    togglePasswordIcons.forEach(function(icon) {
        icon.addEventListener('click', function () {
            // Selecciona el elemento anterior al ícono, que es el campo de entrada de la contraseña
            const passwordInput = this.previousElementSibling;
            if (passwordInput.type === 'password') {
                // Si el tipo es 'password', cámbialo a 'text' para mostrar la contraseña
                passwordInput.type = 'text';
                // Cambia la clase del ícono para mostrar el ícono de 'ojo cerrado'
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
            } else {
                // Si el tipo es 'text', cámbialo a 'password' para ocultar la contraseña
                passwordInput.type = 'password';
                // Cambia la clase del ícono para mostrar el ícono de 'ojo abierto'
                this.classList.remove('fa-eye-slash');
                this.classList.add('fa-eye');
            }
        });
    });
});

console.log('login.js is loaded');  // Si ves este mensaje en la consola del navegador, significa que el archivo se está cargando correctamente.





