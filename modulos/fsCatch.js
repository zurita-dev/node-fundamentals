// Daniel Zurita

const fs = require('fs').promises;

async function read(path) {
  const archivo = await fs.readFile(path, 'utf-8');
  console.log(archivo);
}

async function write(path, data) {
  await fs.writeFile(path, data, 'utf-8');
}

async function deleteFile(path) {
  await fs.unlink(path);
}

const path = `${__dirname}/file.txt`;

console.log('Start');
write(path, `Hello World, I'm a new file.`).catch((error) => console.log('error :>> ', error));
read(path).catch((error) => console.log('error :>> ', error));
console.log('End');

// Inicio
// Fin
// Hello World, I'm a new file.
