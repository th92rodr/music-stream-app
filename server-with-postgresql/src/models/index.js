// Any code that needs access to our models should import
// them from this module, not from the individual models files.
// Otherwise, the models won't have their relations applied.

const Artist = require('./ArtistOld');
const Album = require('./AlbumOld');
const Music = require('./MusicOld');

const db = {
  Artist,
  Album,
  Music
};

// call the `.associate` method on all models,
// so the relations can be applied.
Object.keys(db).forEach(model => {
  if (db[model].associate) {
    db[model].associate(db);
  }
});

module.exports = db;
