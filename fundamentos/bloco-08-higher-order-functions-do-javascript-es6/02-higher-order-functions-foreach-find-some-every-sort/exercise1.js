const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

function authorBornIn1947() {
  const resultado = books.find((book)=> book.author.birthYear === 1947);
  return resultado.author.name;
}
assert.strictEqual(authorBornIn1947(),'Stephen King');

function smallestName() {
  let nameBook = books[0].name;
  // escreva aqui o seu código
  books.forEach((book)=>nameBook = (book.name.length < nameBook.length) ? book.name : nameBook);
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
assert.strictEqual(smallestName(), 'Duna');

const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  // escreva seu código aqui
  return books.find((book)=>{ return book.name.length === 26});
}

assert.deepStrictEqual(getNamedBook(), expectedResult);

const expectedResultList = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  books.sort((bookB, bookA)=>{
    if(bookB.releaseYear < bookA.releaseYear) {
      return 1
    }
    if(bookB.releaseYear > bookA.releaseYear){
      return -1
    }
    return 0;
  });

  return books;
}

assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResultList);

const expectedResult5 = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every(book=>book.author.birthYear >= 2000);
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult5);

const expectedResult6 = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return !books.some(book => {return book.releaseYear >= 1980 && book.releaseYear <= 1980});
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult6);

const expectedResult7 = false;

function authorUnique() {
  // escreva seu código aqui
  return !books.some((book, index) => {
    for (let secondIndex = index+1; secondIndex < books.length; secondIndex += 1) {
      const bookCompared = books[secondIndex];
      if(book.author.birthYear === bookCompared.author.birthYear) {
        return true;
      }
    }
  })
}


assert.strictEqual(authorUnique(), expectedResult7);