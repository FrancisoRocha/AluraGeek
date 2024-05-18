//SOLICITUD AL ENDPOINT, PARA RECIBIR DATOS Y CONVERTIRLOS AL JSON PARA DESPUES SER DEVUELTOS  
async function listarProductos (){
    const conexion = await fetch ("http://localhost:3001/productos",{
        method: "GET",
        headers:{
            "content-type": "application/json"
        }
    });
    const conexionConvertida = await conexion.json();

    //console.log(conexion)
    //console.log(conexionConvertida)

    return conexionConvertida;
};

async function crearProducto (nombre,precio,imagen){
    const conexion = await fetch ("http://localhost:3001/productos",{
    method: "POST", // ENVIAR DATOS AL SERVIDOR
    headers:{
        "content-type": "application/json" // CONEVERSION DE UN OBJETO JS A UNA CADENA JSON
        },
        body:JSON.stringify({ // CONEVERSION DE UN OBJETO JS A CADENA JSON
            nombre:nombre,
            precio:`${precio} USD`,
            imagen:imagen
        })
    });
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
};

//CREACION DEL METODOS DELETE PARA BORRAR PRODUCTO DEL JSON

async function borrarProducto (productId){
    const conexion = await fetch(`http://localhost:3001/productos/${productId}`,{
        method: "DELETE",
        headers:{
            "content-type": "application/json" 
        }
    });
    if(!conexion.ok){
        throw new Error('Error al borrar el producto');
    }

    const conexionConvertida = await conexion.json();

    return conexionConvertida;
};

export const productosAPI = {
    listarProductos, crearProducto, borrarProducto
};