const decode = require('./decode');

describe('Para as funções decode e decode crie os seguintes testes:', () => {
  test('1- Teste se decode e decode são funções;', () => {
    expect(typeof decode).toBe('function');
  })

  test('2- teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;', () => {
    expect(decode('12345')).toBe('aeiou');
  })

  test('3- Teste se as demais letras/números não são convertidos para cada caso;', () => {
    expect(decode('bcdfghjklmnpqrstvxyz')).toBe('bcdfghjklmnpqrstvxyz');
  })

  test('4- Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(decode('bcdfghjklmnpqrstvxyz').length).toBe('bcdfghjklmnpqrstvxyz'.length);
  })
})