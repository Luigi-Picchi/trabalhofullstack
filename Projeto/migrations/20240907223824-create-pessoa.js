module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pessoas', {
      CPF: {
        type: Sequelize.STRING(255),
        allowNull: false,
        primaryKey: true
      },
      Nome: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      Telefone: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('pessoas');
  }
};
