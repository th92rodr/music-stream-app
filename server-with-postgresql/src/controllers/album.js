const path = require('path');
const fs = require('fs');

const {
  Album,
  Artist
} = require('../../../../zzz/music-app-with-sql/src/models/index');

const getStat = require('util').promisify(fs.stat);

module.exports = {
  async index(req, res) {
    try {
      const { artist_id } = req.params;

      const artist = await Artist.findByPk(artist_id, {
        include: { association: 'albums' }
      });

      return res.status(200).json({ artist });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async show(req, res) {
    try {
      const { album_id } = req.params;

      const album = await Album.findByPk(album_id);

      return res.status(200).json({ album });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async store(req, res) {
    try {
      const album = await Album.create({
        name: req.body.name,
        year: req.body.year,
        cover: req.body.cover,
        artist_id: req.params.artist_id
      });

      return res.status(201).json({ album });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async update(req, res) {
    try {
      await Album.update(
        {
          name: req.body.name,
          year: req.body.year,
          cover: req.body.cover
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
      await Album.destroy({
        where: { id: req.params.id }
      });

      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async index_view(req, res) {
    try {
      /*
      const { artist_id } = req.params;

      const artist = await Artist.findByPk(artist_id, {
        include: { association: 'albums' }
      });
      */

      const artist = {
        id: 2,
        name: 'Iron Maiden',
        genre: 'Heavy Metal',
        description:
          "Iron Maiden are an English heavy metal band formed in Leyton, East London, in 1975 by bassist and primary songwriter Steve Harris. The band's discography has grown to thirty-nine albums, including sixteen studio albums, twelve live albums, four EPs, and seven compilations",
        albums: [
          {
            id: 1,
            name: 'The Number of the Beast',
            year: '1982',
            cover: ''
          },
          {
            id: 2,
            name: 'Fear of the Dark',
            year: '1992',
            cover: ''
          },
          {
            id: 3,
            name: 'Seventh Son of a Seventh Son',
            year: '1988',
            cover: ''
          },
          {
            id: 4,
            name: 'Brave New World',
            year: '2000',
            cover: ''
          },
          {
            id: 5,
            name: 'A Matter of Life and Death',
            year: '2006',
            cover: ''
          }
        ],
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
          }
        ]
      };

      return res.status(200).render('band', {
        artist
      });
    } catch (error) {
      return res.status(500).render('404');
    }
  },

  async getCover(req, res) {
    try {
      const { id } = req.params;

      //const album = await Album.findByPk(id);

      //const cover = fs.readFileSync(album.cover);

      console.log('get cover album ', id);
      const filePath = path.resolve(
        __dirname,
        '..',
        'public',
        'imgs',
        'Sabaton-Heroes.jpg'
      );
      console.log('path ', filePath);
      const cover = fs.readFileSync(filePath);

      res.writeHead(200, {
        'Content-Type': 'image/jpg'
      });
      res.end(cover, 'binary');
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
