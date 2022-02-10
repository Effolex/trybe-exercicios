const readline = require('readline-sync');

const peso = readline.questionFloat('Qual seu peso?');
const altura = readline.question('Qual sua altura?');


console.log(`Seu é imc é ${ peso / ((altura/100)**2) }`);
