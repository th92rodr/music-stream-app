const express = require('express');

const controller = require('../controllers/music');

const router = express.Router();

router.get('/:album_id', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.store);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
