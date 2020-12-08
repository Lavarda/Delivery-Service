'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('coupon', { 
      id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      value : {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      expire_date : {
        type: Sequelize.DATE,
        allowNull: false,
      },
      code : {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('coupon');
  }
};
