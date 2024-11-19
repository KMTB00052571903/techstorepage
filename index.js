<<<<<<< HEAD
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



=======
// Lista de productos para la sección "Recently added"
const recentlyAddedProducts = [
    { image: 'https://github.com/rmcarvajal/techpics/raw/main/ps5.png', name: 'Playstation 5', price: 'USD $450' },
    { image: 'https://raw.githubusercontent.com/rmcarvajal/techpics/main/xbox.png', name: 'Xbox Series X', price: 'USD $500' },
    { image: 'https://raw.githubusercontent.com/rmcarvajal/techpics/main/switch.png', name: 'Nintendo Switch', price: 'USD $299.99' }
];

// Lista de productos para la sección "Best Sellers"
const bestSellersProducts = [
    { image: 'https://raw.githubusercontent.com/rmcarvajal/techpics/main/pacman%20cabinet.jpg', name: 'Pac Man Cabinet', price: 'USD $349.99' },
    { image: 'https://raw.githubusercontent.com/rmcarvajal/techpics/main/tlz%20cart.jpg', name: 'The Legend of Zelda', price: 'USD $59.99' },
    { image: 'https://raw.githubusercontent.com/rmcarvajal/techpics/main/mini.png', name: 'Retro Mini Console', price: 'USD $69.99' }
];

// Variables para almacenar el índice actual en cada sección
let currentRecentlyAddedIndex = 0;
let currentBestSellersIndex = 0;

// Función para actualizar la sección "Recently Added"
function updateRecentlyAddedProduct() {
    const product = recentlyAddedProducts[currentRecentlyAddedIndex];
    document.querySelector('.product-container .product-image').src = product.image;
    document.querySelector('.product-container .product-name').textContent = product.name;
    document.querySelector('.product-container .product-price').textContent = product.price;
}

// Función para actualizar la sección "Best Sellers"
function updateBestSellersProduct() {
    const product = bestSellersProducts[currentBestSellersIndex];
    document.querySelector('.sellers-container .product-image').src = product.image;
    document.querySelector('.sellers-container .product-name').textContent = product.name;
    document.querySelector('.sellers-container .product-price').textContent = product.price;
}

// Event listener para la flecha izquierda en "Recently Added"
document.querySelector('.product-container .triangle-left img').addEventListener('click', () => {
    currentRecentlyAddedIndex = (currentRecentlyAddedIndex - 1 + recentlyAddedProducts.length) % recentlyAddedProducts.length;
    updateRecentlyAddedProduct();
});

// Event listener para la flecha derecha en "Recently Added"
document.querySelector('.product-container .triangle-right img').addEventListener('click', () => {
    currentRecentlyAddedIndex = (currentRecentlyAddedIndex + 1) % recentlyAddedProducts.length;
    updateRecentlyAddedProduct();
});

// Event listener para la flecha izquierda en "Best Sellers"
document.querySelector('.sellers-container .triangle-left img').addEventListener('click', () => {
    currentBestSellersIndex = (currentBestSellersIndex - 1 + bestSellersProducts.length) % bestSellersProducts.length;
    updateBestSellersProduct();
});

// Event listener para la flecha derecha en "Best Sellers"
document.querySelector('.sellers-container .triangle-right img').addEventListener('click', () => {
    currentBestSellersIndex = (currentBestSellersIndex + 1) % bestSellersProducts.length;
    updateBestSellersProduct();
});

// Inicializar con el primer producto de cada sección
updateRecentlyAddedProduct();
updateBestSellersProduct();
>>>>>>> ec81262f60a1a8e9c013bd464f695ac93e398693
