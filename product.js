class Product {
    constructor(id, title, price, description, image, category) {
        this.id = id
        this.title = title
        this.price = price
        this.description = description
        this.image = image
        this.category = category
    }

    cardHtml(pos) {
        return `
            <div class="product-item" onclick="productSelected(${pos})">
    <div class="product-display" onclick="productSelected(${pos})>
    <div class="product-image">
        <img src="${this.image[0]}" alt="" width="250" height="250">
    </div>
    <label>${this.category}</label>
    <h1>${this.title}</h1>
    <h2>$ ${this.price}</h2>
    </div>
            </div>
        `
    }
    


}