// Initialize and export a sequelize instance connected
// to the specified database.

// Sequelize uses a singleton design pattern, meaning
// that we should only have a single sequelize instance
// and connection in our app.
const Sequelize = require('sequelize');
const config = require('../config/database');

const Artist = require('../models/Artist');
const Album = require('../models/Album');
const Music = require('../models/Music');

const connection = new Sequelize(config);

Artist.init(connection);
Album.init(connection);
Music.init(connection);

connection
  .authenticate()
  .then(() => console.log('Sucessfully connected to PostgreSQL Database'))
  .catch(error =>
    console.log('Failed to connect to PostgreSQL Database: ' + error)
  );

module.exports = connection;
