'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {
        userId: 1,
        albumId: 0,
        imageUrl: 'https://glintrbucket.s3.us-west-1.amazonaws.com/example.png',
        content: 'Homepage Image',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: 0,
        imageUrl: 'https://glintrbucket.s3.us-west-1.amazonaws.com/51321252965_c6ccbe97c6_o.jpg',
        content: 'A Tortle',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: 0,
        imageUrl: 'https://glintrbucket.s3.us-west-1.amazonaws.com/51321141270_5f4f5a7f43_o.jpg',
        content: "Is this the grand canyon?",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});
  }
};
