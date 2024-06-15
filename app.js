import { fetchData } from "./utils/httpReq.js";

async function render() {
  const productsData = await fetchData();
  console.log(productsData);
}

document.addEventListener("DOMContentLoaded", render);
