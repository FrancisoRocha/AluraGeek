import { productosAPI } from "../JS/productosAPI.js";

const productsCard = document.querySelector("[data-card]");

export default function crearCard(imagen,nombre,precio) {

    const imagenProduct = document.createElement("li");
    imagenProduct.className = "target_cards";

    imagenProduct.innerHTML = `<img src="${imagen}" alt="imagen_producto" class="img_product">
        <p class="text_product">${nombre}</p>
        <p class="price_product">$${precio}</p>
        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="30px"
        ill="#000000" class="material-symbols-outlined">
        <path d="M261-120q-24.75 0-42.37-17.63Q201-155.25 201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z" />
        </svg>`
    
    return imagenProduct;

};

async function listarProductos (){
    const listApi = await productosAPI.listarProductos();
    listApi.forEach(element => productsCard.appendChild(crearCard(element.imagen, element.nombre, element.precio)))
}

listarProductos();