let n = 7;
let frase = '';

let espacos = n; //5

for (let i = 0; i < n; i++) {
  for (let j = 0; j <= n; j++) {
    if (j < espacos) {
      frase += ' ';
    } else {
      frase += '*';
    }
  }
  console.log(frase);
  frase = '';
  espacos--;

}

let meio = Math.floor(n / 2) + 1;
asteriscos = '';
console.log('novo');
for (let i = 1; i <= meio; i++) {
  for (let j = 1; j <= n; j++) {
    if (i == 1 && j == meio) {
      asteriscos += '*'
    } else if (i == 1) {
      asteriscos += ' ';
    }
    if (i > 1 && i < meio) {
      if (j == meio - i + 1 || j == meio + i - 1) {
        asteriscos += '*';
      } else {
        asteriscos += ' ';
      }
    } else if (i == meio) {
      asteriscos += '*';
    }

  }
  console.log(asteriscos);
  asteriscos = '';
}

// 1 2 3 (4) 5 6 7
// 1 2 (3) 4 (5) 6 7 8


