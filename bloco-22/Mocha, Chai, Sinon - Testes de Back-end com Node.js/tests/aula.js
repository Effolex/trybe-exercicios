const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');

const fetchGatinhos = require('../posNeg.js');

sinon.stub(axios, 'get').returns(Promise.resolve({
  url: '222.jpg',
  width:200,
  length: 200,
}))

describe('Testa a funcao, ', () => {
  it('se passado algo diferente de numero, retorna erro', () => {
    expect(()=> fetchGatinhos('0')).to.throws();
  })
  
  it('se ao passar 0, retorna um array vazio', () => {
    const response = fetchGatinhos(0);
    expect(response).to.be.deep.equal([]);
  })
  it('Se ao passar N, retorna o numero esperado', () => {
    const response = posNeg(2);
    expect(response.length).to.be.equals(2);
    response.forEach((resp) => {
      const keys = Object.keys(resp);
      expect(keys.includes('url')).to.be.true;
      expect(resp.url.includes('.jpg')).to.be.true;
      expect(keys.includes('width')).to.be.true;
      expect(resp.width).to.be.a('number');
      expect(keys.includes('length')).to.be.true;
      expect(resp.length).to.be.a('number');
    })
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