import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
 const productElements = document.querySelectorAll(".product");
 productElements.forEach(product => {
    const priceAttribute = product.querySelector(".price");  
    const priceText = priceAttribute.innerText;

    product.setAttribute("data-price", priceText);
 })

});
