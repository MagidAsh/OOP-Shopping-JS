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

    const imgEle = this.productImg(data);
    const infoEle = this.productInfo(data);

    cardEle.innerHTML = imgEle;

    cardEle.innerHTML += infoEle;

    this.parent.appendChild(cardEle);
  }

  productImg(data) {
    const { image, alt } = data;

    const imgJSX = `<img src=${image} alt=${alt}/>`;

    return imgJSX;
  }

  productInfo(data) {
    // const info = document.createElement("div");
    // const productName = document.createElement("h3");
    // const control = document.createElement("div");
    // const price = document.createElement("span");
    // const button = document.createElement("span");

    // productName.innerText = data.name;
    // price.innerText = `$ ${data.price}`;
    // button.innerText = "+";

    // control.append(price, button);
    // info.append(productName, control);

    const { id, name, price } = data;

    const infoJSX = `
    <div>
        <h3>${name}</h3>
        <div>
            <span>$ ${price}</span>
            <button data-id=${id}>+</button>
        </div>
    </div>`;

    return infoJSX;
  }
}

export { Products };
