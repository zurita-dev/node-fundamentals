const example = 'Hello world';
const table = [
  { name: 'Daniel', age: 26 },
  { name: 'Paula', age: 27 },
];

console.clear(); //Limpia la consola.
console.time(); // inicia un cronometro en ms.
console.group('Ejemplos de funciones en consola:'); // permite agrupar errores mediante identación.
console.log(example); // recibe cualquier tipo y lo muestra en el consola.
console.info(example); // es equivalente a log pero es usado para informar.
console.error(example); //es equivalente a log pero es usado para errores.
console.warn(example); //es equivalente a log pero es usado para warning.
console.table(table); //muestra una tabla a partir de un objeto.

console.count('Contador'); // inicia un contador autoincremental.
console.count('Contador'); // inicia un contador autoincremental.
console.countReset('Contador'); // reinicia el contador a 0.
console.count('Contador'); // inicia un contador autoincremental.

console.groupEnd('Ejemplos de funciones en consola: '); // finaliza la agrupación.
console.timeEnd(); // Finaliza el cronometro.
