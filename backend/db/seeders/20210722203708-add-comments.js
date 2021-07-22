'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        userId: 1,
        imageId: 1,
        comment: "sample comment 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        imageId: 1,
        comment: "sample comment 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        imageId: 1,
        comment: "sample comment 3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        imageId: 2,
        comment: 'is this the real tortle?',
        createdAt: new Date(),
        updatedAt: new Date(),
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});

  }
};
