const { Pessoa } = require('../models');

class PessoaController {
  async index(req, res) {
    try {
      const pessoas = await Pessoa.findAll();
      return res.json(pessoas);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar pessoas.' });
    }
  }

  async store(req, res) {
    try {
      const { CPF, Nome, Telefone } = req.body;
      const pessoa = await Pessoa.create({ CPF, Nome, Telefone });
      return res.json(pessoa);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar pessoa.' });
    }
  }

  async show(req, res) {
    try {
      const { cpf } = req.params;
      const pessoa = await Pessoa.findByPk(cpf);

      if (!pessoa) {
        return res.status(404).json({ error: 'Pessoa não encontrada.' });
      }

      return res.json(pessoa);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar pessoa.' });
    }
  }

  async update(req, res) {
    try {
      const { cpf } = req.params;
      const { Nome, Telefone } = req.body;
      const pessoa = await Pessoa.findByPk(cpf);

      if (!pessoa) {
        return res.status(404).json({ error: 'Pessoa não encontrada.' });
      }

      pessoa.Nome = Nome;
      pessoa.Telefone = Telefone;
      await pessoa.save();

      return res.json(pessoa);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar pessoa.' });
    }
  }

  async delete(req, res) {
    try {
      const { cpf } = req.params;
      const pessoa = await Pessoa.findByPk(cpf);

      if (!pessoa) {
        return res.status(404).json({ error: 'Pessoa não encontrada.' });
      }

      await pessoa.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao deletar pessoa.' });
    }
  }
}

module.exports = new PessoaController();
