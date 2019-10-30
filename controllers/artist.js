const Artist = require('../models/Artist');

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
};
