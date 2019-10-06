const Sequelize = require('sequelize');
const db = require('../database');

const Artist = db.define(
  'artist',
  {
    name: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    genre: {
      type: Sequelize.ENUM(
        'Heavy Metal',
        'Folk Metal',
        'Power Metal',
        'Death Metal',
        'Thrash Metal',
        'Black Metal'
      ),
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true
    }
  },
  {
    tableName: 'artists',
    underscored: true,

    classMethods: {
      associate: function(models) {
        Artist.hasMany(models.Album, {
          as: 'albums',
          foreignKey: {
            allowNull: false
          },
          onDelete: 'CASCADE'
        });
      }
    }
  }
);

module.exports = Artist;
