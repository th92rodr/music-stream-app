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
  async store(req, res) {
    try {
      const music = await Music.create({
        title: req.body.title,
        duration: req.body.duration,
        file: req.body.file,
        album_id: req.params.album_id
      });

      return res.status(201).json({ music });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  async update(req, res) {
    try {
      await Music.update(
        {
          title: req.body.title,
          duration: req.body.duration,
          file: req.body.file
        },
        { where: { id: req.params.id } }
      );

      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
