let products = []
<<<<<<< HEAD
=======

async function getProducts() {
    let response = await fetch("https://raw.githubusercontent.com/KMTB00052571903/techstorepage/refs/heads/main/data.json")
    let data = await response.json()
    console.log(data)
    parseDataToProducts(data)
}

>>>>>>> ec81262f60a1a8e9c013bd464f695ac93e398693
function parseDataToProducts() {
    for(let i = 0; i < data.length; i++) {
        let map = data[i]
        let product = new Product(map["id"], map["title"], map["price"], map["description"], map["image"], map["category"])
        products.push(product)
    }
<<<<<<< HEAD
=======
    renderAllProducts()
>>>>>>> ec81262f60a1a8e9c013bd464f695ac93e398693
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

<<<<<<< HEAD
parseDataToProducts()
renderAllProducts()
=======


getProducts()
>>>>>>> ec81262f60a1a8e9c013bd464f695ac93e398693
