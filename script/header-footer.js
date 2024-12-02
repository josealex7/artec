const header = document.querySelector('#menu-encabezado');
let cantidadProductos = 0;
if (JSON.parse(localStorage.getItem('cantidadProductos'))) {
    cantidadProductos = JSON.parse(localStorage.getItem('cantidadProductos'));
}

const encabezado = () => {
    // Verificar si el usuario está logueado
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const items = document.createElement('div');
    items.className = "d-flex justify-content-between align-items-center px-3 py-2"; // Bootstrap para diseño flexible

    items.innerHTML = `
        <!-- Logo -->
        <div class="d-flex align-items-center">
            <a href="index.html" class="text-decoration-none text-dark fs-5"><img src="images/Peliculas (1).png" alt="Logo"></a>
        </div>

        <!-- Carrito o Botones -->
        <div class="contenedor-botones">
            ${storedUser && storedUser.estado ? `
                <button class="btn"  onclick="carritoDetalle()">
                    <img src="https://img.icons8.com/dotty/40/000000/shopping-cart.png" alt="Carrito">
                    ${cantidadProductos}
                </button>
                <!-- Botón Cerrar sesión -->
                <button class="btn btn-danger ms-2" onclick="cerrarSesion()">Cerrar sesión</button>
            ` : `
                <button class="btn btn-primary me-2" onclick="window.location.href='login.html'">Iniciar Sesión</button>
                <button class="btn btn-secondary" onclick="window.location.href='register.html'">Registrarse</button>
            `}
        </div>
    `;
    header.appendChild(items);
};

// Función para cerrar sesión
const cerrarSesion = () => {
    // Eliminar el usuario del localStorage (solo se elimina de la sesión activa)
    const storedUser = JSON.parse(localStorage.getItem('user'));
    storedUser.estado = 0
    localStorage.setItem('user', JSON.stringify(storedUser));
    // Redirigir a la página principal
    window.location.href = 'index.html';  // Redirige a la página principal
};


// Función para cerrar sesión
const carritoDetalle = () => {
    // Redirigir a la página principal
    window.location.href = 'carrito.html';  // Redirige a la página principal
};



// Llamar la función para construir el encabezado
encabezado();

const footer = document.querySelector('#footer-principal');
const pieDePagina = () => {
    const items = document.createElement('div');
    items.innerHTML = `
             <div class="footer-copyright text-center py-3 footerCopyright">© 2024 Copyright:
                <a style="color: white; text-decoration: underline;"> Politecnico Grancolombiano</a>
            </div>
            `;
    footer.appendChild(items);
}

pieDePagina();