import {barcelona, roma, paris, londres} from './ciudades.js'    //desestructuración de datos

//obtener los elementos del DOM (document object model)

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')  //alt+shift+abajo y se copian más rápido 
let precioElemento = document.getElementById('precio')  

//agregamos un evento click a cada enlace con un bucle foreach

enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function(){
         //Remover la clase "active" de todos los enlaces 
       enlaces.forEach(function(enlace){                 
        enlace.classList.remove('active')
       }); 
    //Agregar la clase "active"
    this.classList.add('active')

    //Obtener el contenido correspondiente segun el enlace 
    let contenido = obtenerContenido(this.textContent)

    //MOSTRAR EL CONTENIDO DEL DOM
    tituloElemento.innerHTML = contenido.titulo
    subTituloElemento.innerHTML = contenido.subtitulo
    parrafoElemento.innerHTML = contenido.parrafo 
    precioElemento.innerHTML = contenido.precio
      });
});
//FUNCIÓN PARA TRAER LA INFORMACIÓN CORRECTA DESDE CIUDADES.JS 
function obtenerContenido(enlace){
    let contenido ={
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris, 
        'Londres': londres, 
    }; 
    return contenido[enlace]; 
}