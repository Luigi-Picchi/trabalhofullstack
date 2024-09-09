const { DataTypes } = require('sequelize');
const sequelize = require('../Config/database'); 

const Pessoa = sequelize.define('Pessoa', {
  CPF: {
    type: DataTypes.STRING(255),
    allowNull: false,
    primaryKey: true
  },
  Nome: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  Telefone: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  timestamps: true, 
  tableName: 'pessoas'
});

module.exports = Pessoa;
