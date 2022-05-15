//Então, pessoal, como vocês viram, objetos também são variáveis, porém eles podem organizar estruturas mais complexas.

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

//1 - Crie um objeto player contendo as variáveis listadas abaixo.

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  }
};

//2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

console.log('A jogadora ', player.name, player.lastName, 'tem ', player.age, ' anos de idade');

//3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

//4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log('A jogadora', player.name, player.lastName, 'foi eleita a melhor do mundo por',player.bestInTheWorld.length, 'vezes')

//5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

//tentei fazer utilizando for in sem ter visto o conteudo, só pesquisando na documentacao.
let frase = 'A jogadora possui ';
for (const medal in player.medals) {
  if(medal == 'golden'){
    frase += medals.golden + ' medalhas de ouro';
    frase += ' e ';
  }
  if(medal == 'silver'){
    frase += medals.golden + ' medalhas de prata';
  }
}

console.log(frase);

//Agora veremos uma variação do laço for , que nos garante facilidade ao lidar com objetos.
