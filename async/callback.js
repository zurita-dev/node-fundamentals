function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log('Hola, '+nombre);
    miCallback(nombre);
  }, 1500);
}

function adios(nombre,otroCallback){
    setTimeout(() => {
        console.log('Adios, ',nombre);
        otroCallback();
    }, 1000);
}

console.log('Iniciando proceso...');

hola('Daniel',(nombre) => {
    adios(nombre, ()=> {
        console.log('Terminando proceso...');
    })
});

// hola('Daniel', () => {});
// adios('Daniel',() => {});