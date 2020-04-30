const fs = require('fs');
const path = require('path');

const { Album, Music } = require('../models/index');

const getStat = require('util').promisify(fs.stat);

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
  },

  async delete(req, res) {
    try {
      await Music.destroy({
        where: { id: req.params.id }
      });

      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async stream(req, res) {
    //const { id } = req.params;

    //const music = await Music.findByPk(id);

    //const stat = await getStat(music.file);
    //console.log(stat);

    const filePath = path.resolve(__dirname, '..', '..', 'The_Price_of_a_Mile.mp3');
    const stat = await getStat(filePath);

    // informações sobre o tipo do conteúdo e o tamanho do arquivo
    res.writeHead(200, {
      'Content-Type': 'audio/mp3',
      'Content-Length': stat.size
    });

    //const stream = fs.createReadStream(music.file);
    const stream = fs.createReadStream(filePath);

    // faz streaming do audio
    stream.pipe(res);

    /*
    stream.on('data', (chunk) => {
        res.write(chunk);
    });
    stream.on('error', () => {
        res.status(404).end();
    });
    stream.on('end', () => {
        res.end();
    });
    */
  },


  async index_view(req, res) {
    try {
      /*
      const { album_id } = req.params;

      const album = await Album.findByPk(album_id, {
        include: { association: 'tracks' }
      });
      */

      const album = {
        id: 4,
        name: 'Brave New World',
        year: '2000',
        cover: '',
        tracks: [
          {
            id: 1,
            title: 'The Wicker Man',
            duration: '4:35',
            number: 1
          },
          {
            id: 2,
            title: 'Ghost of the Navigator',
            duration: '6:50',
            number: 2
          },
          {
            id: 3,
            title: 'Brave New World',
            duration: '6:!9',
            number: 3
          },
          {
            id: 4,
            title: 'Blood Brothers',
            duration: '7:12',
            number: 4
          },
          {
            id: 5,
            title: 'Dream Of Mirrors',
            duration: '9:20',
            number: 5
          },
        ]
      };

      return res.status(200).render('music', {
        album
      });
    } catch (error) {
      return res.status(500).render('404');
    }
  },

};
