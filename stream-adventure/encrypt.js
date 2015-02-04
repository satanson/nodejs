var crypto = require('crypto');
process.stdin.pipe(
  crypto.createCipher('aes256',process.argv[2])
).pipe(process.stdout);
