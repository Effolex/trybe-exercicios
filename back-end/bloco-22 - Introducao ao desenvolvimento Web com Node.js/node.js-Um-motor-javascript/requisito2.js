const fs = require('fs').promises;

const arquivo = 'simpsons.json';

fs.readFile(arquivo, 'utf8')
  .then((data) => 
    console.log(data))
  .catch((error) => {
    console.log('nao foi possivel ', error);
    process.exit(1);
  });