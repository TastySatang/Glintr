'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Image.associate = function (models) {
    // associations can be defined here
    Image.belongsTo(models.User, { foreign: 'userId' })
    Image.belongsTo(models.Album, { foreign: 'albumId' })
    Image.hasMany(model.Comment, { foreign: 'imageId', onDelete: 'cascade', hooks: true })
  };
  return Image;
};
