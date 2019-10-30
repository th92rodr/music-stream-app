const Sequelize = require('sequelize');
const db = require('../database/database');

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
      // in the JS code, this property will be refered as
      // `year`, but in the db, the column name will be `release_year`.
      field: 'release_year'
    },
    cover: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    }
  },
  {
    // explicitly tell Sequelize that this model is linked
    // to a table named 'albums' instead of having Sequelize
    // automatically determine table names, which can be error prone.
    tableName: 'albums',
    underscored: true,

    classMethods: {
      associate: function(models) {
        Album.hasMany(models.Music, {
          foreignKey: 'album_id',
          as: 'tracks',
          onDelete: 'CASCADE'
        });
      },
      associate: function(models) {
        Album.belongsTo(models.Artist, {
          foreignKey: 'artist_id',
          as: 'artist',
          onDelete: 'CASCADE'
        });
      }
    }
  }
);

module.exports = Album;
