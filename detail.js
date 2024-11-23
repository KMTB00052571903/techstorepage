const params = new URLSearchParams(window.location.search);
const nameFromUrl = params.get("name");

function getProduct() {
    for (let i = 0; i < data.length; i++) {
        let map = data[i];
        if (map["title"] === nameFromUrl) {
            let product = new Product(map["id"], map["title"], map["price"], map["description"], map["image"], map["category"]);
            return product;
        }
    }
}

function renderProduct() {
    let product = getProduct();

    let h1Title = document.getElementById("title");
    h1Title.innerHTML = product.title;

    let pDescription = document.getElementById("description");
    pDescription.innerHTML = product.description;

    let h2Price = document.getElementById("price");
    h2Price.innerHTML = "$ " + product.price;

    let image = document.getElementById("image");
    image.src = product.image[0];

    // Add event listener to the "Add to cart" button
    const addToCartButton = document.querySelector(".sub-button");
    addToCartButton.addEventListener("click", () => addToCart(product));
}

function addToCart(product) {
    // Retrieve current cart from localStorage or initialize a new array if it doesn't exist
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product already exists in the cart
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1; // Increment quantity if the product already exists
    } else {
        cart.push({ ...product, quantity: 1 }); // Add product with initial quantity of 1
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Redirect to cart.html
    window.location.href = "cart.html";
}

renderProduct();
