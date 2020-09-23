const bcrypt = require('bcrypt');

const password = '1234Segura!';

bcrypt.hash(password, 5, (err, data) => {
  console.log('data :>> ', data);

  bcrypt
    .compare(password, data)
    .then((data) => console.log('data :>> ', data))
    .catch((err) => console.log('err :>> ', err));
});
