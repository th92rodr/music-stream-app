const path = require('path');
const fs = require('fs');

const AlbumModel = require('../models/Album');
const MusicModel = require('../models/Music');

const getStat = require('util').promisify(fs.stat);

module.exports = {
  async index(req, res) {
    try {
      const { album_id } = req.params;

      /*************************************/
      const album = await AlbumModel.findById(album_id);
      if (!album) throw new Error('Album does not exists');

      let tracks = [];

      let promises = album.tracks.map(async music_id => {
        tracks.push(await MusicModel.findById(music_id));
      });
      await Promise.all(promises);
      /*************************************/

      /*************************************/
      album = await AlbumModel.findById(album_id).lean().populate('tracks');
      tracks = album.tracks;
      /*************************************/

      return res.status(200).json({ tracks });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;
      const music = await MusicModel.findById(id);
      return res.status(200).json({ music });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async store(req, res) {
    try {
      const music = await MusicModel.create({
        title: req.body.title,
        duration: req.body.duration,
        file: req.body.file,
        composer: req.body.composer,
        lyrics: req.body.lyrics
      });
      return res.status(201).json({ music });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async update(req, res) {
    try {
      await MusicModel.updateOne(
        { _id: req.params.id },
        {
          title: req.body.title,
          duration: req.body.duration,
          file: req.body.file,
          composer: req.body.composer,
          lyrics: req.body.lyrics
        }
      );
      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async delete(req, res) {
    try {
      await MusicModel.deleteOne({ _id: req.params.id });
      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async stream(req, res) {
    const { id } = req.params;
    const music = await MusicModel.findById(id);
    //console.log('MUSIC', music);
    //console.log('FILE ', music.file);

    const filePath = path.resolve(__dirname, '..', '..', music.file);
    const stat = await getStat(filePath);
    //console.log('path ', filePath);

    // add to the headers info about the type of file and it's size
    res.writeHead(200, {
      'Content-Type': 'audio/mp3',
      'Content-Length': stat.size
    });

    const stream = fs.createReadStream(filePath);

    // start audio streaming
    stream.pipe(res);
  }
};
