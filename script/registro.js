let arrayCompra = [];
if (JSON.parse(localStorage.getItem('Compra'))) {
    arrayCompra = JSON.parse(localStorage.getItem('Compra'));
}
let arrayCarrito = JSON.parse(localStorage.getItem('Carrito'));
let precioTotalCompra = JSON.parse(localStorage.getItem('ValorCompra'));

const enviarLocal = (event) => {
    event.preventDefault(); // Previene la recarga de la página

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const numeroTarjeta = Number(document.getElementById('numeroTarjeta').value);
    const fechaVencimiento = document.getElementById('fechaVencimiento').value;
    const cvv = Number(document.getElementById('cvv').value);

    if (nombre === "" || correo === "" || numeroTarjeta === 0 || fechaVencimiento === "" || cvv === 0) {
        swal({
            title: "Error!",
            text: "¡Debe llenar todos los campos!",
            icon: "error",
        });
    } else if (isNaN(numeroTarjeta) || isNaN(cvv)) {
        swal({
            title: "Error!",
            text: "¡El campo de Número de Tarjeta y CVV debe ser numérico!",
            icon: "error",
        });
    } else {
        arrayCompra.push({
            "nombre": nombre,
            "correo": correo,
            "numeroTarjeta": numeroTarjeta,
            "fechaVencimiento": fechaVencimiento,
            "cvv": cvv,
            "valor": precioTotalCompra,
            "carrito": arrayCarrito
        });
        localStorage.setItem("Compra", JSON.stringify(arrayCompra));

        swal({
            title: "Compra exitosa!",
            text: "La compra fue realizada de manera exitosa!",
            icon: "success",
        }).then(() => {
            window.location.href = 'tipoProducto.html';
        });

        arrayCarrito.splice(0, arrayCarrito.length);
        localStorage.setItem('Carrito', JSON.stringify(arrayCarrito));
        localStorage.setItem('cantidadProductos', JSON.stringify(0));
        localStorage.setItem('ValorCompra', JSON.stringify(0));
    }
}

let enviar = document.querySelector('#pagar');
enviar.addEventListener('click', enviarLocal);
