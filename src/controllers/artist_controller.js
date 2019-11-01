const { Artist } = require('../models/index');

module.exports = {
  async index(req, res) {
    try {
      const artists = await Artist.findAll();

      return res.status(200).json({ artists });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;

      const artist = await Artist.findByPk(id);

      return res.status(200).json({ artist });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async store(req, res) {
    try {
      const artist = await Artist.create({
        name: req.body.name,
        genre: req.body.genre,
        description: req.body.description
      });

      return res.status(201).json({ artist });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async update(req, res) {
    try {
      await Artist.update(
        {
          name: req.body.name,
          genre: req.body.genre,
          description: req.body.description
        },
        { where: { id: req.params.id } }
      );

      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async delete(req, res) {
    try {
      await Artist.destroy({
        where: { id: req.params.id }
      });

      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async filterByGenre(req, res) {
    try {
      const { genre } = req.params;

      const artists = await Artist.find({ where: { genre } });

      return res.status(200).json({ artists });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async getCover(req, res) {
    try {
      const { id } = req.params;

      const artist = await Artist.findByPk(id);

      const cover = fs.readFileSync(artist.cover);
      res.writeHead(200, {
        'Content-Type': 'image/jpeg'
      });
      res.end(cover, 'binary');
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
