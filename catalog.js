let products = [];

async function getProducts() {
    try {
        let response = await fetch("https://raw.githubusercontent.com/KMTB00052571903/techstorepage/refs/heads/main/data.json");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let data = await response.json();
        console.log(data);
        parseDataToProducts(data); // Pasa los datos correctamente
    } catch (error) {
        console.error("Error al obtener los productos:", error);
    }
}



function parseDataToProducts(data) { // Asegúrate de que la función reciba "data"
    products = data.map(map => new Product(map.id, map.title, map.price, map.description, map.image[0], map.category)); // Correcto acceso a la imagen
    renderAllProducts();
}



// Remover solo los botones con texto "Add to Cart"
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
      if (button.textContent.trim() === "Add to Cart") {
        button.remove();
      }
    });
  });
  

function renderProduct() {
    let product = getProduct();

    let h1Title = document.getElementById("title");
    h1Title.innerHTML = product.title;

    let pDescription = document.getElementById("description");
    pDescription.innerHTML = product.description;

    let h2Price = document.getElementById("price");
    h2Price.innerHTML = "$ " + product.price;

    let image = document.getElementById("image");
    image.src = product.image[0]; }


function renderAllProducts() {
    let container = document.getElementById("products"); // Mantén "products" como tu contenedor
    if (!container) {
        console.error("No se encontró el contenedor de productos");
        return;
    }

    container.innerHTML = ''; // Limpiar el contenedor antes de renderizar
    products.forEach((product, index) => {
        container.innerHTML += product.cardHtml(index);
    });

}

function productSelected(pos) {
    let productAtPos = products[pos];
    window.location = "./detail.html?name=" + productAtPos.title;
}

getProducts();
