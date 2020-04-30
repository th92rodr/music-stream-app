const Sequelize = require('sequelize');

const db = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

db.authenticate()
  .then(() => console.log('Sucessfully connected to MySQL Database'))
  .catch((error) =>
    console.log('Failed to connect to MySQL Database: ' + error)
  );

module.exports = db;
