'use strict';

module.exports = {

  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [

      {
        username: 'admin',

        password: '$2b$10$CsyNDtYcNlTO3QyRtyPinOgtIQGQq2xrvs6mUkOFyjEV0S0veqPI.',

        createdAt: new Date(),

        updatedAt: new Date()

      }

    ]);

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});

  }

};