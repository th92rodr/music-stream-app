const path = require('path');
const fs = require('fs');

const AlbumModel = require('../models/Album');
const ArtistModel = require('../models/Artist');

module.exports = {
  async index(req, res) {
    try {
      const { artist_id } = req.params;

      /*************************************/
      const artist = await ArtistModel.findById(artist_id);
      if (!artist) throw new Error('Artist does not exists');

      let albums = [];

      let promises = artist.albums.map(async album_id => {
        albums.push(await AlbumModel.findById(album_id));
      });
      await Promise.all(promises);
      /*************************************/

      /*************************************/
      artist = await ArtistModel.findById(artist_id).lean().populate('albums');
      albums = artist.albums;
      /*************************************/

      return res.status(200).json({ albums });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;
      const album = await AlbumModel.findById(id);
      return res.status(200).json({ album });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async store(req, res) {
    try {
      const album = await AlbumModel.create({
        name: req.body.name,
        year: req.body.year,
        cover: req.body.cover,
        producers: req.body.producers,
        studio: req.body.studio
      });
      return res.status(201).json({ album });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async update(req, res) {
    try {
      await AlbumModel.updateOne(
        { _id: req.params.id },
        {
          name: req.body.name,
          year: req.body.year,
          cover: req.body.cover,
          producers: req.body.producers,
          studio: req.body.studio
        }
      );
      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async delete(req, res) {
    try {
      await AlbumModel.deleteOne({ _id: req.params.id });
      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async view_index(req, res) {
    try {
      const { id } = req.params;
      const album = await AlbumModel.findById(id).lean().populate('tracks');
      album.year = album.year.getFullYear();
      return res.status(200).render('music', { album });
    } catch (error) {
      return res.status(500).render('404');
    }
  },

  async getCover(req, res) {
    try {
      const { id } = req.params;
      const album = await AlbumModel.findById(id);
      //console.log('ALBUM', album);
      //console.log('COVER ', album.cover);

      const filePath = path.resolve(__dirname, '..', '..', album.cover);
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
