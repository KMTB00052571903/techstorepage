let products = []
function parseDataToProducts() {
    for(let i = 0; i < data.length; i++) {
        let map = data[i]
        let product = new Product(map["id"], map["title"], map["price"], map["description"], map["image"], map["category"])
        products.push(product)
    }
}

function renderAllProducts() {
    let container = document.getElementById("products")
    for(let i = 0; i < products.length; i++) {
        let product = products[i]
        container.innerHTML += product.cardHtml(i)
    }
}

function productSelected(pos) {
    let productAtPos = products[pos]
    window.location = "./detail.html?name=" + productAtPos.title
}

parseDataToProducts()
renderAllProducts()