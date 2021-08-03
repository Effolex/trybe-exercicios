//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

//eu não queria ter que converter pra array ( mesmo que eu saiba como)
//entao resolvi fazer de forma diferente e usar recursion

function palindromo(palavra) {
  return (palavra == reverse(palavra, palavra.length)) ? true : false

}

function reverse(string, pos) {
  return (pos == 0) ? string.charAt(pos) : string.charAt(pos) + reverse(string, pos - 1);
}

let palavra = 'arara';
console.log(palindromo(palavra));

//2, 3- Crie uma função que receba um array de inteiros e retorne o índice do maior ou menor valor.

function indiceMaiorOuMenorIndice(array, key) {
  let comparador = [array[0], 0];
  switch (key.toLowerCase()) {
    case 'maior':
      array.forEach((numero, index) => {
        if (numero > comparador[0]) {
          comparador[0] = numero;
          comparador[1] = index;
        }

      });
      return comparador[1];
    case 'menor':
      array.forEach((numero, index) => {
        if (numero < comparador[0]) {
          comparador[0] = numero;
          comparador[1] = index;
        }

      });
      return comparador[1];

    default:
      break;
  }
}

let arrayCriado = [9, 2, 3, 4, 5, 7, 8, 3, 2, 1]
console.log('maior indice', indiceMaiorOuMenorIndice(arrayCriado, 'maior'));
console.log('menor indice', indiceMaiorOuMenorIndice(arrayCriado, 'menor'));

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorQntdCaracter(array) {
  let comparador = [0, ''];
  array.forEach(palavra => {
    if (palavra.length > comparador[0]) {
      comparador[0] = palavra.length;
      comparador[1] = palavra;
    }
  });
  return comparador[1];
}
let tester = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(maiorQntdCaracter(tester));

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function maiorRepeticaoNum(array, arPos, comparadorIndexNum = [0, 0]) {
  let arrayFiltrado = array.filter((elemento, index) => {
    if (elemento == arPos) {
      return elemento;
    }
  });

  if (arrayFiltrado.length > comparadorIndexNum[0]) {
    comparadorIndexNum[0] = arrayFiltrado.length;
    comparadorIndexNum[1] = arrayFiltrado[0];
  }

  if (arrayFiltrado.length < array.length) {
    let ArraySemFiltrado = array.filter((elemento, index) => {
      if (elemento != arPos) {
        return elemento;
      }
    });
    return maiorRepeticaoNum(ArraySemFiltrado, ArraySemFiltrado[0], comparadorIndexNum);
  } else {
    return comparadorIndexNum[1];
  }


}

let teste = [2, 3, 2, 5, 8, 2, 3, 8, 8, 8, 8];
console.log(maiorRepeticaoNum(teste));

// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function somaTodos(numero) {
  return (numero != 1) ? numero + somaTodos(numero - 1) : numero;
}

console.log(somaTodos(5));

function fimDaString(string = '', string2 = '') {
  return string.endsWith(string2);
}

let pal = 'trybe';
let pal2 = 'yb';

console.log(fimDaString(pal, pal2));

//(Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
/*codigo que lida com calculo de numeros Romanos */
function numRomando(caracter) {
  if (caracter) {
    switch (caracter.toUpperCase()) {
      case 'I':

        return 1;
      case 'V':

        return 5;
      case 'X':

        return 10;
      case 'L':

        return 50;
      case 'C':

        return 100;
      case 'D':

        return 500;
      case 'M':
        return 1000;
      default:
        return false;
    }

  }
}

function calculaRomano(stringNotArray) {
  let string = stringNotArray.split('');


  let valorTotal = 0;
  string.forEach((element, index, _string) => {
    if (numRomando(_string[index - 1]) < numRomando(element) && index - 1 >= 0) {
      if (numRomando(_string[index - 2]) < numRomando(element) && numRomando(_string[index - 1]) < numRomando(element) && index - 2 >= 0) {

        valorTotal += (numRomando(element) - (numRomando(_string[index - 1]) + numRomando(_string[index - 2])));
      } else {
        valorTotal += (numRomando(element) - numRomando(_string[index - 1]));
      }
    } else if ((numRomando(element) >= numRomando(_string[index + 1])) || (index == _string.length - 1)) {
      valorTotal += numRomando(element);
    }
  });
  return valorTotal;
}

console.log('resultado: ', calculaRomano('MCMXCIX'));

//2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

function vetorDePar(vector) {
  let array1 = [];
  vector.forEach((elemento) => {
    elemento.forEach(elemento2=>{
      if(elemento2 % 2 == 0){
        array1 += elemento2;
      }
    });
  });
  return array1.split('');
}

let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];
console.log(vetorDePar(vector));



const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

let basketZin =  ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'];

function basketF(basket, string = ' '){
  let pos = basket[0];
  let arrayBasket = basket.filter((fruta,_basket)=>{
    if(fruta == pos)
     return fruta;
  });
  let numeroDeItem = arrayBasket.length;
  let arrayBasketSem = basket.filter((fruta,_basket)=>{
    if(fruta != pos)
    return fruta;
  });


  if(numeroDeItem == basket.length){
    string += numeroDeItem + " " + pos;
    //string += string.concat(numeroDeItem.toString(), ' ',pos.toString() );
    return string;
  }else{
    string+= numeroDeItem + ' ' + pos + basketF(arrayBasketSem);
    return string;
  }
}

console.log(basketF(basket));

