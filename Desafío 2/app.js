function holaMundo(){
    console.log("Hola mundo");
}

function bienvenido(nombre){
    console.log("Hola, "+ nombre + "!");
}

function doble(numero){
    let doble = numero*2;
    console.log(doble);
}

function promedio(num1, num2, num3){
    promedio = (num1 + num2 + num3) / 3;
    console.log(promedio);
}

function evaluar(num1, num2){
    if(num1 > num2){
        console.log(`${num1} es mayor que ${num2}`);
    }else{
        console.log(`${num2} es mayor que ${num1}`);
    }
}

function cuadrado(numero){
    numero = numero*numero;
    console.log(numero);
}