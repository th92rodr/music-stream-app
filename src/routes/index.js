const express = require('express');

const ArtistController = require('../controllers/artist_controller');
const AlbumController = require('../controllers/album_controller');
const MusicController = require('../controllers/music_controller');

const router = express.Router();


/**** API ROUTES ****/

/* Artist Routes */
router.get('/api/artist/', ArtistController.index);
router.get('/api/artist/:id', ArtistController.show);
router.post('/api/artist/', ArtistController.store);
router.put('/api/artist/:id', ArtistController.update);
router.delete('/api/artist/:id', ArtistController.delete);

/* Album Routes */
router.get('/api/album/:artist_id', AlbumController.index);
router.get('/api/album/:album_id', AlbumController.show);
router.post('/api/album/', AlbumController.store);
router.put('/api/album/:id', AlbumController.update);
router.delete('/api/album/:id', AlbumController.delete);

/* Music Routes */
router.get('/api/music/:album_id', MusicController.index);
router.get('/api/music/:music_id', MusicController.show);
router.post('/api/music/', MusicController.store);
router.put('/api/music/:id', MusicController.update);
router.delete('/api/music/:id', MusicController.delete);


/**** INTERFACE ROUTES ****/

router.get('/', ArtistController.index_view);
router.get('/band/:id', AlbumController.index_view);
router.get('/band/:id/cover', ArtistController.getCover);
router.get('/album/:id', MusicController.index_view);
router.get('/album/:id/cover', AlbumController.getCover);
router.get('/audio/:id', MusicController.stream);



router.get('/fake-data', require('../seed').fakeData);


// Not Found Route
router.use('*', (req, res) => {
  res.status(404).json({ message: 'Not Found' });
});


/*
  router.get('/', (req, res) => {
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
*/

module.exports = router;
