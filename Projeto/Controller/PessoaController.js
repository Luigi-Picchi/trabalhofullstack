const Pessoa = require('../Model/Pessoa');

const PessoaController = {
  async index(req, res) {
    try {
      const pessoas = await Pessoa.findAll();
      res.json(pessoas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async store(req, res) {
    try {
      const pessoa = await Pessoa.create(req.body);
      res.status(201).json(pessoa);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async show(req, res) {
    try {
      const pessoa = await Pessoa.findOne({ where: { cpf: req.params.cpf } });
      if (!pessoa) {
        return res.status(404).json({ error: 'Pessoa não encontrada' });
      }
      res.json(pessoa);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await Pessoa.update(req.body, { where: { cpf: req.params.cpf } });
      if (updated) {
        const pessoa = await Pessoa.findOne({ where: { cpf: req.params.cpf } });
        res.json(pessoa);
      } else {
        res.status(404).json({ error: 'Pessoa não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await Pessoa.destroy({ where: { cpf: req.params.cpf } });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Pessoa não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = PessoaController;
