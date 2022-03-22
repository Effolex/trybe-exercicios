const express = require('express');

const { sequelize, book} = require('./models');

const app = express();
app.use(express.json());

app.get('/books', async (req, res) => {
  try {
    const books = await book.findAll();
    return res.json(books); 
  } catch (error) {
    return res.status(400).json(error);
  }
});

app.get('/book/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const bookGot = await book.findOne({
      where: { id }
    });
    return res.json(bookGot);
  } catch (error) {
    return res.status(400).json(error); 
  }
});

app.post('/book', async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  try {
    const bookCreated = await book.create({ title, author, pageQuantity});

    return res.json(bookCreated);
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.post('/book/:id', async (req, res) => {

});

app.delete('/book/:id', async (req, res) => {

});

app.listen({ port: 3000 }, async () => {
  console.log('Listening to port 3000');  
  await sequelize.authenticate();
  console.log('Database connected');
})