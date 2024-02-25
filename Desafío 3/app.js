let listaGenerica = [];
let listaNumeros = [8,5,10,9,8];
let contador = 0;

let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
lenguajesDeProgramacion.push('Java','Ruby','GoLang');

function imprimirLista(){
    console.log(lenguajesDeProgramacion);
}
function imprimirListaReversa(){
    for(let i = lenguajesDeProgramacion.length-1; i >= 0; i--){
        console.log(lenguajesDeProgramacion[i]);
    }
}

function promedio(){
    for(let i = 0; i < listaNumeros.length; i++){
         contador = contador + listaNumeros[i];
    }
    promedio = contador / listaNumeros.length;
    console.log(promedio);
}

function existe(numero) {
    const index = listaNumeros.findIndex(num => num === numero);
  
    if (index !== -1) {
      console.log(`El número ${numero} está en la posición ${index} del array.`);
    } else {
      console.log("No existe el número en la lista");
    }
}
function cuadrado(listaNumeros){
    for(let i = 0; i < listaNumeros.length; i++){
        contador = listaNumeros[i] * listaNumeros[i];
        listaGenerica.push(contador);
    }
    console.log(listaGenerica);
}