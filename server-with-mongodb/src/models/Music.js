const { Schema, model } = require('mongoose');

const MusicSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  duration: {
    type: String,
    required: true
  },
  file: {
    type: String,
    required: true,
    unique: true
  },
  composer: [
    {
      type: String
    }
  ],
  lyrics: {
    type: String
  }
});

module.exports = model('music', MusicSchema);
