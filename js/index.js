/**
 * Script principal para la tienda MrSanti Streaming.
 * Lee la estructura y los precios desde config.js
 */
document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. CONFIGURACIÓN INICIAL
    // ==========================================================================
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // ==========================================================================
    // 2. DATOS DE PRODUCTOS Y COMBOS (SOLO ESTRUCTURA)
    // ==========================================================================
    const productos = [
        { id: 'netflix', nombre: 'Netflix', descripcion: ['Calidad de video hasta 4K HDR', 'Audio espacial inmersivo', 'Visualización en múltiples dispositivos'], iconoHtml: `<img src="https://img.icons8.com/color/96/netflix.png" alt="Netflix"/>`, claseColor: 'netflix', soloIcono: true, opciones: [{ etiqueta: '1 Pantalla 4K' }, { etiqueta: '2 Pantallas 4K' }, { etiqueta: '3 Pantallas 4K' }, { etiqueta: '4 Pantallas 4K' }, { etiqueta: '5 Pantallas 4K' }] },
        { id: 'disney-std', nombre: 'Disney+ Standard', descripcion: ['Catálogo completo (Disney, Pixar, Marvel, etc.)', 'Deportes en vivo de ESPN (con anuncios)', 'Video en alta definición (1080p)'], iconoHtml: `<img src="img/Disney.png" alt="Disney+" class="logo-redondeado"/>`, claseColor: 'disney', soloIcono: false, opciones: [{ etiqueta: '1 Pantalla' }, { etiqueta: '2 Pantallas' }, { etiqueta: '3 Pantallas' }] },
        { id: 'disney-prm', nombre: 'Disney+ Premium', descripcion: ['Todo el contenido sin anuncios', 'Acceso total al catálogo deportivo de ESPN', 'Calidad de video 4K UHD y HDR'], iconoHtml: `<img src="img/Disney.png" alt="Disney+" class="logo-redondeado"/>`, claseColor: 'disney', soloIcono: false, opciones: [{ etiqueta: '1 Pantalla' }, { etiqueta: '2 Pantallas' }] },
        { id: 'max', nombre: 'Max', descripcion: ['Contenido premium de HBO y Warner Bros.', 'Series del universo DC y Cartoon Network', 'Calidad de imagen hasta 4K UHD'], iconoHtml: `<img src="img/max.avif" alt="Max"/>`, claseColor: 'max', soloIcono: true, disclaimer: 'La suscripción puede ser Básico, Standard o Platino.', opciones: [{ etiqueta: '1 Pantalla' }, { etiqueta: '2 Pantallas' }, { etiqueta: '3 Pantallas' }] },
        { id: 'prime', nombre: 'Prime Video', descripcion: ['Series y películas Amazon Originals', 'Beneficios de Prime Gaming incluidos', 'Descargas para ver sin conexión'], iconoHtml: `<img src="https://img.icons8.com/color/96/amazon-prime-video.png" alt="Prime Video"/>`, claseColor: 'prime', soloIcono: true, opciones: [{ etiqueta: '1 Pantalla' }, { etiqueta: '2 Pantallas' }, { etiqueta: '3 Pantallas' }] },
        { id: 'spotify', nombre: 'Spotify Premium', descripcion: ['Música y podcasts sin interrupciones', 'Descarga tus canciones favoritas', 'Calidad de audio superior'], iconoHtml: `<i class="fa-brands fa-spotify"></i>`, claseColor: 'spotify', soloIcono: false, opciones: [{ etiqueta: '1 Mes' }, { etiqueta: '2 Meses' }, { etiqueta: '3 Meses' }, { etiqueta: '4 Meses' }, { etiqueta: '5 Meses' }] },
        { id: 'paramount', nombre: 'Paramount+', descripcion: ['Contenido exclusivo de Showtime y CBS', 'Eventos deportivos como la Champions League', 'Catálogo para todas las edades'], iconoHtml: `<img src="img/Paramount_Plus.svg" alt="Paramount+"/>`, claseColor: 'paramount', soloIcono: false, opciones: [{ etiqueta: '1 Pantalla' }, { etiqueta: '2 Pantallas' }, { etiqueta: '3 Pantallas' }] },
        { id: 'vix', nombre: 'Vix Premium', descripcion: ['El mejor contenido en español sin anuncios', 'Deportes en vivo como LaLiga española', 'Series y novelas originales'], iconoHtml: `<img src="img/vix.webp" alt="Vix Premium" class="logo-redondeado"/>`, claseColor: 'vix', soloIcono: false, opciones: [{ etiqueta: '1 Pantalla' }, { etiqueta: '2 Pantallas' }, { etiqueta: '3 Pantallas' }] },
        { id: 'deezer', nombre: 'Deezer', descripcion: ['Música en alta fidelidad (FLAC)', 'Música y podcasts sin interrupciones', 'Identificador de canciones SongCatcher'], iconoHtml: `<img src="img/deezer.webp" alt="Deezer" class="logo-redondeado"/>`, claseColor: 'deezer', soloIcono: false, opciones: [{ etiqueta: '1 Mes' }, { etiqueta: '2 Meses' }, { etiqueta: '3 Meses' }, { etiqueta: '4 Meses' }, { etiqueta: '5 Meses' }] },
        { id: 'gemini', nombre: 'Gemini Pro', descripcion: ['Acceso a los modelos de IA más potentes', 'Integrado en Gmail, Documentos y más', '2 TB de almacenamiento en la nube'], iconoHtml: `<img src="img/Gemini_Pro.webp" alt="Gemini Pro" class="logo-redondeado"/>`, claseColor: 'gemini', soloIcono: false, opciones: [{ etiqueta: '1 Mes' }] },
        { id: 'canva', nombre: 'Canva Pro', descripcion: ['Acceso a +100 millones de fotos y plantillas', 'Herramientas de IA para diseño rápido', '1 TB de almacenamiento en la nube'], iconoHtml: `<img src="https://img.icons8.com/fluency/96/canva.png" alt="canva"/>`, claseColor: 'canva', soloIcono: false, opciones: [{ etiqueta: '1 Mes' }] },
        { id: 'crunchyroll', nombre: 'Crunchyroll', descripcion: ['El catálogo de anime más grande del mundo', 'Episodios nuevos una hora después de Japón', 'Disfruta sin anuncios'], iconoHtml: `<img src="img/crunchy.png" alt="Crunchyroll"/>`, claseColor: 'crunchyroll', soloIcono: false, opciones: [{ etiqueta: '1 Pantalla' }, { etiqueta: '2 Pantallas' }, { etiqueta: '3 Pantallas' }] },
        { id: 'hulu', nombre: 'Hulu', descripcion: ['Series originales como "El Cuento de la Criada"', 'Programas de TV de ABC, NBC y Fox', 'Amplia selección de películas y documentales'], iconoHtml: `<img src="https://img.icons8.com/color/96/hulu.png" alt="Hulu"/>`, claseColor: 'hulu', soloIcono: false, opciones: [{ etiqueta: 'Suscripción Mensual' }] },
        { id: 'iptv', nombre: 'IPTV', descripcion: ['Acceso a canales de TV en vivo', 'Películas, series y deportes a la carta', 'Contenido de múltiples plataformas integradas'], iconoHtml: `<img src="img/iptv.jpg" alt="IPTV"/>`, claseColor: 'iptv', soloIcono: false, opciones: [{ etiqueta: '1 Pantalla' }] },
        { id: 'profe-net', nombre: 'El Profe Net', descripcion: ['Más de 60 canales deportivos', 'Fútbol, Fórmula 1, UFC y más', 'Transmisiones en alta definición'], iconoHtml: `<img src="img/elprofenet.png" alt="El Profe Net"/>`, claseColor: 'profe-net', soloIcono: false, opciones: [{ etiqueta: 'Acceso Total' }] },
        { id: 'apple-tv', nombre: 'Apple TV+', descripcion: ['Contenido Apple Originals exclusivo', 'Series aclamadas como "Ted Lasso" y "Severance"', 'Películas ganadoras de premios'], iconoHtml: `<img src="img/appletv.webp"/>`, claseColor: 'apple-tv', soloIcono: false, opciones: [{ etiqueta: 'Suscripción Mensual' }] },
    ];

    const combos = [
        { id: 'combo-tv', nombre: 'Combo TV', iconos: ['/img/Disney.png', 'https://img.icons8.com/color/48/netflix.png', '/img/vix.webp'], claseColor: 'combo', caracteristicas: ['Disney+ Standard', 'Netflix', 'Vix'] },
        { id: 'combo-pro', nombre: 'Combo Pro', iconos: ['/img/Disney.png', 'https://img.icons8.com/color/48/netflix.png', '/img/max.avif'], claseColor: 'combo', caracteristicas: ['Disney+ Standard', 'Netflix', 'Max'] },
        { id: 'combo-prime', nombre: 'Combo Prime', iconos: ['https://img.icons8.com/color/48/netflix.png', 'https://img.icons8.com/color/48/amazon-prime-video.png'], claseColor: 'combo', caracteristicas: ['Netflix', 'Prime Video'] },
        { id: 'combo-plus', nombre: 'Combo Plus', iconos: ['/img/Paramount_Plus.svg', 'https://img.icons8.com/color/48/netflix.png', '/img/max.avif'], claseColor: 'combo', caracteristicas: ['Paramount+', 'Netflix', 'Max'] },
        { id: 'combo-fiesta', nombre: 'Combo Fiesta', iconos: ['https://img.icons8.com/color/48/spotify.png', 'https://img.icons8.com/color/48/netflix.png', '/img/max.avif'], claseColor: 'combo', regalo: '🎁 ¡Pantalla de Vix de Regalo!', caracteristicas: ['Spotify 3 Meses', 'Netflix', 'Max'] },
        { id: 'combo-mix', nombre: 'Combo Mix', iconos: ['https://img.icons8.com/color/48/spotify.png', 'https://img.icons8.com/color/48/netflix.png', '/img/Disney.png'], claseColor: 'combo', caracteristicas: ['Spotify 1 Mes', 'Netflix', 'Disney+ Standard'] },
        { id: 'combo-familiar-plus', nombre: 'Combo Familiar Plus', iconos: ['/img/deezer.webp', '/img/Disney.png', '/img/Paramount_Plus.svg', 'https://img.icons8.com/color/48/netflix.png'], claseColor: 'combo', caracteristicas: ['Deezer 5 Meses', 'Disney+ Standard', 'Paramount+', 'Netflix'] },
        { id: 'combo-deportes-familia', nombre: 'Combo Deportes y Familia', iconos: ['/img/vix.webp', 'https://img.icons8.com/color/48/amazon-prime-video.png', '/img/Disney.png'], claseColor: 'combo', caracteristicas: ['Vix', 'Prime Video', 'Disney+ Standard'] },
        { id: 'combo-premium-mix', nombre: 'Combo Premium Mix', iconos: ['/img/Disney.png', '/img/max.avif', 'https://img.icons8.com/color/48/spotify.png'], claseColor: 'combo', caracteristicas: ['Disney+ Premium', 'Max', 'Spotify 3 Meses'] },
        { id: 'combo-latino', nombre: 'Combo Latino', iconos: ['/img/deezer.webp', '/img/Disney.png', '/img/vix.webp', '/img/max.avif'], claseColor: 'combo', caracteristicas: ['Deezer 1 Mes', 'Disney+ Standard', 'Vix', 'Max'] },
        { id: 'combo-productividad', nombre: 'Combo Productividad', iconos: ['/img/Gemini_Pro.webp', '/img/deezer.webp', '/img/vix.webp'], claseColor: 'combo', caracteristicas: ['Gemini Pro', 'Deezer 1 Mes', 'Vix'] },
        { id: 'combo-deportes-total', nombre: 'Combo Deportes Total', iconos: ['/img/elprofenet.png', '/img/Disney.png'], claseColor: 'combo', caracteristicas: ['El Profe Net', 'Disney+ Standard (con ESPN)'] },
        { id: 'combo-cine-premium', nombre: 'Combo Cine Premium', iconos: ['/img/appletv.webp', 'https://img.icons8.com/color/96/hulu.png', '/img/max.avif'], claseColor: 'combo', caracteristicas: ['Apple TV+', 'Hulu', 'Max'] },
        { id: 'combo-tv-global', nombre: 'Combo TV Global', iconos: ['/img/iptv.jpg', 'https://img.icons8.com/color/48/netflix.png'], claseColor: 'combo', caracteristicas: ['IPTV', 'Netflix'] },
        { id: 'combo-usa-entretenimiento', nombre: 'Combo USA Entretenimiento', iconos: ['https://img.icons8.com/color/96/hulu.png', 'img/max.avif'], claseColor: 'combo', caracteristicas: ['Hulu', 'Max'] },
    ];

    // ==========================================================================
    // 3. ESTADO Y SELECTORES DEL DOM
    // ==========================================================================
    let tipoUsuarioActual = 'consumidor';
    let carrito = [];

    const interruptorTema = document.getElementById('interruptor-tema');
    const cuadriculaProductos = document.getElementById('cuadricula-productos');
    const cuadriculaCombos = document.getElementById('cuadricula-combos');
    const botonAcceso = document.getElementById('boton-acceso');
    const modalAcceso = document.getElementById('modal-acceso');
    const botonCarrito = document.getElementById('boton-carrito');
    const modalCarrito = document.getElementById('modal-carrito');
    const contadorCarritoEl = document.getElementById('contador-carrito');
    const itemsCarritoEl = document.getElementById('items-carrito');
    const totalCarritoEl = document.getElementById('total-carrito-valor');
    const formularioAcceso = document.getElementById('formulario-acceso');
    const errorAcceso = document.getElementById('error-acceso');
    const btnFinalizarCompra = document.getElementById('btn-finalizar-compra');
    const inputBusqueda = document.getElementById('input-busqueda');

    // ==========================================================================
    // 4. FUNCIONES AUXILIARES
    // ==========================================================================
    const establecerTema = (tema) => {
        const iconoTema = interruptorTema.querySelector('i');
        document.body.setAttribute('data-tema', tema);
        localStorage.setItem('tema', tema);
        iconoTema.className = tema === 'claro' ? 'fas fa-moon' : 'fas fa-sun';
    };

    const formatearMoneda = (valor) => new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(valor);

    const obtenerPrecioFinal = (item, opcionIndex = -1) => {
        const esCombo = !item.opciones;
        const claveId = esCombo ? item.id : `${item.id}-${opcionIndex}`;
        const preciosDelItem = esCombo ? PRECIOS_BASE.combos[claveId] : PRECIOS_BASE.productos[claveId];

        if (!preciosDelItem) {
            console.error(`Precio base no encontrado para el ID: ${claveId}`);
            return { final: 0, original: 0 };
        }

        const precioBase = preciosDelItem[tipoUsuarioActual];
        const descuentosUsuario = DESCUENTOS[tipoUsuarioActual] || {};
        const precioConDescuento = descuentosUsuario[claveId];

        return {
            final: typeof precioConDescuento !== 'undefined' ? precioConDescuento : precioBase,
            original: precioBase
        };
    };

    const toggleModal = (idModal, mostrar) => {
        const modal = document.getElementById(idModal);
        if (modal) {
            modal.classList.toggle('visible', mostrar);
            if (!mostrar && idModal === 'modal-acceso') {
                formularioAcceso.reset();
                errorAcceso.textContent = '';
            }
        }
    };

    // ==========================================================================
    // 5. LÓGICA DE RENDERIZADO
    // ==========================================================================
    const renderizarProductos = (elementoGrid, items) => {
        elementoGrid.innerHTML = '';
        if (items.length === 0) {
            // No hacer nada si es una búsqueda sin resultados para no borrar el mensaje global
            if (inputBusqueda.value.trim() === '') {
                elementoGrid.innerHTML = '<p class="sin-resultados">No hay productos para mostrar.</p>';
            }
            return;
        }

        items.forEach(item => {
            const estaAgotado = AGOTADOS.productos.includes(item.id);
            const precioInfo = obtenerPrecioFinal(item, 0);
            let precioHtml = (precioInfo.final < precioInfo.original) ?
                `<span class="precio-anterior">${formatearMoneda(precioInfo.original)}</span><span class="valor" id="precio-${item.id}">${formatearMoneda(precioInfo.final)}</span>` :
                `<span class="valor" id="precio-${item.id}">${formatearMoneda(precioInfo.final)}</span>`;

            const disclaimerHtml = item.disclaimer ? `<p class="aclaracion-producto">${item.disclaimer}</p>` : '';
            const opcionesHtml = item.opciones.map((op, index) => `<option value="${index}">${op.etiqueta}</option>`).join('');
            const nombreHtml = item.soloIcono ? '' : `<h3 class="nombre-servicio">${item.nombre}</h3>`;
            const descripcionHtml = `<ul class="lista-caracteristicas">${item.descripcion.map(d => `<li><i class="fas fa-check"></i>${d}</li>`).join('')}</ul>`;

            const tarjetaHtml = `
                <div class="tarjeta-producto tarjeta-producto--${item.claseColor} ${estaAgotado ? 'agotado' : ''}" data-id-producto="${item.id}">
                    <div class="tarjeta-cabecera">
                        <div class="icono-servicio">${item.iconoHtml}</div>
                        ${nombreHtml}
                    </div>
                    <div class="tarjeta-cuerpo">
                        ${descripcionHtml}
                        <select class="selector-plan" id="selector-${item.id}" ${estaAgotado ? 'disabled' : ''}>${opcionesHtml}</select>
                        ${disclaimerHtml}
                        <p class="ciclo-producto">Ciclo de 28 a 30 días</p>
                    </div>
                    <div class="tarjeta-pie">
                        <div class="etiqueta-precio" id="etiqueta-precio-${item.id}">
                            <span class="etiqueta">Precio ${tipoUsuarioActual === 'revendedor' ? 'Revendedor' : 'Final'}</span>
                            ${precioHtml}
                        </div>
                        <button class="btn-agregar" data-id="${item.id}" ${estaAgotado ? 'disabled' : ''}>Agregar</button>
                    </div>
                </div>`;
            elementoGrid.innerHTML += tarjetaHtml;
        });
    };

    const renderizarCombos = (elementoGrid, items) => {
        elementoGrid.innerHTML = '';
        if (items.length === 0) return;

        items.forEach(item => {
            const comboManualmenteAgotado = AGOTADOS.combos.includes(item.id);
            const algunProductoAgotado = item.caracteristicas.some(caracteristica => {
                const productoIndividual = productos.find(p => caracteristica.toLowerCase().includes(p.nombre.toLowerCase()));
                return productoIndividual && AGOTADOS.productos.includes(productoIndividual.id);
            });

            const estaAgotado = comboManualmenteAgotado || algunProductoAgotado;
            const precioInfo = obtenerPrecioFinal(item);
            let precioHtml = (precioInfo.final < precioInfo.original) ?
                `<span class="precio-anterior">${formatearMoneda(precioInfo.original)}</span><span class="valor">${formatearMoneda(precioInfo.final)}</span>` :
                `<span class="valor">${formatearMoneda(precioInfo.final)}</span>`;

            const caracteristicasHtml = item.caracteristicas.map(c => `<li><i class="fas fa-check"></i>${c}</li>`).join('');
            const logosHtml = item.iconos.map((iconUrl, index) =>
                `<img src="${iconUrl}" alt="logo combo"/>` + (index < item.iconos.length - 1 ? '<i class="fa-solid fa-plus"></i>' : '')
            ).join('');
            const regaloHtml = item.regalo ? `<p class="combo-regalo">${item.regalo}</p>` : '';

            const tarjetaHtml = `
                <div class="tarjeta-producto tarjeta-producto--${item.claseColor} ${estaAgotado ? 'agotado' : ''}" data-id-producto="${item.id}">
                    <div class="tarjeta-cabecera">
                        <div class="tarjeta-combo-contenido">
                            <div class="combo-logos">${logosHtml}</div>
                            <div class="combo-caracteristicas">
                                <h3 class="combo-nombre">${item.nombre}</h3>
                                <ul class="lista-caracteristicas">${caracteristicasHtml}</ul>
                                ${regaloHtml}
                            </div>
                        </div>
                    </div>
                    <div class="tarjeta-pie">
                        <div class="etiqueta-precio">
                             <span class="etiqueta">Precio ${tipoUsuarioActual === 'revendedor' ? 'Revendedor' : 'Final'}</span>
                             ${precioHtml}
                        </div>
                        <button class="btn-agregar" data-id="${item.id}" ${estaAgotado ? 'disabled' : ''}>Agregar</button>
                    </div>
                </div>`;
            elementoGrid.innerHTML += tarjetaHtml;
        });
    };

    const renderizarContenido = (productosParaMostrar = productos, combosParaMostrar = combos) => {
        renderizarProductos(cuadriculaProductos, productosParaMostrar);
        renderizarCombos(cuadriculaCombos, combosParaMostrar);
    };

    const manejarBusqueda = () => {
        const termino = inputBusqueda.value.toLowerCase().trim();
        const productosFiltrados = productos.filter(p => p.nombre.toLowerCase().includes(termino));
        const combosFiltrados = combos.filter(c =>
            c.nombre.toLowerCase().includes(termino) ||
            c.caracteristicas.some(car => car.toLowerCase().includes(termino))
        );

        document.getElementById('productos').style.display = productosFiltrados.length > 0 || termino === '' ? 'block' : 'none';
        document.getElementById('combos').style.display = combosFiltrados.length > 0 || termino === '' ? 'block' : 'none';

        renderizarContenido(productosFiltrados, combosFiltrados);

        if (productosFiltrados.length === 0 && combosFiltrados.length === 0 && termino !== '') {
            cuadriculaProductos.innerHTML = '<p class="sin-resultados">No se encontraron resultados para tu búsqueda.</p>';
            cuadriculaCombos.innerHTML = ''; // Limpiar combos también
        }
    };


    // ==========================================================================
    // 6. LÓGICA DEL CARRITO
    // ==========================================================================
    const agregarAlCarrito = (idProducto) => {
        const todosLosItems = [...productos, ...combos];
        const productoBase = todosLosItems.find(p => p.id === idProducto);
        const selector = document.getElementById(`selector-${idProducto}`);
        const opcionIndex = selector ? parseInt(selector.value, 10) : -1;
        const precioInfo = obtenerPrecioFinal(productoBase, opcionIndex);
        const esCombo = !productoBase.opciones;
        const idCarrito = esCombo ? idProducto : `${idProducto}-${opcionIndex}`;
        const nombreMostrado = esCombo ? productoBase.nombre : `${productoBase.nombre} (${productoBase.opciones[opcionIndex].etiqueta})`;

        const itemExistente = carrito.find(item => item.idCarrito === idCarrito);

        if (itemExistente) {
            itemExistente.cantidad++;
        } else {
            carrito.push({ ...productoBase, idCarrito, cantidad: 1, nombreMostrado, precioFinal: precioInfo.final });
        }
        renderizarCarrito();
    };

    const renderizarCarrito = () => {
        itemsCarritoEl.innerHTML = '';
        if (carrito.length === 0) {
            itemsCarritoEl.innerHTML = '<p class="centrar-texto">Tu carrito está vacío.</p>';
            btnFinalizarCompra.disabled = true;
        } else {
            carrito.forEach(item => {
                const iconoHtml = item.iconos ?
                    `<div class="combo-logos">${item.iconos.map(icon => `<img src="${icon}" alt="logo combo"/>`).join('')}</div>` :
                    item.iconoHtml;

                const itemHtml = `
                    <div class="item-carrito">
                        <div class="item-icono">${iconoHtml}</div>
                        <div class="item-info">
                            <h4>${item.nombreMostrado}</h4>
                            <p>${formatearMoneda(item.precioFinal)} c/u</p>
                        </div>
                        <div class="item-controles">
                            <button class="btn-control-cantidad" data-id="${item.idCarrito}" data-accion="restar">-</button>
                            <span>${item.cantidad}</span>
                            <button class="btn-control-cantidad" data-id="${item.idCarrito}" data-accion="sumar">+</button>
                            <button class="btn-eliminar" data-id="${item.idCarrito}"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>`;
                itemsCarritoEl.innerHTML += itemHtml;
            });
            btnFinalizarCompra.disabled = false;
        }
        actualizarContadorCarrito();
        actualizarTotalCarrito();
    };

    const actualizarTotalCarrito = () => {
        const total = carrito.reduce((suma, item) => suma + (item.precioFinal * item.cantidad), 0);
        totalCarritoEl.textContent = formatearMoneda(total);
    };

    const actualizarContadorCarrito = () => {
        const totalItems = carrito.reduce((suma, item) => suma + item.cantidad, 0);
        contadorCarritoEl.textContent = totalItems;
        if (totalItems > 0) {
            contadorCarritoEl.classList.add('actualizado');
            setTimeout(() => contadorCarritoEl.classList.remove('actualizado'), 200);
        }
    };

    const modificarCantidadItem = (idCarrito, accion) => {
        const itemIndex = carrito.findIndex(item => item.idCarrito === idCarrito);
        if (itemIndex === -1) return;

        if (accion === 'sumar') {
            carrito[itemIndex].cantidad++;
        } else if (accion === 'restar') {
            carrito[itemIndex].cantidad--;
            if (carrito[itemIndex].cantidad === 0) {
                carrito.splice(itemIndex, 1);
            }
        }
        renderizarCarrito();
    };

    const eliminarItemCarrito = (idCarrito) => {
        carrito = carrito.filter(item => item.idCarrito !== idCarrito);
        renderizarCarrito();
    };

    const enviarPedidoWhatsApp = () => {
        if (carrito.length === 0) return;
        const numeroTelefono = '573023999133'; // Reemplazar con tu número
        let mensaje = `👋 ¡Hola MrSanti! Quiero hacer el siguiente pedido:\n\n`;

        carrito.forEach(item => {
            mensaje += `*${item.nombreMostrado}*\n`;
            mensaje += `  - Cantidad: ${item.cantidad}\n`;
            mensaje += `  - Precio Unitario: ${formatearMoneda(item.precioFinal)}\n`;
            mensaje += `  - Subtotal: ${formatearMoneda(item.precioFinal * item.cantidad)}\n\n`;
        });

        const total = carrito.reduce((suma, item) => suma + (item.precioFinal * item.cantidad), 0);
        mensaje += `*TOTAL DEL PEDIDO: ${formatearMoneda(total)}*\n\n`;
        mensaje += `_Pedido realizado como: ${tipoUsuarioActual === 'revendedor' ? 'Revendedor' : 'Cliente Final'}_`;

        const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(urlWhatsApp, '_blank');
    };

    // ==========================================================================
    // 7. LÓGICA DE AUTENTICACIÓN
    // ==========================================================================
    const manejarLogin = (e) => {
        e.preventDefault();
        const usuario = formularioAcceso.usuario.value;
        const contrasena = formularioAcceso.contrasena.value;

        if (usuario === ACCESO_REVENDEDOR.usuario && contrasena === ACCESO_REVENDEDOR.contrasena) {
            tipoUsuarioActual = 'revendedor';
            toggleModal('modal-acceso', false);
            actualizarBotonAcceso();
            inputBusqueda.value = '';
            manejarBusqueda(); // Actualiza la vista con los nuevos precios
            carrito = []; // Vacía el carrito al cambiar de modo
            renderizarCarrito();
        } else {
            errorAcceso.textContent = 'Usuario o contraseña incorrectos.';
        }
    };

    const manejarLogout = () => {
        tipoUsuarioActual = 'consumidor';
        actualizarBotonAcceso();
        inputBusqueda.value = '';
        manejarBusqueda(); // Actualiza la vista a precios de consumidor
        carrito = []; // Vacía el carrito
        renderizarCarrito();
    };

    const actualizarBotonAcceso = () => {
        botonAcceso.textContent = tipoUsuarioActual === 'revendedor' ? 'Salir Modo Revendedor' : 'Acceso Revendedor';
    };

    // ==========================================================================
    // 8. ANIMACIONES Y OBSERVADORES
    // ==========================================================================
    const observadorSeccion = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                // Para animación de revelado
                if (entrada.target.classList.contains('revelar')) {
                    entrada.target.classList.add('activo');
                }
                // Para resaltar enlace de navegación activo
                const id = entrada.target.getAttribute('id');
                const enlaceActivo = document.querySelector(`.enlace-navegacion[href="#${id}"]`);

                document.querySelectorAll('.enlace-navegacion').forEach(enlace => enlace.classList.remove('activo'));
                if (enlaceActivo) {
                    enlaceActivo.classList.add('activo');
                }
            }
        });
    }, { rootMargin: '-30% 0px -70% 0px' }); // Ajusta el margen para activar antes/después de la vista

    // ==========================================================================
    // 9. EVENT LISTENERS
    // ==========================================================================
    inputBusqueda.addEventListener('input', manejarBusqueda);

    botonAcceso.addEventListener('click', () => {
        tipoUsuarioActual === 'revendedor' ? manejarLogout() : toggleModal('modal-acceso', true);
    });

    botonCarrito.addEventListener('click', () => toggleModal('modal-carrito', true));

    document.querySelectorAll('[data-cierra-modal]').forEach(btn => {
        btn.addEventListener('click', () => toggleModal(btn.dataset.cierraModal, false));
    });

    formularioAcceso.addEventListener('submit', manejarLogin);
    btnFinalizarCompra.addEventListener('click', enviarPedidoWhatsApp);

    interruptorTema.addEventListener('click', () => {
        const nuevoTema = document.body.getAttribute('data-tema') === 'oscuro' ? 'claro' : 'oscuro';
        establecerTema(nuevoTema);
    });

    itemsCarritoEl.addEventListener('click', (e) => {
        const target = e.target.closest('button');
        if (!target) return;

        const id = target.dataset.id;
        if (target.classList.contains('btn-control-cantidad')) {
            modificarCantidadItem(id, target.dataset.accion);
        } else if (target.classList.contains('btn-eliminar')) {
            eliminarItemCarrito(id);
        }
    });

    document.querySelector('main').addEventListener('click', (e) => {
        const target = e.target.closest('.btn-agregar');
        if (target) {
            agregarAlCarrito(target.dataset.id);
        }
    });

    document.querySelector('main').addEventListener('change', (e) => {
        if (e.target.classList.contains('selector-plan')) {
            const tarjeta = e.target.closest('.tarjeta-producto');
            const idProducto = tarjeta.dataset.idProducto;
            const producto = productos.find(p => p.id === idProducto);
            const opcionIndex = parseInt(e.target.value, 10);
            const precioInfo = obtenerPrecioFinal(producto, opcionIndex);
            const etiquetaPrecioEl = document.getElementById(`etiqueta-precio-${idProducto}`);
            let precioHtml;

            if (precioInfo.final < precioInfo.original) {
                precioHtml = `<span class="etiqueta">Precio ${tipoUsuarioActual === 'revendedor' ? 'Revendedor' : 'Final'}</span><span class="precio-anterior">${formatearMoneda(precioInfo.original)}</span><span class="valor" id="precio-${idProducto}">${formatearMoneda(precioInfo.final)}</span>`;
            } else {
                precioHtml = `<span class="etiqueta">Precio ${tipoUsuarioActual === 'revendedor' ? 'Revendedor' : 'Final'}</span><span class="valor" id="precio-${idProducto}">${formatearMoneda(precioInfo.final)}</span>`;
            }
            etiquetaPrecioEl.innerHTML = precioHtml;
        }
    });


    // ==========================================================================
    // 10. INICIALIZACIÓN
    // ==========================================================================
    establecerTema(localStorage.getItem('tema') || 'oscuro');
    document.querySelectorAll('.revelar, section[id]').forEach(el => observadorSeccion.observe(el));
    renderizarContenido();
    renderizarCarrito();
});
