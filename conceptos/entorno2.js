// utilizamos dotenv para variables de entorno desde archivo.
require('dotenv').config()

console.log('Hola: ' + process.env.SALUDO);
console.log('Mi web es: ' + process.env.WEB);