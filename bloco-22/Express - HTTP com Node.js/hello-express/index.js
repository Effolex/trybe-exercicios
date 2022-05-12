const express = require('express');
const cors = require('cors');

const app = express(cors()); // 1

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' }); // 4
}); // 2

app.post('/hello', (req, res) => {
  const body = req.body;
  res.status(200).json({ "message": `Hello, ${body.name} !` }); // 4
}); // 2

app.post('/greetings', (req, res) => {
  const body = req.body;
  if(body.age <= 17) {
    return res.status(401).json({ "message": "Unauthorized" });
  }
  res.status(200).json({ "message": `Hello, ${body.name} !` }); // 4
}); // 2

app.post('/users/:name/:id', (req, res) => {
  const body = req.body;
  if(body.age <= 17) {
    return res.status(401).json({ "message": "Unauthorized" });
  }
  res.status(200).json({ "message": "Seu nome é <name> e você tem <age> anos de idade" }); // 4
}); // 2


app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3