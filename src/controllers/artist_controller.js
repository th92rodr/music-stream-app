const path = require('path');
const fs = require('fs');

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


  async index_view(req, res) {
    try {
      //const artists = await Artist.findAll();

      const artists = [
        {
          id: 1,
          name: 'Sabaton',
          genre: 'Power Metal',
          description:
            "Sabaton is a Swedish power metal band from Falun. The band's main lyrical themes are based on war, historical battles, and acts of heroism. The name is a reference to a sabaton, knight's foot armor."
        },
        {
          id: 2,
          name: 'Iron Maiden',
          genre: 'Heavy Metal',
          description:
            "Iron Maiden are an English heavy metal band formed in Leyton, East London, in 1975 by bassist and primary songwriter Steve Harris. The band's discography has grown to thirty-nine albums, including sixteen studio albums, twelve live albums, four EPs, and seven compilations"
        },
        {
          id: 3,
          name: 'Amon Amarth',
          genre: 'Death Metal',
          description:
            'Amon Amarth is a Swedish melodic death metal band from Tumba, formed in 1992. The band takes its name from the Sindarin name of Mount Doom, a volcano in J. R. R. Tolkien′s Middle-earth.'
        },
        {
          id: 4,
          name: 'Black Sabbath',
          genre: 'Heavy Metal',
          description:
            "Black Sabbath were an English rock band formed in Birmingham in 1968 by guitarist and main songwriter Tony Iommi, drummer Bill Ward, bassist and main lyricist Geezer Butler and singer Ozzy Osbourne. Black Sabbath are often cited as pioneers of heavy metal music."
        },
        {
          id: 5,
          name: 'Kreator',
          genre: 'Thrash Metal',
          description:
            "Kreator is a German thrash metal band from Essen, formed in 1982. Their current lineup consists of lead vocalist and rhythm guitarist Mille Petrozza, drummer Jürgen Reil, lead guitarist Sami Yli-Sirniö, and bassist Frédéric Leclercq."
        },
        {
          id: 6,
          name: 'Blind Guardian',
          genre: 'Power Metal',
          description:
            'Blind Guardian is a German power metal band formed in 1984 in Krefeld, West Germany. They are often credited as one of the seminal and most influential bands in the power metal and speed metal subgenres.'
        }
      ];

      return res.status(200).render('index', {
        artists
      });
    } catch (error) {
      return res.status(500).render('404');
    }
  },

  async getCover(req, res) {
    try {
      const { id } = req.params;

      //const artist = await Artist.findByPk(id);

      //const cover = fs.readFileSync(artist.cover);

      console.log("get cover band ", id)
      const filePath = path.resolve(__dirname, '..', 'public', 'imgs', 'Sabaton-Heroes.jpg');
      console.log('path ', filePath);
      const cover = fs.readFileSync(filePath);

      res.writeHead(200, {
        'Content-Type': 'image/jpg'
      });
      res.end(cover, 'binary');
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

};
