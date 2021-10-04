let numero = 90;

for (let index = numero - 1; index > 1; index--) {
  if (numero % index == 0) {
    console.log('nao é primo');
    return;
  }

}
console.log('é primo');