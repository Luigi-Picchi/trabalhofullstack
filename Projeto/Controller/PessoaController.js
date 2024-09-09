const Pessoa = require('../models/Pessoa');

exports.index = async (req, res) => {
  try {
    const pessoas = await Pessoa.findAll();
    res.json(pessoas);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar pessoas.' });
  }
};

exports.store = async (req, res) => {
  try {
    const { CPF, Nome, Telefone } = req.body;

    if (!CPF || !Nome || !Telefone) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    const pessoa = await Pessoa.create({ CPF, Nome, Telefone });

    return res.status(201).json(pessoa);
  } catch (error) {
    console.error('Erro ao cadastrar pessoa:', error);
    return res.status(500).json({ message: 'Erro ao cadastrar pessoa.' });
  }
};

exports.show = async (req, res) => {
  try {
    const pessoa = await Pessoa.findByPk(req.params.CPF);
    if (!pessoa) {
      return res.status(404).json({ message: 'Pessoa não encontrada.' });
    }
    res.json(pessoa);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar pessoa.' });
  }
};

exports.update = async (req, res) => {
  try {
    const { CPF } = req.params;
    const { Nome, Telefone } = req.body;

    const pessoa = await Pessoa.findByPk(CPF);
    if (!pessoa) {
      return res.status(404).json({ message: 'Pessoa não encontrada.' });
    }

    pessoa.Nome = Nome || pessoa.Nome;
    pessoa.Telefone = Telefone || pessoa.Telefone;
    await pessoa.save();

    res.json(pessoa);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar pessoa.' });
  }
};

exports.delete = async (req, res) => {
  try {
    const { CPF } = req.params;
    const pessoa = await Pessoa.findByPk(CPF);

    if (!pessoa) {
      return res.status(404).json({ message: 'Pessoa não encontrada.' });
    }

    await pessoa.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar pessoa.' });
  }
};
