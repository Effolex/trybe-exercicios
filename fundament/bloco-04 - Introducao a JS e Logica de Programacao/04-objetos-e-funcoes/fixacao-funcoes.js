/*
Pegue cada um dos exercícios da primeira parte das nossas aulas de JavaScript e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções. Por exemplo:
*/
//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

function calculadora(a, b, sinal) {
  switch (sinal) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    case '%':
      return a % b;
    default:
      return false;
  }
}

//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

function maiorNumero(arrayNumeros) {
  let maior = 0;
  arrayNumeros.forEach(numero => {
    if (numero > maior)
      maior = numero;
  });

  return maior;
}

//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

function positivoOuNegativo(numero) {
  return (numero >= 0) ? true : false;
}

//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

function angulosTriangulo(anguloA, anguloB, anguloC) {
  if (positivoOuNegativo(anguloA) && positivoOuNegativo(anguloB) && positivoOuNegativo(anguloC))
    return (anguloA + anguloB + anguloC) == 180 ? true : false;
  else
    return false;
}

//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz
function pecaXadrez(peca) {
  switch (peca.toLowerCase()) {
    case 'peao':
      return 'peao move coluna';

    case 'torre':
      return 'torre move linha e coluna';
    case 'bispo':
      return 'bispo move nas diagonais'
  }
}

//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

function porcentagemLetra(nota) {
  switch (true) {
    case (nota < 0 || nota > 100):
      return 'Nota Invalida';
    case (nota < 50):
      return 'F';
    case (nota < 60):
      return 'E';
    case (nota < 70):
      return 'D';
    case (nota < 80):
      return 'C';
    case (nota < 90):
      return 'B';
    default:
      return 'A';
  }
}

//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

function possuiPar(numeroArray) {
  let contadorPar = 0;
  numeroArray.forEach(numero => {
    if (numero % 2 == 0)
      contadorPar++;
  });

  return (contadorPar > 0) ? true : false;
}

//Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

function lucro(custo, venda) {

  return (custo >= 0 && venda >= 0) ? venda - (custo * 1.20) : false;

}

//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
/*
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
*/

function inss(bruto) {
  let liquido = 0;
  let final = 0;

  if (bruto <= 1556.94) {
    liquido = bruto - (bruto * 0.08);
  } else if (bruto <= 2594.92) {
    liquido = bruto - (bruto * 0.09);
  } else if (bruto <= 5189.82) {
    liquido = bruto - (bruto * 0.11)
  } else {
    liquido = bruto - (570.88)
  }

  if (liquido <= 1903.98) {
    final = liquido;
  } else if (liquido <= 2826.65) {
    final = liquido - ((liquido * 0.075) - 142.80);
  } else if (liquido <= 3751.05) {
    final = liquido - ((liquido * 0.15) - 354.80);
  } else if (liquido <= 4664.68) {
    final = liquido - ((liquido * 0.225) - 636.13);
  } else {
    final = liquido - ((liquido * 0.275) - 869.36);
  }
  return final;
}


console.log('calculadora: ', calculadora(2, 2, '*'));
console.log('maior numero', maiorNumero([1, 123, 2, 45, 12]));
console.log('positiov ou negativo: ', positivoOuNegativo(100));
console.log('xadrez', pecaXadrez('PEAO'));
console.log(porcentagemLetra(101));
console.log('Possui Par:', possuiPar([1, 3, 5, 5, 3, 1, 3, 9]));
console.log('lucro: ', lucro(100, 122));
console.log('inss 3000',inss(3000));