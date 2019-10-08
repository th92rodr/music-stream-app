const Sequelize = require('sequelize');
const db = require('../database');

const Music = db.define(
  'music',
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    duration: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    file: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    }
  },
  {
    tableName: 'musics',
    underscored: true
  }
);

module.exports = Music;
