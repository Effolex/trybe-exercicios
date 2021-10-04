const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
*/

input.addEventListener('keypress',function(event){
  if(event.key === 'Enter'){
    console.log(input.value);
    let classe = document.getElementsByClassName('tech');
    for(elemento of classe){
      elemento.innerText = input.value;
    }
  }
});

input.addEventListener('blur',function(){
  let classe = document.getElementsByClassName('tech');
  for(elemento of classe){
    elemento.innerText = input.value;
  }
});


/*
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
*/
secondLi.addEventListener('dblclick', redireciona);

function redireciona(event){
  window.location.href = 'https://effolex.github.io/portfolio/';
}
/*
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/
myWebpage.addEventListener('mouseover',(event)=>myWebpage.style.backgroundColor = 'red');
myWebpage.addEventListener('mouseout',(event)=>myWebpage.style.backgroundColor = '');


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.