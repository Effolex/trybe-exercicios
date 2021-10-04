// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => console.log(data));
};

const promise = new Promise((resolve, reject) => {
  const randNumber = []
  for (let index = 0; index < 10; index++) {
    const element =Math.floor(Math.random*51);
    randNumber.push(element**2);
  }
  const sum = randNumber.reduce((sum,num) => sum += num);
  if( sum < 8000) {
    resolve(sum);
  }
  reject();

})
.then(() => console.log('Promise resolvida'))
.then((num) => [num/2, num/3, num/5, num/10])
.then(() => )
.catch(() => console.log('Promise rejeitada'));

window.onload = () => fetchJoke();