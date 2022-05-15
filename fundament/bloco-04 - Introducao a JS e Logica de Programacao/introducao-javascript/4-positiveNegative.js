let numero = Math.floor(Math.random() * 100);

let base = Math.floor(Math.random() * 2)  < 1 ? -1 : 1;

console.log('numero ', numero);
console.log('modificador ', base);
console.log('resultado ', numero*base);
console.log('é positivo ? ', ((numero*base) > 0 ? true : false));