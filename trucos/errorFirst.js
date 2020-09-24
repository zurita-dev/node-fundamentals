const { setTimeout } = require('timers');

function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (e) {
      callback(e);
    }
  }, 1000);
}

try {
   asincrona((err, dato) => {
  if (err) {
    // console.log('err :>> ', err);
    throw err;
    return false;
  }
  console.log('Todo ha ido bien, mi data es', dato);
}); 
} catch (error) {
    console.log('error :>> ', error);
}

