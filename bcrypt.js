const bcrypt = require('bcrypt');

let password1 = bcrypt.hash('happy123', 10, function(err, hash) {
  console.log(hash);
});
