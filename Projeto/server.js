const express = require('express');
const path = require('path');
const routes = require('./routes');
const sequelize = require('./Config/database'); 

const app = express();

app.use(express.static(path.join(__dirname, 'Front-end')));
app.use(express.json());
app.use(routes);


sequelize.sync({ force: false })  
  .then(() => {
    console.log('Banco de dados sincronizado.');
  })
  .catch(error => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
