'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('profiles', [
      {
        name: 'admin',
        identificador: 'Administrador',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'cliente',
        identificador: 'Cliente',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'funcionario',
        identificador: 'Funcionario',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('profiles', null, {});
  }
};
