function decode(string) {
  let arrayDeOpcoes = ['a', 'e', 'i', 'o', 'u'];

  return [...string]
    .reduce((acc, letter) => {
      if (parseInt(letter, 10)) { // C - 1
        return acc += arrayDeOpcoes[parseInt(letter, 10) - 1];
      }
      return acc += letter;
    }, '');
}

module.exports = decode;