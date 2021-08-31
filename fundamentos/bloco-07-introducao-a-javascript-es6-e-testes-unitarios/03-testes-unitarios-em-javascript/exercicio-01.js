const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
assert.strictEqual(sum(4,5) === 9,true,'Valor esperado de 4+5=0');
assert.strictEqual(sum(0,0),0,'Valor esperado de 0+0=0');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

assert.deepStrictEqual(myRemove([1,2,3,4],3),[1,2,4], 'retorno invalido');
assert.notDeepStrictEqual(myRemove([1,2,3,4],3),[1,2,3,4], 'retorno invalido');


const summation = (number) => {
  const summation = 0;
  
  for (let index = 0; index <= number; index++) {
    summation += index;
    
  }
  
  console.log(summation);
}
assert.equal(summation(10), 50);