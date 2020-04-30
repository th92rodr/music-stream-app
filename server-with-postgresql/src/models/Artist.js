const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Artist extends Model {
  static init(sequelize) {
    super.init(
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
        sequelize
      }
    );
  }
}

module.exports = Artist;
