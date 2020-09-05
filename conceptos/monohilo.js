// Proceso unico que comienza y termina
console.log('Hola ¡Mundo!');

let i = 0;
setInterval(function () {
  console.log(i);
  i++;
  // Si se produce un error, detiene todo el proceso.
//   if (i === 5) {
//     var a = 3 + z;
//   }
  //   console.log('Sigo activo');
}, 1000);

console.log('Segunda instrucción');