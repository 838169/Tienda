/**
 * =========================================================================
 * PANEL DE CONTROL GENERAL - MrSanti Streaming
 * =========================================================================
 * Desde aquí puedes gestionar PRECIOS, AGOTADOS y DESCUENTOS.
 * ¡Este es el único archivo que necesitas modificar!
 */

// #########################################################################
// ##                                                                     ##
// ##                GUÍA DE IDENTIFICADORES (IDs) PARA USAR                ##
// ##                                                                     ##
// #########################################################################
/*
--- IDs de Productos Individuales ---
// Para PRECIOS y DESCUENTOS, el ID se forma como: 'id_del_producto-numero_de_opcion' (la opción empieza en 0)
// Ejemplo: Para Netflix, '1 Pantalla 4K' es la opción 0, su ID es 'netflix-0'.

// Para AGOTADOS, usa solo el ID base del producto. Ej: 'netflix'.

// -- Hulu --
//    ID Base: 'hulu'
//    ID Plan: 'hulu-0'
// -- IPTV --
//    ID Base: 'iptv'
//    ID Plan: 'iptv-0'
// -- El Profe Net --
//    ID Base: 'profe-net'
//    ID Plan: 'profe-net-0'
// -- Apple TV+ --
//    ID Base: 'apple-tv'
//    ID Plan: 'apple-tv-0'
...y así con los demás...

--- IDs de Combos ---
// Para combos, usa su 'id'. Ej: 'combo-tv'.
*/


// =========================================================================
// 1. LISTA DE PRECIOS BASE
// =========================================================================
const PRECIOS_BASE = {
    productos: {
        'netflix-0': { consumidor: 10000, revendedor: 7000 },
        'netflix-1': { consumidor: 18000, revendedor: 13000 },
        'netflix-2': { consumidor: 28000, revendedor: 20000 },
        'netflix-3': { consumidor: 38000, revendedor: 27000 },
        'netflix-4': { consumidor: 48000, revendedor: 29000 },
        'disney-std-0': { consumidor: 8000, revendedor: 3500 },
        'disney-std-1': { consumidor: 14000, revendedor: 5500 },
        'disney-std-2': { consumidor: 18000, revendedor: 7500 },
        'disney-prm-0': { consumidor: 13000, revendedor: 5500 },
        'disney-prm-1': { consumidor: 17000, revendedor: 10000 },
        'max-0': { consumidor: 8000, revendedor: 3000 },
        'max-1': { consumidor: 12000, revendedor: 5500 },
        'max-2': { consumidor: 15000, revendedor: 7500 },
        'prime-0': { consumidor: 9000, revendedor: 7000 },
        'prime-1': { consumidor: 15000, revendedor: 13000 },
        'prime-2': { consumidor: 20000, revendedor: 18000 },
        'spotify-0': { consumidor: 7000, revendedor: 4000 },
        'spotify-1': { consumidor: 12000, revendedor: 9000 },
        'spotify-2': { consumidor: 15000, revendedor: 11000 },
        'spotify-3': { consumidor: 20000, revendedor: 13000 },
        'spotify-4': { consumidor: 25000, revendedor: 15000 },
        'paramount-0': { consumidor: 7000, revendedor: 3000 },
        'paramount-1': { consumidor: 12000, revendedor: 5500 },
        'paramount-2': { consumidor: 15000, revendedor: 7500 },
        'vix-0': { consumidor: 7000, revendedor: 3000 },
        'vix-1': { consumidor: 10000, revendedor: 5500 },
        'vix-2': { consumidor: 12000, revendedor: 7000 },
        'deezer-0': { consumidor: 7000, revendedor: 4000 },
        'deezer-1': { consumidor: 12000, revendedor: 10000 },
        'deezer-2': { consumidor: 15000, revendedor: 9000 },
        'deezer-3': { consumidor: 20000, revendedor: 11000 },
        'deezer-4': { consumidor: 25000, revendedor: 15000 },
        'gemini-0': { consumidor: 10000, revendedor: 9000 },
        'canva-0': { consumidor: 10000, revendedor: 7000 },
        'crunchyroll-0': { consumidor: 7000, revendedor: 3000 },
        'crunchyroll-1': { consumidor: 10000, revendedor: 5500 },
        'crunchyroll-2': { consumidor: 12000, revendedor: 7500 },
        'hulu-0': { consumidor: 1000, revendedor: 7000 },
        'iptv-0': { consumidor: 15000, revendedor: 9000 },
        'profe-net-0': { consumidor: 15000, revendedor: 8000 },
        'apple-tv-0': { consumidor: 9000, revendedor: 7000 },
    },
    combos: {
        'combo-tv': { consumidor: 15000, revendedor: 11000 },
        'combo-pro': { consumidor: 17000, revendedor: 11000 },
        'combo-prime': { consumidor: 17000, revendedor: 11000 },
        'combo-plus': { consumidor: 17000, revendedor: 11000 },
        'combo-fiesta': { consumidor: 22000, revendedor: 17000 },
        'combo-mix': { consumidor: 17000, revendedor: 11000 },
        'combo-familiar-plus': { consumidor: 35000, revendedor: 36000 },
        'combo-deportes-familia': { consumidor: 15000, revendedor: 9000 },
        'combo-premium-mix': { consumidor: 20000, revendedor: 14000 },
        'combo-latino': { consumidor: 15000, revendedor: 9000 },
        'combo-productividad': { consumidor: 15000, revendedor: 13500 },
        'combo-deportes-total': { consumidor: 18000, revendedor: 10000 },
        'combo-cine-premium': { consumidor: 20000, revendedor: 13000 },
        'combo-tv-global': { consumidor: 20000, revendedor: 15000 },
        'combo-usa-entretenimiento': { consumidor: 12000, revendedor: 9000 },
    }
};

// =========================================================================
// 2. GESTIÓN DE PRODUCTOS AGOTADOS
// =========================================================================
const AGOTADOS = {
    productos: ['profe-net', 'apple-tv'],
    combos: []
};

// =========================================================================
// 3. GESTIÓN DE DESCUENTOS (OFERTAS TEMPORALES)
// =========================================================================
const DESCUENTOS = {
    consumidor: {},
    revendedor: {}
};

// =========================================================================
// 4. CONFIGURACIÓN DE ACCESO
// =========================================================================
const ACCESO_REVENDEDOR = {
    usuario: 'Admin123',
    contrasena: '12345'
};