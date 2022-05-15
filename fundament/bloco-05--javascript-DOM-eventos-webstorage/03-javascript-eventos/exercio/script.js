function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
/* O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li> */
function sextas(dia){
  let sextas = [4,11,18,25];
  if(sextas.includes(dia) ){
    return true;
  }
  return false;
}

function feriados(dia){
  let feriados = [24, 25, 31];
  if(feriados.includes(dia) ){
    return true;
  }
  return false;
}

function createNumberedDays(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const numberedDaysList = document.querySelector('#days');
  for(dia of dezDaysList){
    let daysLi =document.createElement('li');
    daysLi.textContent = dia;
    daysLi.classList.add('days');
    if (sextas(dia)) {
      daysLi.classList.add('friday')
    }
    if (feriados(dia)) {
      daysLi.classList.add('holiday')
    }
    numberedDaysList.appendChild(daysLi);
  }
}

createNumberedDays();

/* Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */

function feriadosBotao(string){
  let botao = document.createElement('INPUT');
  botao.setAttribute('type','button');
  botao.id = 'btn-holiday';
  botao.value = string;
  document.querySelector('.buttons-container').appendChild(botao);
}

feriadosBotao('Feriado');

/*
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
*/

let feriadoButton = document.querySelector('#btn-holiday');

function changeFeriadoColor(event){
  let feriados = document.querySelectorAll('.holiday');
  for (let dia of feriados){
    if(dia.style.background != 'lightblue'){
      dia.style.background = 'lightblue';
    }else{
      dia.style.background = 'rgb(238,238,238)'
    }
  }
}

feriadoButton.addEventListener('click',changeFeriadoColor);

/*
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/



