const Sequelize = require('sequelize');
const db = require('../database/database');

const Music = db.define(
  'music',
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'This field cannot be empty.'
        },
        len: {
          msg: ''
        }
      }
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
    // explicitly tell Sequelize that this model is linked
    // to a table named 'musics' instead of having Sequelize
    // automatically determine table names, which can be error prone
    tableName: 'musics',

    // column names will use snake_case instead of camelCased
    underscored: true,

    // declare model relationships
    classMethods: {
      associate: function(models) {
        Music.belongsTo(models.Album, {
          foreignKey: 'album_id',
          as: 'album',
          onDelete: 'CASCADE'
        });
      }
    }
  }
);

module.exports = Music;
