import { productosAPI } from "../JS/productosAPI.js";

const productsCard = document.querySelector("[data-card]");

export default function crearCard(imagen, nombre, precio) {
    
    const imagenProduct = document.createElement("li");
    imagenProduct.classList.add("target_cards");
    
    imagenProduct.innerHTML =`<img src="${imagen}" alt="imagen_producto" class="img_product">
    <p class="text_product">${nombre}</p>
    <p class="price_product">$${precio}</p>
    <button class="material-symbols-outlined">delete</button>`
    
    return imagenProduct;
    
};

async function listarProductos() {
    const listApi = await productosAPI.listarProductos();
    listApi.forEach(card => productsCard.appendChild(crearCard(card.imagen, card.nombre, card.precio)));
};

listarProductos();

