// let saludo = 'Hola';

// Parametro OR
let saludo = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB;

console.log('Hola: ' + saludo);
console.log('Mi web es: ' + web);

// Para correr:
// NOMBRE = Daniel node conceptos/entorno.js
// $env:NOMBRE="Daniel"; $env:WEB = "SoyHacker.com";node conceptos/entorno.js

// Soluciones rápidas Windows 10:

// ---- Si deseas usar Powershell:

// $env:NOMBRE=“tuNombre” ; node entorno.js
// ( de ese modo es posible enviar los 2 comandos a las vez)

// ----- usar CMD o cambiar Visual a CMD

// desplegar las opciones de consola de Visual Studio Code.
// click en “seleccionar el shell predeterminado”
// seleccionar “command prompt”
// SET NOMBRE=tuNombre & node entorno.js
// ( de ese modo es posible enviar los 2 comandos a las vez)
