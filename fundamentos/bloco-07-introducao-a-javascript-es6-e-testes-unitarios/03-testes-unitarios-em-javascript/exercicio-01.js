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
let arr = [1,2,3,4];
assert.deepStrictEqual(myRemove([1,2,3,4],3),[1,2,4], 'retorno invalido');
assert.notDeepStrictEqual(myRemove([1,2,3,4],3),[1,2,3,4], 'retorno invalido');
// ?
assert.equal(arr,arr);

assert.deepStrictEqual(myRemove([1,2,3,4],5),[1,2,3,4], 'retorno invalido');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
let myarr = [1,2,3,4];
assert.deepStrictEqual(myRemoveWithoutCopy(myarr,3),[1,2,4]);

assert.notDeepStrictEqual(myRemoveWithoutCopy([1,2,3,4],3), [1,2,3,4]);


function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

assert.strictEqual(myFizzBuzz(15),'fizzbuzz');
assert.strictEqual(myFizzBuzz(5), 'buzz');
assert.strictEqual(myFizzBuzz(3),'fizz');
assert.notEqual(myFizzBuzz(2),'fizzbuzz');
assert.equal(myFizzBuzz('a'), false);


// escreva a função addOne aqui

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected1 = [32, 58, 13, 6];
const output = addOne(myArray);

function addOne(array) {
  const narr = [...array];
  for (let index = 0; index < array.length; index++) {
    narr[index] += 1;
    
  }
  return narr;
}

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected1);
assert.deepStrictEqual(myArray, unchanged);

// escreva a função wordLengths aqui

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected3 = [3, 6, 10, 5];

function wordLengths(words) {
  let array = [];
  for (const word of words) {
    array = [...array, word.length];
  }
  return array;
}
assert.strictEqual(typeof wordLengths, 'function');
const output3 = wordLengths(words);
assert.deepStrictEqual(output3, expected3);

