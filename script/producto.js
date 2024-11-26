import productos from './data.js'

const productos_agregados = document.querySelector('#contenedorPrincipal');

function verStorage() {
    idProducto = localStorage.getItem('idProducto');
    productos.forEach(moviedata => {
        if (idProducto == moviedata.id) {
            const items = document.createElement('div');
            document.title = "CineFlix | " + moviedata.name;
            items.innerHTML = `
                    <div class="div-img">
                        <img src="${moviedata.image}" alt="">
                    </div>
                    <div class="contenedor-descripcion">
                        <div>
                            <div class="div-titulo">
                                <h2>${moviedata.name}</h2>
                            </div>
                            <div>
                                 <p>
                                    ${moviedata.descripcion}
                                </p>
                            </div>
                            <div class="contenedor-botones">
                                <div class="div-boton">
                                    <label for="">$ ${Intl.NumberFormat('es-DE').format(moviedata.precio)}</label>
                                </div>    
                                <div class="div-boton">
                                    <input type="number" id="cantidad" placeholder="0">
                                </div>    
                                <div class="div-boton">
                                    <button class="btn btn-primary" id="comprar">Agregar al Carrito</button>
                                </div>    
                            </div>
                        </div>
                    </div>
                `;
            productos_agregados.appendChild(items);
            precio = Number(moviedata.precio);
            nombre = moviedata.name;
            imagen = moviedata.image;
            id = idProducto;

        }
    });
}



let idProducto;
let cantidad, precio, nombre, imagen, id;

let objetoCarrito = []
if (JSON.parse(localStorage.getItem('Carrito'))) {
    objetoCarrito = JSON.parse(localStorage.getItem('Carrito'));
}
//let adquirido = true;
verStorage();

let cantidadProductos = 0;
if (JSON.parse(localStorage.getItem('cantidadProductos'))) {
    cantidadProductos = JSON.parse(localStorage.getItem('cantidadProductos'));
}

const comprarPeli = () => {



    cantidad = document.getElementById("cantidad").value;
    if (isNaN(cantidad) || cantidad == 0) {
        swal({
            title: "¡No fue posible agregar al carrito!",
            text: "¡El valor ingresado en cantidad debe ser mayor a 0!",
            icon: "error",
        });
    } else {
        objetoCarrito.push({
            "id": id,
            "nombre": nombre,
            "precio": precio,
            "cantidad": cantidad,
            "imagen": imagen
        });
        localStorage.setItem('Carrito', JSON.stringify(objetoCarrito));
        cantidadProductos = objetoCarrito.length;
        localStorage.setItem('cantidadProductos', JSON.stringify(cantidadProductos));
        swal({
            title: "¡Agregado Al Carrito!",
            text: "¡El producto se ha agregado al carrito de manera exitosa!",
            icon: "success",
        }).then(() => {
            location.reload()
        });
    }

}

let boton = document.getElementById('comprar');
boton.addEventListener('click', comprarPeli);