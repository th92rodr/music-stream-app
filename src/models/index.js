const Artist = require('./Artist');
const Album = require('./Album');
const Music = require('./Music');

const db = {
  Artist,
  Album,
  Music
};

// call the `.associate` method on all models,
// so the relations can be applied.
Object.keys(db).forEach((model) => {
  if (db[model].associate) {
    db[model].associate(db);
  }
});

module.exports = db;
