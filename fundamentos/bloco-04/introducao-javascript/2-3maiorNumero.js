
function rNumero(max) {
    let numero = Math.floor(Math.random() * max);
    return numero
}

function lista() {
    let listaL = [];

    let tamanho = rNumero(10);
    for (let index = 0; index < tamanho; index++) {
        listaL.push(rNumero(5));

    }



    return listaL;
}




let listaL = [];
let listaB = [];
let listaC = [];
listaL = lista();
let maior = 0;
let soma = 0;

listaL.forEach((numero, index) => {
    listaB.push(
        numero * ((index == listaL.length - 1) ? 2 : listaL[index+1])
    );

    if (numero > maior) {
        maior = numero;
    }
});

for (let index = 1; index < listaL.length-1; index++) {
    listaC.push(listaL[index] * listaL[index-1]);
}

listaC.push(listaL[listaL.length-1] * 2);

console.log('Maior numero: ', maior);
console.log('lista L: ', listaL);
console.log('lista B: ', listaB);
console.log('lista C: ', listaC);
