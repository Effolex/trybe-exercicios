function hydrate(string) {
  /*
  ok .. então, \d pega digito de 0-9
  o + depois do d, serve pra falar que vc quer pegar 1 ou mais
  e pelo que entendi o g é utilizado para procurar por tudo
  ao invez de parar na primeira match que encontra

  */
  let numeros = string.match(/\d+/g);
  let soma = numeros.reduce((sum, numero) => sum += parseInt(numero, 10), 0);

  return soma === 1 ? '1 copo de água' : `${soma} copos de água`;
}

module.exports = hydrate;