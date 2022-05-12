const readline = require('readline-sync');

const array = [1,2,3];
const selectedCup = Math.floor(Math.random()*4);

const index = readline.keyInSelect(array,'Onde está a bola?');



console.log(`Sua resposta está ${
  (selectedCup == array[index]) ?
  'Correta!' : `Errada, a resposta correta seria ${selectedCup}`}`);
