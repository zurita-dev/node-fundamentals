function callError() {
  createError();
}

function createError() {
  return 3 + z;
}

function seRompeAsincrona(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (error) {
      console.error('error :>> ', error);
      cb(error);
    }
  }, 1000);
}

try {
  //   callError();
  //   createError();
  seRompeAsincrona((error) => {
    console.error('error :>> ', error.message);
  });
} catch (error) {
  //   console.clear();
  console.warn(error);
}
