const os = require('os');
console.clear();
// saber versión de nuesto s.o 32 o 64
console.log('os.arch() :>> ', os.arch());

// saber la plataforma.
console.log('os.platform() :>> ', os.platform());

// Saber los cpu's
console.log('os.cpus() :>> ', os.cpus());

// Cantidad de cpu's
console.log('os.cpus().length :>> ', os.cpus().length);

// Errores de sistemas
// console.log('os.constants :>> ', os.constants);

const SIZE = 1024;
function kb(bytes) {
  return bytes / SIZE;
}
function mb(bytes) {
  return kb(bytes) / SIZE;
}
function gb(bytes) {
  return mb(bytes) / SIZE;
}

// Memoria libre
console.log('os.freemem() :>> ', os.freemem());
console.log('os.freemem() :>> ', kb(os.freemem()));
console.log('os.freemem() :>> ', mb(os.freemem()));
console.log('os.freemem() :>> ', gb(os.freemem()));

// Memoria total
console.log('os.totalmem() :>> ', gb(os.totalmem()));

// directorios
console.log('os.homedir() :>> ', os.homedir());
console.log('os.tmpdir() :>> ', os.tmpdir());

console.log('os.hostname() :>> ', os.hostname());

//Interfaces de red
console.log('os.networkInterfaces() :>> ', os.networkInterfaces());