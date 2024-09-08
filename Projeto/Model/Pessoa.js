const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Pessoa = sequelize.define('Pessoa', {
    CPF: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    Nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Telefone: {
      type: DataTypes.STRING,
      allowNull: false
    },

  }, {
    tableName: 'pessoa',
    timestamps: true
  });

  return Pessoa;
};
