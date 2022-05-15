let numero = 5;

let numeroDeEspacos = 4;

let frase = '';


for (let i = 0; i < 5; i++) {
  for (posicao = 1; posicao <= numero; posicao++) {
    if (posicao <= numeroDeEspacos) {
      frase += ' ';
    } else {
      frase += '*';
    }
  }
  console.log(frase);
  frase = '';
  numeroDeEspacos--;
}