const { expect } = require('chai');
const fs = require('fs');

const posNeg = require('../posNeg.js');

describe('Testa se ao passar um numero, ', () => {
  it('que é uma string, o retorno é o esperado', () => {
    const response = posNeg('0');
    expect(response).to.be.equals('o valor deve ser um número')
  })
  
  it('retorna uma string', () => {
    const response = posNeg(2);
    expect(response).to.be.a('string');
  })
  it('o numero é positivo', () => {
    const response = posNeg(2);
    expect(response).to.be.equals('positivo')
  })
  it('o numero é negativo', () => {
    const response = posNeg(-2);
    expect(response).to.be.equals('negativo')
  })
  it('o numero é neutro', () => {
    const response = posNeg(0);
    expect(response).to.be.equals('neutro')
  })
})