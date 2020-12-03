'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('adresses', { 
      id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      cep : {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city : {
        type: Sequelize.STRING,
        allowNull: false,
      },
      neighborhood : {
        type: Sequelize.STRING,
        allowNull: false,
      },
      state : {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('adresses')
  }
};
