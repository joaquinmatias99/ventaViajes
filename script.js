import { barcelona, roma, paris, londres } from './ciudades.js';

// Obtenemos los elementos del DOM
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subTituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');

// Agregamos evento click a cada enlace
enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
        // Remover la clase active de todos los enlaces
        enlaces.forEach(enlace => enlace.classList.remove('active'));
        
        // Agregar active al enlace actual
        enlace.classList.add('active');

        // Obtener el contenido correspondiente según el enlace
        let contenido = obtenerContenido(enlace.textContent);
        
        // Actualizar los elementos del DOM con el contenido
        tituloElemento.innerHTML = contenido.titulo;
        subTituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
        precioElemento.innerHTML = contenido.precio;
    });
});

// Función para obtener el contenido correcto desde ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}
