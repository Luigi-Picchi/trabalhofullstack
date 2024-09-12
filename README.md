Código do arquivo .sequelize (o github não aceitou o arquivo)

const path = require('path');

module.exports = {
  'config': path.resolve('Config', 'database.js'), 
  'models-path': path.resolve('models'),
  'migrations-path': path.resolve('migrations'),
  'seeders-path': path.resolve('seeders')
};
