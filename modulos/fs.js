const fs = require('fs').promises;

const readFile = async () => {
  await fs
    .readFile('./modulos/archivo.txt', 'utf8')
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};

readFile();
