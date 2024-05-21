import { productosAPI } from "../JS/productosAPI.js";

const formulario = document.querySelector("[data-formulario]");
const borrar = document.querySelector(".btn-clear");

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