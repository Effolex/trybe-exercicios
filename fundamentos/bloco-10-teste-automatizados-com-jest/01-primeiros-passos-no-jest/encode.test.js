const encode = require('./encode');

describe('Para as funções encode e decode crie os seguintes testes:', () => {
  test('1- Teste se encode e decode são funções;', () => {
    expect(typeof encode).toBe('function');
  })

  test('2- teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toBe('12345');
  })

  test('3- Teste se as demais letras/números não são convertidos para cada caso;', () => {
    expect(encode('bcdfghjklmnpqrstvxyz')).toBe('bcdfghjklmnpqrstvxyz');
  })

  test('4- Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('bcdfghjklmnpqrstvxyz').length).toBe('bcdfghjklmnpqrstvxyz'.length);
  })
})