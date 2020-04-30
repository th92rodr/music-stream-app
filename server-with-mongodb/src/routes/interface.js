const express = require('express');

const ArtistController = require('../controllers/artist');
const AlbumController = require('../controllers/album');
const MusicController = require('../controllers/music');

const router = express.Router();

router.get('/index', ArtistController.view_index);
router.get('/index/:genre', ArtistController.filter_by_genre);
router.get('/band/:id', ArtistController.view_band);
router.get('/band/:id/cover', ArtistController.getCover);
router.get('/album/:id', AlbumController.view_index);
router.get('/album/:id/cover', AlbumController.getCover);
router.get('/audio/:id', MusicController.stream);

router.get('/fake_data', require('../seed').fakeData);

router.get('/player', (req, res) => res.status(200).render('player', {}));

module.exports = router;
