const express = require('express');

const artist = require('./artist');
const album = require('./album');
const music = require('./music');
const interface = require('./interface');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    artists: 'http://localhost:8080/v1/api/artist',
    albums: 'http://localhost:8080/v1/api/album',
    musics: 'http://localhost:8080/v1/api/music'
  });
});

router.use('/api/artist', artist);
router.use('/api/album', album);
router.use('/api/music', music);

router.use('/interface', interface);

// Not Found Route
router.use('*', (req, res) => {
  res.status(404).json({ message: 'Not Found' });
  //res.status(404).render('404');
});

module.exports = router;
