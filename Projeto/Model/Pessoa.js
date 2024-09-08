const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Pessoa = sequelize.define('Pessoa', {
  cpf: { 
    type: DataTypes.STRING,
    primaryKey: true
  },
  nome: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone: { 
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'pessoas', 
  timestamps: true 
});

module.exports = Pessoa;
