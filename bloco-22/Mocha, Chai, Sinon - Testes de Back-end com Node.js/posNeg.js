function posNeg(number) {
  if( typeof number !== 'number')
    return "o valor deve ser um número";
  
  if(!number) return 'neutro';

  return (number > 0 ) ? 'positivo'
  : 'negativo';
}

module.exports = posNeg;