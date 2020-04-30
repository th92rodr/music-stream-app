const express = require('express');

const controller = require('../controllers/album');

const router = express.Router();

router.get('/:artist_id', controller.index);
router.get('/:album_id', controller.show);
router.post('/', controller.store);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
