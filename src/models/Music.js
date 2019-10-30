const Sequelize = require('sequelize');
const db = require('../database/database');

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
    // explicitly tell Sequelize that this model is linked
    // to a table named 'musics' instead of having Sequelize
    // automatically determine table names, which can be error prone
    tableName: 'musics',
    underscored: true,

    classMethods: {
      associate: function(models) {
        Music.belongsTo(models.Album, {
          foreignKey: 'album_id',
          as: 'album',
          onDelete: 'CASCADE'
        });
      }
    },

    instanceMethods: {
      standardRes: () => {
        return {
          id: this.id,
          title: this.title,
          duration: this.duration,
          file: this.file
        };
      }
    }
  }
);

module.exports = Music;
