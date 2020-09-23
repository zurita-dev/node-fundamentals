// let buffer = Buffer.alloc(4);
// let buffer = Buffer.from([1, 2, 5]);
let buffer = Buffer.from('Hola');

console.log('buffer :>> ', buffer);

let abc = Buffer.alloc(26);
for (let i = 0; i < abc.length; i++) {
    abc[i] = i + 97;
}

console.log('abc :>> ', abc);
console.log('abc.toString() :>> ', abc.toString());