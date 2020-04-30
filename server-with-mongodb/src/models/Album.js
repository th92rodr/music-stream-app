const { Schema, model } = require('mongoose');

const AlbumSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type: Date,
    required: true
  },
  cover: {
    type: String,
    required: true,
    unique: true
  },
  tracks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'music'
    }
  ],
  producers: [
    {
      type: String
    }
  ],
  studio: {
    type: String
  }
});

module.exports = model('album', AlbumSchema);
