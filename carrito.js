//MENU CARRITO
const carrito=document.querySelector("#carrito");
const contenedorCarrito=document.querySelector("#lista-carrito tbody");
const listaProductos=document.querySelector("#lista-productos");
const botonVaciar=document.querySelector("#vaciar-carrito");
let articulosCarrito=[];
cargarEventoListeners();
function cargarEventoListeners(e){
    //Cuando agregar us curso presionando "Agregar carrito"
    listaProductos.addEventListener("click",agregarProcucto);

}
//funciones
function agregarProcucto(e){
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")){//si el elemento que estamos presionando debe contener la clase agregar-carrito
        console.log(e.target.parentElement.parentElement);//muestra en consola que elemento estamos apretando   
        const productoSeleccionado=e.target.parentElement.parentElement;
        leerDatosProcucto(productoSeleccionado);//le enviamos el div padre del boton seleccionado para acceder a los otros componentes
    
    }
}

//leer contenido del elemento presionado
function leerDatosProcucto(producto){
    const infoProducto={
        imagen:producto.querySelector("img").src,
        titulo:producto.querySelector("h5").textContent,
        precio:producto.querySelector(".price").textContent,
        id:producto.querySelector("button").getAttribute("data-id"),
        cantidad:1
    }
    //agregar eleementos al arreglo de carrito
    articulosCarrito=[...articulosCarrito,infoProducto]
    carritoHTML();
}

//Muestra el carrito de compras en el html
function carritoHTML(){
    //limpiar el HTML
    limpiarHTML();

    //Recorre el carrito y genera el HTML


    articulosCarrito.forEach(producto=>{
        const row=document.createElement("tr");
        row.innerHTML=`
        <tr>
            <td class="text-center align-middle">
                <img src="${producto.imagen}" class="img-fluid" style="max-width: 80px; height: auto;">
            </td>
            <td class="align-middle">
                ${producto.titulo}
            </td>    
            <td class="align-middle">
                ${producto.precio}
            </td>    
            <td class="align-middle">
                <label class="text-center form-control w-50">${producto.cantidad}</label>
            </td>    
            <td>
                <a href="#" class="borrar-curso" data-id="${producto.id}">X</a>
            </td>    
        </tr>

        `;
        //agrega el html del carrtio en el tbody
        contenedorCarrito.appendChild(row);
    });
}

//Eliminar los productos del tbody
function limpiarHTML(){
    //forma lenta
    contenedorCarrito.innerHTML='';
}



//FIN MENU CARRITO