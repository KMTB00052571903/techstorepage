const params = new URLSearchParams(window.location.search)
const nameFromUrl = params.get("name")

function getProduct() {
    for(let i = 0; i < data.length; i++) {
        let map = data[i]
        if(map["title"] === nameFromUrl) {
            let product = new Product(map["id"], map["title"], map["price"], map["description"], map["image"], map["category"])
            return product
        }
    }
}

function renderProduct() {
    let product = getProduct()

    let h1Title = document.getElementById("title")
    h1Title.innerHTML = product.title

    let pDescription = document.getElementById("description")
    pDescription.innerHTML = product.description

    let h2Price = document.getElementById("price") 
    h2Price.innerHTML = "$ " + product.price

    let image = document.getElementById("image")
    image.src = product.image
}

renderProduct()