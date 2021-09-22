function encode(string = '') {
  let arrayDeOpcoes = ['a', 'e', 'i', 'o', 'u'];

  return [...string]
    .reduce((acc, letter) => {
      if (arrayDeOpcoes.includes(letter)) { // C - 1
        return acc += ( 1 + arrayDeOpcoes.indexOf(letter) );
      }
      return acc += letter;
    }, '');
}

module.exports = encode;