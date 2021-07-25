'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        userId: 2,
        imageId: 1,
        comment: "sample comment 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        imageId: 1,
        comment: "Glückwunsch zu Explore!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        imageId: 1,
        comment: "Beautiful image!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        imageId: 2,
        comment: "A very effective shot.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        imageId: 3,
        comment: "The deep, blue fjords of Norway which cut through wild mountains and stunningly beautiful landscapes are quite unlike anywhere else in the world. Of course, fjords are not just a Norwegian phenomenon. Other mountain regions around the world that have experienced ice ages normally have fjords too. However, many of the ice-free and most spectacular fjords can be found in Norway. The most famous of these are located in Western Norway... Like this one ...",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        imageId: 3,
        comment: "Thanks for sharing your beautiful creation and for enriching our lives with your wonderful painterly image.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        imageId: 4,
        comment: "Very beautiful!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        imageId: 5,
        comment: "Cracker image! Spot on focus and wonderful contrast and bokeh!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        imageId: 6,
        comment: "Fantastic panorama!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        imageId: 7,
        comment: "Beautiful portrait of that Northern Pygmy Owl with the prey, Eric. Stunning shot.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        imageId: 8,
        comment: "That is just gorgeous mate. The best I've seen from this place.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        imageId: 8,
        comment: "Fantastic image. The dense mist at ground level is what dreams are made of.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        imageId: 9,
        comment: "Genials Makro.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        imageId: 10,
        comment: "Muy bella imagen.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        imageId: 11,
        comment: "Love this very beautiful",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        imageId: 11,
        comment: "Ein sehr schönes Foto :-) Prima Farben und Bildgestaltung((* -*))",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        imageId: 12,
        comment: "Mother Nature Approves!!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        imageId: 13,
        comment: "The Creux du Van is a natural rocky cirque approximately 1,400 metres wide and 150 metres deep, on the north side of Le Soliat. It is located in the Val de Travers district, in the Swiss canton of Neuchâtel. A very well known, amphitheatre-shaped natural attraction of the area, it is located at the heart of a nature reservation area of 15.5 km²",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        imageId: 13,
        comment: "Fabulous view and great capture!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        imageId: 13,
        comment: "Congrats on Explore, excellent work!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        imageId: 14,
        comment: "Magnifique capture et image !",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        imageId: 14,
        comment: "Outstanding detail and light",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});

  }
};
