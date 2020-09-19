// Daniel Zurita
require('dotenv').config();
const http = require('http');

http.createServer(router).listen(process.env.PORT);

function router(req, res) {
  console.log('Nueva petición :>> ', req.url);
  res.writeHead(201, { 'Content-Type': 'text/plain' });
  switch (req.url) {
    case '/saludo':
      res.write('Conexión exitosa.');
      break;
    default:
      res.write('404');
      break;
  }
  res.end();
}

console.log(`Escuchando Http en el puerto: ${process.env.PORT}`);
