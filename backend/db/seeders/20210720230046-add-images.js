'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {
        userId: 2,
        albumId: 0,
        imageUrl: `https://glintrbucket.s3.us-west-1.amazonaws.com/C'estunarc.jpg`,
        content: 'C\'est un arc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        albumId: 0,
        imageUrl: `https://glintrbucket.s3.us-west-1.amazonaws.com/cold.jpg`,
        content: 'On the cold, foggy morning of 3rd December 1967 a BR 9F 2-10-0 heavy goods engine awaits its next turn of duty in the shed yard at Carlisle Kingmoor MPD. Four weeks later steam traction over Shap ceased and the steam shed at Kingmoor closed.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: 0,
        imageUrl: `https://glintrbucket.s3.us-west-1.amazonaws.com/explore+the+fjords.jpg`,
        content: 'Explore the fjords...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        albumId: 0,
        imageUrl: `https://glintrbucket.s3.us-west-1.amazonaws.com/harvest.jpg`,
        content: 'Harvest',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        albumId: 0,
        imageUrl: `https://glintrbucket.s3.us-west-1.amazonaws.com/LEO.jpg`,
        content: 'LEO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: 0,
        imageUrl: `https://glintrbucket.s3.us-west-1.amazonaws.com/monument.jpg`,
        content: 'Monument Valley Mittens Buttes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        albumId: 0,
        imageUrl: `https://glintrbucket.s3.us-west-1.amazonaws.com/northernPygmy.jpg`,
        content: 'Northern Pygmy Owl with Prey',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: 0,
        imageUrl: `https://glintrbucket.s3.us-west-1.amazonaws.com/One+Tree.jpg`,
        content: 'One Tree',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: 0,
        imageUrl: `https://glintrbucket.s3.us-west-1.amazonaws.com/Rainy.jpg`,
        content: 'Rainy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: 0,
        imageUrl: `https://glintrbucket.s3.us-west-1.amazonaws.com/seletion.jpg`,
        content: 'Selection',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: 0,
        imageUrl: `https://glintrbucket.s3.us-west-1.amazonaws.com/seventh.jpg`,
        content: 'Seventh Heaven Fuchsias in full bloom',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        albumId: 0,
        imageUrl: `https://glintrbucket.s3.us-west-1.amazonaws.com/shoebill.jpg`,
        content: 'Shoe-billed Stork',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        albumId: 0,
        imageUrl: `https://glintrbucket.s3.us-west-1.amazonaws.com/THE+ROCK.jpg`,
        content: 'THE ROCK - Switzerland',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        albumId: 0,
        imageUrl: `https://glintrbucket.s3.us-west-1.amazonaws.com/wasp.jpg`,
        content: 'Wasp on Rattlesnake Master',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});
  }
};
