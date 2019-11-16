const Sequelize = require('sequelize');
const db = require('../database/database');

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
    // explicitly tell Sequelize that this model is linked
    // to a table named 'artists' instead of having Sequelize
    // automatically determine table names, which can be error prone
    tableName: 'artists',

    // column names will use snake_case instead of camelCased
    underscored: true,

    // declare model relationships
    classMethods: {
      associate: function(models) {
        Artist.hasMany(models.Album, {
          foreignKey: 'artist_id',
          as: 'albums',
          onDelete: 'CASCADE'
        });
      }
    }
  }
);

module.exports = Artist;
