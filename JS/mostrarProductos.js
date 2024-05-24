import { productosAPI } from "../JS/productosAPI.js";

const productsCard = document.querySelector("[data-card]");

export default function crearCard(imagen, nombre, precio,id) {

    const imagenProduct = document.createElement("li");
    imagenProduct.classList.add("target_cards");

    imagenProduct.innerHTML = `<img src="${imagen}" alt="imagen_producto" class="img_product">
    <p class="text_product">${nombre}</p>
    <p class="price_product">$${precio}</p>
    <button class="material-symbols-outlined" data-id="${id}">delete</button>`;

    //BORRA CARD
    const iconBorrar = imagenProduct.querySelector("[data-id]");

    iconBorrar.addEventListener("click", (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed){
                await productosAPI.eliminarProducto(id);
                imagenProduct.remove();
                Swal.fire(
                    "Deleted!",
                    "Your file has been deleted.",
                    "success"
                );
            }
        })
    })

    return imagenProduct;

};

async function listarProductos() {
    const listApi = await productosAPI.listarProductos();
    listApi.forEach(card => productsCard.appendChild(crearCard(card.imagen, card.nombre, card.precio)));
};

listarProductos();

