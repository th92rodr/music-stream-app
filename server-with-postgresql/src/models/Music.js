const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Music extends Model {
  static init(sequelize) {
    super.init(
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
          type: Sequelize.STRING,
          allowNull: false
        },
        file: {
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

module.exports = Music;
