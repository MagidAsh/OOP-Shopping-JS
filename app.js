import Products from "./models/products.js";
import Cart from "./models/cart.js";
import { fetchData } from "./utils/httpReq.js";

const productsNode = document.getElementById("products");
const cartListNode = document.getElementById("cart-list");
const totalPriceNode = document
  .getElementById("total-price")
  .querySelector("span");

async function render() {
  const productsData = await fetchData();
  const cartInstance = new Cart(cartListNode, totalPriceNode);
  const productsInstance = new Products(
    productsNode,
    productsData,
    cartInstance
  );

  console.log(cartInstance);

  productsInstance.showProducts();

  console.log(productsInstance);
}

document.addEventListener("DOMContentLoaded", render);
