class Products {
  constructor(parent, products) {
    this.parent = parent;
    this.Products = products;
  }

  showProducts() {
    this.Products.forEach((product) => this.createCard(product));
  }

  createCard(data) {
    const cardEle = document.createElement("div");

    const img = document.createElement("img");

    img.src = data.image;
    img.alt = data.alt;

    cardEle.appendChild(img);

    const info = document.createElement("div");
    const productName = document.createElement("h3");
    const control = document.createElement("div");
    const price = document.createElement("span");
    const button = document.createElement("span");

    productName.innerText = data.name;
    price.innerText = `$ ${data.price}`;
    button.innerText = "+";

    control.append(price, button);
    info.append(productName, control);

    cardEle.appendChild(info);

    this.parent.appendChild(cardEle);
  }
}

export { Products };
