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
    underscored: true
  }
);

module.exports = Album;
