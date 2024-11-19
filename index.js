// index.js

document.addEventListener('DOMContentLoaded', () => {
    // Manejar clic en el botón "Learn more"
    const learnMoreButton = document.querySelector('.learn-more');
    learnMoreButton.addEventListener('click', (e) => {
        e.preventDefault(); // Evitar que el enlace navegue
        alert('¡Pronto más información sobre nuestra oferta!');
    });

    // Función para manejar el carrito de compras
    const cartIcon = document.querySelector('.fas.fa-shopping-cart');
    cartIcon.addEventListener('click', () => {
        alert('¡Has hecho clic en el carrito de compras!');
    });
    
    // Agregar más eventos según sea necesario
});



