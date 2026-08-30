'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      queue_code: {
        type: Sequelize.STRING
      },
      customer_id: {
        type: Sequelize.INTEGER,
        references: {
        model: 'Customers',
        key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      weight: {
        type: Sequelize.FLOAT
      },
      price_per_kg: {
        type: Sequelize.INTEGER
      },
      total_price: {
        type: Sequelize.INTEGER
      },
      date_in: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      date_finished: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM(
        'Menunggu',
        'Sedang Dicuci',
        'Sedang Dikeringkan',
        'Sedang Disetrika',
        'Selesai',
        'Sudah Diambil'
        ),
        defaultValue: 'Menunggu'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};