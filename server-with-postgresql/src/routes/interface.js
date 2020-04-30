const express = require('express');

const Artist = require('../controllers/artist');
const Album = require('../controllers/album');
const Music = require('../controllers/music');

const router = express.Router();

router.get('/', Artist.index_view);
router.get('/band/:id', Album.index_view);
router.get('/band/:id/cover', Artist.getCover);
router.get('/album/:id', Music.index_view);
router.get('/album/:id/cover', Album.getCover);
router.get('/audio/:id', Music.stream);

router.get('/fakedata', require('../seed').fakeData);

router.get('/player', (req, res) => {
  res.render('player', {
    artist: 'Sabaton',
    album: 'Heroes',
    music: 'Price of a Mile',
    genre: 'Power Metal',
    duration: '3:04',
    description: `Sabaton is a Swedish power metal band from Falun. 
      The band's main lyrical themes are based on war, historical battles, 
      and acts of heroism. The name is a reference to a sabaton, knight's foot armor.`,
    id: 22,
    year: '2015',
    tracks: [
      {
        tittle: 'AAA',
        band: 'Sabaton',
        duration: '11'
      },
      {
        tittle: 'BBB',
        band: 'Sabaton',
        duration: '22'
      },
      {
        tittle: 'CCC',
        band: 'Sabaton',
        duration: '33'
      }
    ]
  });
});

module.exports = router;
