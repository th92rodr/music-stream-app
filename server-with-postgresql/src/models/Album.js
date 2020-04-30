const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Album extends Model {
  static init(sequelize) {
    super.init(
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
        sequelize
      }
    );
  }
}

module.exports = Album;
