const path = require('path');
const fs = require('fs');

const ArtistModel = require('../models/Artist');

module.exports = {
  async index(req, res) {
    try {
      const artists = await ArtistModel.find();
      return res.status(200).json({ artists });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;
      const artist = await ArtistModel.findById(id);
      return res.status(200).json({ artist });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async store(req, res) {
    try {
      const artist = await ArtistModel.create({
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
      await ArtistModel.updateOne(
        { _id: req.params.id },
        {
          name: req.body.name,
          genre: req.body.genre,
          description: req.body.description
        }
      );
      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async delete(req, res) {
    try {
      await ArtistModel.deleteOne({ _id: req.params.id });
      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async filter_by_genre(req, res) {
    try {
      const { genre } = req.params;
      const artists = await ArtistModel.find({ genre }).lean();
      return res.status(200).render('index', { artists });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async view_index(req, res) {
    try {
      const artists = await ArtistModel.find().lean();
      return res.status(200).render('index', { artists });
    } catch (error) {
      return res.status(500).render('404');
    }
  },

  async view_band(req, res) {
    try {
      const { id } = req.params;
      const artist = await ArtistModel.findById(id).lean().populate('albums');
      artist.albums.map(element => (element.year = element.year.getFullYear()));
      return res.status(200).render('band', { artist });
    } catch (error) {
      return res.status(500).render('404');
    }
  },

  async getCover(req, res) {
    try {
      const { id } = req.params;
      const artist = await ArtistModel.findById(id);
      //console.log('ARTIST', artist);
      //console.log('COVER ', artist.cover);

      const filePath = path.resolve(__dirname, '..', '..', artist.photos[0]);
      const cover = fs.readFileSync(filePath);
      //console.log('path ', filePath);

      res.writeHead(200, {
        'Content-Type': 'image/jpg'
      });
      res.end(cover, 'binary');
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
