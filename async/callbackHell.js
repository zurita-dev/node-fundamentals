function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log('Hola, ' + nombre);
    miCallback(nombre);
  }, 1500);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log('bla bla bla...');
    callbackHablar();
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log('Adios, ', nombre);
    otroCallback();
  }, 1000);
}

function conversation(nombre, veces, callback) {
  if (veces > 0) {
    hablar(() => {
      conversation(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

// hola('Daniel', (nombre) => {
//     adios(nombre,()=>{
//         console.log('Terminamos');
//     })
// })

// --
console.log('Iniciando proceso...');
hola('Daniel', function (nombre) {
  conversation(nombre, 3, () => {
    console.log('Proceso terminado');
  });
});

// hola('Daniel', (nombre) => {
//   hablar(() => {
//     hablar(() => {
//       hablar(() => {
//         adios(nombre, () => {
//           console.log('Terminando proceso...');
//         });
//       });
//     });
//   });
// });
