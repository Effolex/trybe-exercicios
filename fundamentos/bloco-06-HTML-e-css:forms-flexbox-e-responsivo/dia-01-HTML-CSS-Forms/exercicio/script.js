const selectEstado = document.querySelector('#select-estado');
const buttonSubmit = document.querySelector('#submit');
// https://gist.github.com/edirpedro/69c0974613de044ebba6dc7fd0c5b732
// link dos estados
const estados = [
	['AC', 'Acre'],	['AL', 'Alagoas'],	['AP', 'Amapá'],	['AM', 'Amazonas'],	['BA', 'Bahia'],	['CE', 'Ceará'],	['DF', 'Distrito Federal'],	['ES', 'Espirito Santo'],	['GO', 'Goiás'],	['MA', 'Maranhão'],	['MS', 'Mato Grosso do Sul'],	['MT', 'Mato Grosso'],	['MG', 'Minas Gerais'],	['PA', 'Pará'],	['PB', 'Paraíba'],	['PR', 'Paraná'],	['PE', 'Pernambuco'],	['PI', 'Piauí'],	['RJ', 'Rio de Janeiro'],	['RN', 'Rio Grande do Norte'],	['RS', 'Rio Grande do Sul'],	['RO', 'Rondônia'],	['RR', 'Roraima'],	['SC', 'Santa Catarina'],	['SP', 'São Paulo'],	['SE', 'Sergipe'],	['TO', 'Tocantins']
];

for (const iterator of estados) {
  const option = document.createElement('option');
  option.textContent = iterator[1];
  option.value = iterator[0];
  selectEstado.appendChild(option);
}


function teste(event){
  event.preventDefault();
  const formulario = document.getElementById('curriculo');

  for (let index = 0; index < formulario.length; index++) {
    const element = formulario[index];
    console.log('elemento:',element);
    console.log(element.value);
  }
}

buttonSubmit.addEventListener('click', teste);