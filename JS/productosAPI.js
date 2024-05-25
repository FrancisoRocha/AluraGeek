//SOLICITUD AL ENDPOINT, PARA RECIBIR DATOS Y CONVERTIRLOS AL JSON PARA DESPUES SER DEVUELTOS  
async function listarProductos() {
    const conexion = await fetch("https://fake-api-umber-ten.vercel.app/productos", {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    });
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
};

async function crearProducto(nombre, precio, imagen) {
    const conexion = await fetch("https://fake-api-umber-ten.vercel.app/productos", {
        method: "POST", // ENVIAR DATOS AL SERVIDOR
        headers: {
            "content-type": "application/json" // CONEVERSION DE UN OBJETO JS A UNA CADENA JSON
        },
        body: JSON.stringify({ // CONEVERSION DE UN OBJETO JS A CADENA JSON
            nombre: nombre,
            precio: `${precio} USD`,
            imagen: imagen
        })
    });
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
};
//FUNCION PARA BORRAR EL PRODUCTOR DE UI Y DEL JSON
async function eliminarProducto(id){
    try{
        const conexion = await fetch(`https://fake-api-umber-ten.vercel.app/productos/${id}`,{
            method: "DELETE",
            headers: {
                "content-type": "application/json" // CONEVERSION DE UN OBJETO JS A UNA CADENA JSON
            },
        });
        if(!conexion.ok){
            throw new Error("Error en la solicitud")
        }
    }catch (error){
        console.error("Error al eliminar el producto del servidor: ", error);
    }
}

export const productosAPI = {
    listarProductos, crearProducto, eliminarProducto
};