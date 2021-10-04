const myRemove = require('./myRemove');

describe('A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado',() => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]',() => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })
  it('Verifique se o array passado por parâmetro não sofreu alterações',() => {
    const myArray = [1, 2, 3, 4];
    myRemove(myArray, 3);
    expect(myArray).toEqual([1, 2, 3, 4]);
  })
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado',() => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
});