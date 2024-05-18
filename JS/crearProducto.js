import { productosAPI } from "../JS/productosAPI.js";

const formulario = document.querySelector("[data-formulario]");
const borrar = document.querySelector(".btn-clear");
const borrarCard = document.querySelectorAll(".material-symbols-outlined");

async function crearProducto (evento){
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    await productosAPI.crearProducto(nombre,precio,imagen);
};

formulario.addEventListener("submit", evento => crearProducto(evento));

function borrarForm (){
    document.querySelector("[data-nombre]").value = "";
    document.querySelector("[data-precio]").value = "";
    document.querySelector("[data-imagen]").value = "";

}
borrar.addEventListener("click", (e) =>{
    e.preventDefault();
    borrarForm();
})


// Función para eliminar un producto de la UI y la API

async function cardDelete (evento){
    const card = evento.target.closest('.cards');
    const productId = card.dataset.id;

    if(productId){
        try{
            await productosAPI.borrarProducto(productosAPI);
            card.remove();
        }catch(error){
            console.error('Error al borrar el producto:', error);
        }
    }
};

// Agregar evento a cada botón de eliminar

borrarCard.addEventListener("click", (e) =>{
    e.preventDefault();
    cardDelete();
})