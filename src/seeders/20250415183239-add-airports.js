'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

      await queryInterface.bulkInsert('Airports',[
        {
          name: '	Donakonda Airport',
          cityId: 6,
          createdAt:  "2025-04-14 04:59:51",
          updatedAt: "2025-04-14 04:59:51"

        },
        {
          name: '		Tezu Airport',
          cityId: 7,
          createdAt: "2025-04-14 04:59:51",
          updatedAt: "2025-04-14 04:59:51"

        },
        {
          name: '		Kadapa Airport',
          cityId: 6,
          createdAt: "2025-04-14 04:59:51",
          updatedAt: "2025-04-14 04:59:51"

        },
        {
          name: '		Rajahmundry Airport',
          cityId: 6,
          createdAt: "2025-04-14 04:59:51",
          updatedAt: "2025-04-14 04:59:51"

        }
      ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
