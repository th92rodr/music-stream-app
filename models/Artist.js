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
  }
);

module.exports = Artist;
