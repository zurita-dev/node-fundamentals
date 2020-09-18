const { exec, spawn } = require('child_process');

console.clear();
// exec('dir /a-d',(error, stdout, sterr) => {
// exec('node modulos/consola.js',(error, stdout, sterr) => {
//   if (error) {
//     console.error('error :>> ', error);
//     return false;
//   }
//   console.log(stdout);
// });

let proceso = spawn('cmd.exe', ['/c', 'dir']);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (data) => {
  console.log('¿Está muerto?');
  console.log(proceso.killed);
  console.log(data.toString());
});

proceso.on('exit', () => {
  console.log('El proceso terminó');
  console.log(proceso.killed);
});
