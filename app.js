import { Products } from "./models/products.js";
import { fetchData } from "./utils/httpReq.js";

const productsNode = document.getElementById("products");

async function render() {
  const productsData = await fetchData();
  const ProductsInstance = new Products(productsNode, productsData);
  ProductsInstance.showProducts();

  console.log(ProductsInstance);
}

document.addEventListener("DOMContentLoaded", render);
