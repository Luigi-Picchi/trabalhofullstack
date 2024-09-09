const express = require('express');
const PessoaController = require('./Controller/PessoaController');  

const routes = express.Router();

routes.get('/pessoas', PessoaController.index);
routes.post('/pessoas', PessoaController.store);
routes.get('/pessoas/:CPF', PessoaController.show);
routes.put('/pessoas/:CPF', PessoaController.update);
routes.delete('/pessoas/:CPF', PessoaController.delete);

module.exports = routes;
