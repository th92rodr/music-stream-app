const Sequelize = require('sequelize');
const db = require('../database');

const Album = db.define(
  'album',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    year: {
      type: Sequelize.DATE,
      allowNull: false,
      field: 'release_year'
    },
    cover: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    }
  },
  {
    tableName: 'albums',
    underscored: true,

    classMethods: {
      associate: function(models) {
        Album.hasMany(models.Music, {
          as: 'tracks',
          foreignKey: {
            allowNull: false
          },
          onDelete: 'CASCADE'
        });
      },
      associate: function(models) {
        Album.belongsTo(models.Artist, {
          foreignKey: {
            allowNull: false
          },
          onDelete: 'CASCADE'
        });
      }
    }
  }
);

module.exports = Album;
