'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

    await queryInterface.createTable('artists', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
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
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
    await queryInterface.createTable('albums', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
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
      },
      artist_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'artists', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
    await queryInterface.createTable('musics', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
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
      },
      album_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'albums', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });

    return Promise.resolve();
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return Promise.all([
      queryInterface.dropTable('artists'),
      queryInterface.dropTable('albums'),
      queryInterface.dropTable('musics')
    ]);
  }
};
