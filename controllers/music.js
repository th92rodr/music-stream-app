const Music = require('../models/Music');
const Album = require('../models/Album');


module.exports = {
  async index(req, res) {
    try {
      const { album_id } = req.params;

      const album = await Album.findByPk(album_id, {
        include: { association: 'tracks' }
      });

      return res.status(200).json({ album });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  async show(req, res) {
    try {
      const { music_id } = req.params;

      const music = await Music.findByPk(music_id);

      return res.status(200).json({ music });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
