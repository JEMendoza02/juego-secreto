let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);
let titulo = document.querySelector('h1');
titulo.innerHTML = "Juego del numero secreto";

let p1 = document.querySelector('p');
p1.innerHTML = "Ingresa un numero del 1 al 10";

function intento(){
    let numUsuario = document.getElementById("valorUsuario").value;
    console.log(numUsuario);
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    // generamos un número aleatorio entre 1 y 100 
    return Math.floor(Math.random() * (10)) + 1;
}

asignarTextoElemento('p','Juego del numero secreto');
asignarTextoElemento('p','Indica un numero del 1 al 100');