'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});

  Image.prototype.post = function ({ userId, albumId, imageUrl, content }) {
    const image = await Image.create({
      userId,
      albumId,
      imageUrl,
      content
    });

    return await Image.scope
  }

  Image.associate = function (models) {
    // associations can be defined here
    Image.belongsTo(models.User, { foreign: 'userId' })
    Image.belongsTo(models.Album, { foreign: 'albumId' })
    Image.hasMany(models.Comment, { foreign: 'imageId', onDelete: 'cascade', hooks: true })
  };
  return Image;
};
