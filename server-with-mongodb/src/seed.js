const ArtistModel = require('./models/Artist');
const AlbumModel = require('./models/Album');
const MusicModel = require('./models/Music');

async function fakeData(req, res) {
  try {
    await ArtistModel.deleteMany();
    await AlbumModel.deleteMany();
    await MusicModel.deleteMany();

    const musics = [
      {
        title: 'The Wicker Man',
        duration: '4:35',
        composer: ['Smith', 'Harris', 'Dickinson']
      },
      {
        title: 'Ghost of the Navigator',
        duration: '6:50',
        composer: ['Gers', 'Dickinson', 'Harris']
      },
      {
        title: 'Brave New World',
        duration: '6:18',
        composer: ['Murray', 'Harris', 'Dickinson']
      },
      {
        title: 'Blood Brothers',
        duration: '7:14',
        composer: ['Harris']
      },
      {
        title: 'The Mercenary',
        duration: '4:42',
        composer: ['Gers', 'Harris']
      },
      {
        title: 'Dream of Mirrors',
        duration: '9:21',
        composer: ['Gers', 'Harris']
      },
      {
        title: 'The Fallen Angel',
        duration: '4:00',
        composer: ['Smith', 'Harris']
      },
      {
        title: 'The Nomad',
        duration: '9:06',
        composer: ['Murray', 'Harris']
      },
      {
        title: 'Out of the Silence Planet',
        duration: '6:25',
        composer: ['Gers', 'Dickinson', 'Harris']
      },
      {
        title: 'The Thin Line Between Love and Hate',
        duration: '8:26',
        composer: ['Murray', 'Harris']
      },
      {
        title: 'Price of a Mile',
        duration: '5:55',
        file: 'db/Sabaton/The-Art-of-War/The-Price-of-a-Mile.mp3'
      },
      {
        title: 'Twilight of the Thunder God',
        duration: '4:34'
      },
      {
        title: 'Fear of the Dark',
        duration: '5:25'
      }
    ];

    let promises = musics.map(async music => {
      return await MusicModel.create({
        title: music.title,
        duration: !!music.duration ? music.duration : '0:00',
        file: !!music.file ? music.file : '//',
        composer: !!music.composer ? music.composer : '',
        lyrics: !!music.lyrics ? music.lyrics : ''
      });
    });
    let results = await Promise.all(promises);
    //console.log(results);

    const albums = [
      {
        name: 'Brave New World',
        year: '29 May 2000',
        tracks: [
          results[0],
          results[1],
          results[2],
          results[3],
          results[4],
          results[5],
          results[6],
          results[7],
          results[8],
          results[9]
        ],
        cover: 'db/Iron-Maiden/Brave-New-World/Brave-New-World.jpg',
        producers: ['Kevin Shirley', 'Steve Harris'],
        studio: 'EMI, Portrait / Columbia (United States)'
      },
      {
        name: 'The Art Of War',
        year: '2008',
        tracks: [results[10]],
        cover: 'db/Sabaton/The-Art-of-War/The-Art-of-War.jpg'
      },
      {
        name: 'Twilight of the Thunder God',
        year: '2008',
        tracks: [results[11]],
        cover:
          'db/Amon-Amarth/Twilight-of-the-Thunder-God/Twilight-of-the-Thunder-God.jpg'
      },
      {
        name: 'Fear of the Dark',
        year: '1992',
        tracks: [results[12]],
        cover: 'db/Iron-Maiden/Fear-of-the-Dark/Fear-of-the-Dark.jpg'
      },
      {
        name: 'The Number of the Beast',
        year: '1982',
        cover:
          'db/Iron-Maiden/The-Number-of-the-Beast/The-Number-of-the-Beast.jpg'
      },
      {
        name: 'Seventh Son of a Seventh Son',
        year: '1988'
      },
      {
        name: 'A Matter of Life and Death',
        year: '2006',
        cover:
          'db/Iron-Maiden/A-Matter-of-Life-and-Death/A-Matter-of-Life-and-Death.jpg'
      }
    ];

    promises = albums.map(async album => {
      return await AlbumModel.create({
        name: album.name,
        year: !!album.year ? album.year : '1900',
        cover: !!album.cover ? album.cover : '//',
        tracks: !!album.tracks ? album.tracks : [],
        producers: !!album.producers ? album.producers : '',
        studio: !!album.studio ? album.studio : ''
      });
    });
    results = await Promise.all(promises);
    //console.log(results);

    const artists = [
      {
        name: 'Iron Maiden',
        genre: 'Heavy Metal',
        description:
          "Iron Maiden are an English heavy metal band formed in Leyton, East London, in 1975 by bassist and primary songwriter Steve Harris. The band's discography has grown to thirty-nine albums, including sixteen studio albums, twelve live albums, four EPs, and seven compilations.",
        albums: [results[0], results[3], results[4], results[5], results[6]],
        photos: [
          'db/Iron-Maiden/Iron-Maiden.jpg',
          'db/Iron-Maiden/Iron-Maiden2.jpg'
        ]
      },
      {
        name: 'Sabaton',
        genre: 'Power Metal',
        description:
          "Sabaton is a Swedish power metal band from Falun. The band's main lyrical themes are based on war, historical battles, and acts of heroism. The name is a reference to a sabaton, knight's foot armor.",
        albums: [results[1]],
        photos: ['db/Sabaton/Sabaton.jpg', 'db/Sabaton/Sabaton2.jpg']
      },

      {
        name: 'Amon Amarth',
        genre: 'Death Metal',
        description:
          'Amon Amarth is a Swedish melodic death metal band from Tumba, formed in 1992. The band takes its name from the Sindarin name of Mount Doom, a volcano in J. R. R. Tolkien′s Middle-earth.',
        albums: [results[2]],
        photos: [
          'db/Amon-Amarth/Amon-Amarth.jpg',
          'db/Amon-Amarth/Amon-Amarth2.jpg',
          'db/Amon-Amarth/Amon-Amarth3.jpg'
        ]
      },
      {
        name: 'Black Sabbath',
        genre: 'Heavy Metal',
        description:
          'Black Sabbath were an English rock band formed in Birmingham in 1968 by guitarist Tony Iommi, drummer Bill Ward, bassist Geezer Butler and vocalist Ozzy Osbourne. Black Sabbath are often cited as pioneers of heavy metal music.',
        photos: [
          'db/Black-Sabbath/Black-Sabbath.jpg',
          'db/Black-Sabbath/Black-Sabbath2.jpg'
        ]
      },
      {
        name: 'Blind Guardian',
        genre: 'Power Metal',
        description:
          'Blind Guardian is a German power metal band formed in 1984 in Krefeld, West Germany. They are often credited as one of the seminal and most influential bands in the power metal and speed metal subgenres.'
      },
      {
        name: 'Avantasia',
        genre: 'Power Metal',
        description:
          'Avantasia is a German supergroup metal opera project created by Tobias Sammet, vocalist of the band Edguy. It has been characterized as a rock opera, as it features the contributions of various vocalists and musicians and it consists of concept albums.'
      },
      {
        name: 'Kreator',
        genre: 'Thrash Metal',
        description:
          'Kreator is a German thrash metal band from Essen, formed in 1982. Their current lineup consists of lead vocalist, lead and rhythm guitarist Mille Petrozza, drummer Jürgen "Ventor" Reil, lead guitarist Sami Yli-Sirniö, and bassist Frédéric Leclercq.',
        photos: ['db/Kreator/Kreator.jpg']
      },
      {
        name: 'Black Label Society',
        genre: 'Heavy Metal',
        photos: [
          'db/Black-Label-Society/Black-Label-Society.jpg',
          'db/Black-Label-Society/Black-Label-Society2.jpg'
        ]
      },
      {
        name: 'Metallica',
        genre: 'Heavy Metal',
        photos: ['db/Metallica/Metallica.jpg', 'db/Metallica/Metallica2.jpg']
      },
      {
        name: 'Sonata Arctica',
        genre: 'Power Metal',
        photos: ['db/Sonata-Arctica/Sonata-Arctica.jpg']
      },
      {
        name: 'Gamma Ray',
        genre: 'Power Metal'
      },
      {
        name: 'Slayer',
        genre: 'Thrash Metal',
        photos: ['db/Slayer/Slayer.jpg']
      }
    ];

    promises = artists.map(async artist => {
      return await ArtistModel.create({
        name: artist.name,
        genre: artist.genre,
        description: !!artist.description ? artist.description : '',
        albums: !!artist.albums ? artist.albums : [],
        photos: !!artist.photos ? artist.photos : ''
      });
    });
    results = await Promise.all(promises);
    //console.log(results);

    //return 'done';
    return res.status(200).json({ message: 'Fake Data OK' });
  } catch (error) {
    console.error(error);
    return error;
  }
}

module.exports = { fakeData };
