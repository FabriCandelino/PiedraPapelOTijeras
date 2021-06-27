// let respuesta = prompt("ingrese un número")
// numero = Number(respuesta)

// if (numero % 2 == 0){
//     alert("goya")
// } else {
//     alert("no tan goya")
// }

// let respuesta = prompt("ingrese un número")
// let respuesta2 = prompt("ingrese otro número")
// numero = Number(respuesta, 10)
// numero2 = Number(respuesta2, 10)

// if (numero % numero2 == 0){
//     alert("goya")
// } else {
//     alert("no tan goya")
// }

// const userUsuario = "rodrigo";
// let usuario = prompt("ingrese su usuario").toLowerCase;
// const contraseña = "zumbini";
// let userContraseña = prompt("ingrese su contraseña").toLowerCase;

// if (usuario === userUsuario && contraseña === userContraseña){
//     alert("goya");
// } else {
//     alert("no tan goya");
// }

// let nombre = prompt("ingrese su nombre").toLowerCase()
// let edad = Number(prompt("ingrese su edad"), 10)
// const clave = "suono".toLowerCase()

// if (edad === 18){
//     claveIngresada = prompt("ingresar clave").toLowerCase()
//     if (claveIngresada === clave){
//         alert("goya")
//     } else {
//         alert("no tan goya")
//     }
// } else {
//     alert("mogoliclo")
// }


const nombres = ["Juan", "Pedro", "Wally", "Sofía", "Amelia", "Estefanía"];

nombres.push(prompt("ingrese su nombre para conocer a su grupo"));

document.write(`Bienvenido ${nombres[6]}`);

