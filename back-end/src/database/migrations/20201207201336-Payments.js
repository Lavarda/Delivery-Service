'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('payments', { 
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
      number_card: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cvv_card : {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      expire_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      name_holder: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf_cnpj_holder: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('payments');
  }
};
