'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('companies', { 
      id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      stars : {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      number_avaliations : {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      description : {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image : {
        type: Sequelize.BLOB('long'),
        allowNull: false,
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('company');
  }
};
