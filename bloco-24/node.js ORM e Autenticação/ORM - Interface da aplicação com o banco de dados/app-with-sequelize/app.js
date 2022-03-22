const express = require('express');
const { sequelize, user } = require('./models');

const app = express();
app.use(express.json());

app.post('/users', async (req, res) => {
  const { name, email, role} = req.body;

  try {
     const createdUser = await user.create({ name, email, role });

     return res.json(createdUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
    
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await user.findAll();
    return res.json(users);
  } catch (error) {
    return res.status(400).json(error);
  }
})

app.get('/users/:uuid', async (req, res) => {
  const { uuid } = req.params;
  try {
    const users = await user.findOne({
      where: { uuid }
    });
    return res.json(users);
  } catch (error) {
    return res.status(400).json(error);
  }
})

app.listen({ port: 3000 }, async () => {
  console.log('server online on 3000');
  await sequelize.authenticate();
  console.log('database connected!');
})