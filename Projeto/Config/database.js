const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pessoas', 'postgres', 'luigi', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
