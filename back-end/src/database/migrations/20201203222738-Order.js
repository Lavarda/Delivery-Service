'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', { 
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
      id_product: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Products', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      date_order : {
        type: Sequelize.DATE,
        allowNull: false,
      },
      status : {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('orders');
  }
};
