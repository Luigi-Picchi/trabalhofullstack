const express = require('express');
const PessoaController = require('./Controller/PessoaController');  

const routes = express.Router();

routes.get('/pessoas', PessoaController.index);
routes.post('/pessoas', PessoaController.store);
routes.get('/pessoas/:cpf', PessoaController.show);
routes.put('/pessoas/:cpf', PessoaController.update);
routes.delete('/pessoas/:cpf', PessoaController.delete);

module.exports = routes;
