process.on('beforeExit', () => {
  console.log('El proceso va a acabar :>> ');
});

process.on('exit', () => {
  console.log('El proceso acabó :>> ');
  setTimeout(() => {
    console.log('Esto no se ejecutará nunca');
  }, 0);
});

setTimeout(() => {
    console.log('Esto si ejecutará');
  }, 4000);

// Promesas sin catch
// process.on('unhandledRejection');

// errores sin catch
process.on('uncaughtException', (error, origen) => {
  console.log('Vaya se nos ha olvidado capturar un error');
  console.error('error :>> ', error);
});

// functionQueNoExiste(); // func para probar error

console.log('Esto si el error no se recoje no sale');
