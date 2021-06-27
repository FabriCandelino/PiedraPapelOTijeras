let nombre;

function nombrePeticion() {
    nombre = prompt('What is your name?');
}

nombrePeticion();

// puntuación

let usuario1 = 0;
let usuario2 = 0;

// se asigna piedra, papel y tijera
const piedra = "rcok";
const papel = "paper";
const tijeras = "scissors";
const invalido = "invalid";

// se definen las variables "eleccion"
let usuario1Eleccion;
let usuario2Eleccion;

function usuario1Peticion () {
    usuario1Eleccion = prompt(`${nombre}: ${usuario1} | Bot: ${usuario2}
Write rock, paper or scissors`);
}

function usuario2Peticion () {
    usuario2Eleccion = Math.random();
}

const $button = document.querySelector(".jugar");

const $a = document.querySelector("a");


function remove() {
    $a.classList.remove("disabled")
}

function update() {
    $a.classList.add("update-page")
}

$button.addEventListener('click', function(){
    while (nombre == null || nombre == "") {
        nombre = 'You';
    } 
    while (usuario1 < 3 && usuario2 < 3) {

        // se le pide opcion al usuario (la persona)
    
        usuario1Peticion();
    
        //  opcion aleatoria del bot
        
        usuario2Peticion();
    
        // se transofrma la eleccion en elemento de juego (piedra, etc)
    if (usuario1Eleccion.toLowerCase() === "rock") {
        usuario1Eleccion = piedra;
    } else if (usuario1Eleccion.toLowerCase() === "paper") {
        usuario1Eleccion = papel;
    } else if (usuario1Eleccion.toLowerCase() === "scissors") {
        usuario1Eleccion = tijeras;
    } else {
        usuario1Eleccion = invalido;
        console.log(`${usuario1Eleccion} is invalid`);
    }
    
    // se transforma el numero aleatorio que le toca a elemento de juego 
    if (usuario2Eleccion < 0.3333333333333333) {
        usuario2Eleccion = piedra;
    } else if (usuario2Eleccion >= 0.3333333333333333 && usuario2Eleccion < 0.6666666666666666) {
        usuario2Eleccion = papel;
    } else {
        usuario2Eleccion = tijeras;
    }

    //  invalido
    
    // Empate
    if (usuario1Eleccion == usuario2Eleccion) {
        alert(`${usuario1Eleccion} vs ${usuario2Eleccion}: It's a tie!
${nombre}: ${usuario1} | bot: ${usuario2}`);
    }
    
    // Punto para nosotros
    else if (usuario1Eleccion == piedra && usuario2Eleccion == tijeras) {
        usuario1++;
        alert(`${usuario1Eleccion} vs ${usuario2Eleccion}: Point for you!
${nombre}: ${usuario1} | Bot: ${usuario2}`);
    } else if (usuario1Eleccion == tijeras && usuario2Eleccion == papel) {
        usuario1++;
        alert(`${usuario1Eleccion} vs ${usuario2Eleccion}: Point for you!
${nombre}: ${usuario1} | Bot: ${usuario2}`);
    } else if (usuario1Eleccion == papel && usuario2Eleccion == piedra){
        usuario1++;
        alert(`${usuario1Eleccion} vs ${usuario2Eleccion}: Point for you!
${nombre}: ${usuario1} | Bot: ${usuario2}`);
    }
    
    // punto para el bot
    else if (usuario1Eleccion == tijeras && usuario2Eleccion == piedra) {
        usuario2++;
        alert(`${usuario1Eleccion} vs ${usuario2Eleccion}: Point for Bot!
${nombre}: ${usuario1} | Bot: ${usuario2}`);
    }
    else if (usuario1Eleccion == papel && usuario2Eleccion == tijeras) {
        usuario2++;
        alert(`${usuario1Eleccion} vs ${usuario2Eleccion}: Point for Bot!
${nombre}: ${usuario1} | Bot: ${usuario2}`);
    }
    else if (usuario1Eleccion == piedra && usuario2Eleccion == papel) {
        usuario2++;
        alert(`${usuario1Eleccion} vs ${usuario2Eleccion}: Point for Bot!
${nombre}: ${usuario1} | Bot: ${usuario2}`);
    } else {
        alert("It looks like you wrote something wrong...");
    }
    }

    remove();
    update();
});


