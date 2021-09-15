const assert = require('assert');

// escreva greet abaixo

function greet(name,greeting = 'Hi') {
  return `${greeting} ${name}`
}

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');

const newUser = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

Class newUser {
  construtor(id,name,email) {
    this.id = id;
    this.name = 
  }
}


console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }