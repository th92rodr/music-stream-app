const { Schema, model } = require('mongoose');

const ArtistSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: false
  },
  genre: {
    type: String,
    enum: [
      'Heavy Metal',
      'Folk Metal',
      'Power Metal',
      'Death Metal',
      'Thrash Metal',
      'Black Metal'
    ],
    required: true
  },
  albums: [
    {
      type: Schema.Types.ObjectId,
      ref: 'album'
    }
  ],
  photos: [
    {
      type: String
    }
  ]
});

module.exports = model('artist', ArtistSchema);
