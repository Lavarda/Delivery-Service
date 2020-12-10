'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', { 
      id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_company : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Companies', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      name : {
        type: Sequelize.STRING,
        allowNull: false,
      },
      value_unit : {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      comment : {
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
     await queryInterface.dropTable('products');
  }
};
