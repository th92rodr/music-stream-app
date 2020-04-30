const express = require('express');

const artist = require('./artist');
const album = require('./album');
const music = require('./music');
const interface = require('./interface');

const router = express.Router();

/**** API ROUTES ****/

router.use('/api/artist', artist);
router.use('/api/album', album);
router.use('/api/music', music);

/**** INTERFACE ROUTES ****/
router.use('/web/', interface);

// Not Found Route
router.use('*', (req, res) => {
  //res.status(404).json({ message: 'Not Found' });
  res.status(404).render('404');
});

module.exports = router;
