function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hola, ' + nombre);
      resolve(nombre);
    }, 1500);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${nombre}: Bla bla bla...`);
      resolve(nombre);
      //Ejemplo para generar un error
      //   reject('Hay un error');
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios ${nombre}`);
      resolve(nombre);
    }, 1000);
  });
}
console.log('Iniciando el proceso');
hola('Daniel')
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log('Terminando el proceso');
  })
  .catch((error) => {
    console.log(`Ha habido un error`);
    console.log(`${error}`);
  });
