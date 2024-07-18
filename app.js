let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeromaximo = 10;

function asignarTextElemento(elemento, texto){
    let elemntoHTML = document.querySelector(elemento);
    elemntoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1)? 'vez' : 'veces'}`);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextElemento('p', 'El número sercreto es menor!');    
        }else{
            asignarTextElemento('p', 'El número sercreto es mayor!');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#ValorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeromaximo)+1;

    // console.log(numeroGenerado);
    // console.log(listaNumerosSorteados);
    //si ya generamos todos los números
    if(listaNumerosSorteados.length == numeromaximo){
        asignarTextElemento('p', 'Ya se asignaron todos los números posibles.');
        return;
    }else{
        //si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextElemento('h1', 'Juego del número secreto!');
    asignarTextElemento('p', `Indica un número del 1 al ${numeromaximo}`);
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();

    //indicar mensaje de intervalos de número
    //generar el número aleatorio
    //inicializar el número de intentos
    condicionesIniciales();

    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();