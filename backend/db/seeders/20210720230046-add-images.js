'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {
        userId: 1,
        albumId: 0,
        imageUrl: 'https://glintrbucket.s3.us-west-1.amazonaws.com/51104874845_d04f6445ba_o.jpg',
        content: 'Lundy Canyon Lundy Falls Autumn Colors High Sierra Fall Foliage Eastern Sierra Lundy Trail Hike Fine Art Landscape Nature Photography! Dr. Elliot McGucken Sierra Aspens & Snow!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: 0,
        imageUrl: 'https://glintrbucket.s3.us-west-1.amazonaws.com/51296543472_90fe947020_o.jpg',
        content: 'Mount Whitney Full Moon Moonrise Alabama Hills Whitney Portal Sierra Crest California Fuji GFX100 McGucken Fine Art Landscape Photography! Fujifilm FUJINON GF 250mm F/4 R LM OIS WR Lens GFX 100 & FUJIFILM GF 1.4X TC WR Teleconverter 350mm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: 0,
        imageUrl: 'https://glintrbucket.s3.us-west-1.amazonaws.com/51297446558_bd023aaa58_o.jpg',
        content: 'Los Angeles Full Moon Moonrise Skyline Cityscape',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: 0,
        imageUrl: 'https://glintrbucket.s3.us-west-1.amazonaws.com/51300048829_151339ea51_o.jpg',
        content: 'Wolves Play Fighting West Yellowstone! Montana',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        albumId: 0,
        imageUrl: 'https://glintrbucket.s3.us-west-1.amazonaws.com/51329183003_c82297ba6c_o.jpg',
        content: 'Petit Blongios',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: 0,
        imageUrl: 'https://glintrbucket.s3.us-west-1.amazonaws.com/51331569947_dd22894197_o.jpg',
        content: 'Lady in the Wind Lower Antelope Canyon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        albumId: 0,
        imageUrl: 'https://glintrbucket.s3.us-west-1.amazonaws.com/51331684058_4365c44f75_o.jpg',
        content: 'Seventh Heaven Fuchsias in full bloom',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: 0,
        imageUrl: 'https://glintrbucket.s3.us-west-1.amazonaws.com/51332224681_7ffdf14e13_o.jpg',
        content: 'Slot Canyon Antelope Canyon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: 0,
        imageUrl: 'https://glintrbucket.s3.us-west-1.amazonaws.com/51332291101_88fa38df33_o.jpg',
        content: 'Lady in the Wind Lower Antelope Canyon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: 0,
        imageUrl: 'https://glintrbucket.s3.us-west-1.amazonaws.com/51333325885_1f88c99619_o.jpg',
        content: 'Lady in the Wind Lower Antelope Canyon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: 0,
        imageUrl: 'https://glintrbucket.s3.us-west-1.amazonaws.com/example.png',
        content: 'Example Homepage Image',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: 0,
        imageUrl: 'https://glintrbucket.s3.us-west-1.amazonaws.com/51321252965_c6ccbe97c6_o.jpg',
        content: 'A Turtle',
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
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});
  }
};
