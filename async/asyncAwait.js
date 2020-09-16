async function hola(nombre) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Hola, ' + nombre);
        resolve(nombre);
      }, 1500);
    });
  }
  
  async function hablar(nombre) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`${nombre}: Bla bla bla...`);
        resolve(nombre);
      }, 1000);
    });
  }
  
  async function adios(nombre) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Adios ${nombre}`);
        resolve(nombre);
      }, 1000);
    });
  }

  async function main(){
      let nombre = await hola('Daniel');
      await hablar(nombre);
      await hablar(nombre);
      await hablar(nombre);
      await hablar(nombre);
      await adios(nombre);
  }

  main();