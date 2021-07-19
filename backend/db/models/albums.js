'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 50]
      },
    },
  }, {});
  Album.associate = function (models) {
    // associations can be defined here
    Album.belongsTo(models.User, { foreignKey: 'userId' })
    Album.hasMany(models.Image, { foreignKey: 'albumId' })
  };
  return Album;
};
