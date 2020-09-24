console.time('Todo');
let suma = 0;
console.time('bucle');
for (let i = 0; i < 10000000; i++) {
  suma += 1;
}
console.timeEnd('bucle');

let suma2 = 0;
console.time('bucle2');
for (let j = 0; j < 10000000; j++) {
  suma2 += 1;
}
console.timeEnd('bucle2');

console.time('asincrono');

asincrona().then(() => console.timeEnd('asincrono'));

console.timeEnd('Todo');

console.log('Comienza el proceso asincrono');
function asincrona() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Termina el proceso asincrono');
    }, 1000);
  });
}
