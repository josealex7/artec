import productos from './data.js'; // Cambiar nombre si hay conflicto
// No necesitas importar productos de otro archivo si ya es redundante

document.addEventListener('DOMContentLoaded', () => {
  // Elementos HTML
  const card = document.querySelector('#card-movie');
  const tituloCategoria = document.querySelector('#contenedor-titulo');
  const productList = document.getElementById('productList');
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  const priceFilter = document.getElementById('priceFilter');
  const priceDisplay = document.getElementById('priceDisplay');

  // Variables de control
  let idsProductos = [];

  // Función para cargar productos según categoría
  function loadProducts(productos) {
    const categoriaSeleccionada = localStorage.getItem('Categoria');
    let categoriaActual;

    card.innerHTML = "";

    productos.forEach(producto => {
      categoriaActual = producto.categoria;

      if (categoriaSeleccionada === categoriaActual) {
        tituloCategoria.innerHTML = `Productos de ${categoriaSeleccionada}`;
        idsProductos.push(producto.id);

        const item = document.createElement('div');
        item.innerHTML = `
                <div class="card contenedor-carta" id="${producto.id}" style="width: 12rem;">
                    <h5 class="card-title">${producto.name}</h5>
                    <img src=${producto.image} class="card-img-top image-carta" alt="${producto.name}" style="height: 20px;">
                    <div class="precio">
                        <h5>Precio: $ ${Intl.NumberFormat('es-DE').format(producto.precio)}</h5>
                    </div>
                    <div class="card-body">
                        <!-- Añadimos un atributo data-id con el id del producto -->
                        <a class="btn btn-primary botones" data-id="${producto.id}">Descripción</a>
                    </div>
                </div>
                `;
        card.appendChild(item);
      }
    });

    console.log(`Total productos mostrados: ${idsProductos.length}`);
  }

  // Función para mostrar productos filtrados
  const displayProducts = (filteredProducts) => {
    productList.innerHTML = '';
    if (filteredProducts.length === 0) {
      productList.innerHTML = '<p class="text-center">No products found</p>';
      return;
    }

    filteredProducts.forEach((product) => {
      const productCard = `
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <img src="${product.image}" class="card-img-top p-3" alt="${product.name}" style="height: 320px;">
                <div class="card-body">
                  <h5 class="card-title" style="height: 70px;">${product.name}</h5>
                  <p class="card-text" style="height: 220px; overflow-y: hidden;">${product.descripcion}</p>
                  <p><strong>Precio:</strong> $${product.precio}</p>
                  <a class="btn btn-primary botones" data-id="${product.id}">Ver detalles</a>
                </div>
              </div>
            </div>`;
      productList.innerHTML += productCard;
    });
  };

  // Función para filtrar productos
  const filterProducts = () => {
    const searchQuery = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const maxPrice = parseInt(priceFilter.value);

    const filteredProducts = productos.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery);
      const matchesCategory = selectedCategory ? product.categoria === selectedCategory : true;
      const matchesPrice = parseInt(product.precio) <= maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    });

    displayProducts(filteredProducts);
  };

  // Eventos para filtros
  searchInput.addEventListener('input', filterProducts);
  categoryFilter.addEventListener('change', filterProducts);
  priceFilter.addEventListener('input', () => {
    priceDisplay.textContent = `Max Price: $${priceFilter.value}`;
    filterProducts();
  });

  // Inicializar
  priceFilter.value = 5000000;
  loadProducts(productos); // Cargar productos iniciales por categoría
  displayProducts(productos); // Mostrar todos los productos inicialmente

  // Guardar el id del producto en el localStorage al hacer clic en el botón
  const botonesDescripcion = document.querySelectorAll('.botones');

  botonesDescripcion.forEach(boton => {
    boton.addEventListener('click', (event) => {
      // Obtener el ID del producto desde el atributo data-id
      const idProducto = event.target.getAttribute('data-id'); // Usamos data-id
      localStorage.setItem('idProducto', idProducto); // Guardar en localStorage
      window.location.href = 'producto.html'; // Redirigir a la página del producto
    });
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const contenedorBotones = document.getElementById('productList'); // Cambia esto según el contenedor real
  const manejarClic = (event) => {
    // Asegúrate de que el clic sea en un botón con la clase 'botones'
    if (event.target.classList.contains('botones')) {
      const idProducto = event.target.getAttribute('data-id'); // Usamos data-id
      localStorage.setItem('idProducto', idProducto); // Guardar en localStorage
      window.location.href = 'producto.html'; // Redirigir a la página del producto
    }
  };

  // Asignar el evento al contenedor (delegación de eventos)
  contenedorBotones.addEventListener('click', manejarClic);

  // Creamos un MutationObserver para observar la adición de nuevos botones
  const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          // Verificamos si el nodo agregado es un botón con la clase 'botones'
          if (node.nodeType === 1 && node.classList.contains('botones')) {
            // No es necesario agregar el eventListener aquí, porque ya lo manejamos con delegación
            console.log('Nuevo botón agregado:', node);
          }
        });
      }
    });
  });

  // Configuramos el observer para que observe cambios en los hijos del contenedor
  observer.observe(contenedorBotones, { childList: true, subtree: true });
});
