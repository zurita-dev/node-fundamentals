// Daniel Zurita

const fs = require('fs').promises;

async function read(path) {
  try {
    const file = await fs.readFile(path, 'utf-8');
    console.log(file);
  } catch (error) {
    console.log('error :>> ', error);
  }
}

async function write(path, data) {
  try {
    await fs.writeFile(path, data, 'utf-8');
  } catch (error) {
    console.log('error :>> ', error);
  }
}

async function deleteFile(path) {
  try {
    await fs.unlink(path);
  } catch (error) {
    console.log('error :>> ', error);
  }
}

const path = `${__dirname}/file.txt`;

console.log('Start');
write(path, `Hello World, I'm a new file.`);
read(path);
console.log('End');

// Inicio
// Fin
// Hello World, I'm a new file.
