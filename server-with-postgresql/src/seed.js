const Artist = require('../../../zzz/music-app-with-sql/src/models/Artist');
const Album = require('../../../zzz/music-app-with-sql/src/models/Album');
const Music = require('../../../zzz/music-app-with-sql/src/models/Music');

async function fakeData() {
  try {
    await Artist.destroy({ where: {} });

    await Album.destroy({ where: {} });

    await Music.destroy({ where: {} });

    const artists_mock = [
      {
        name: 'Sabaton',
        genre: 'Power Metal',
        description:
          "Sabaton is a Swedish power metal band from Falun. The band's main lyrical themes are based on war, historical battles, and acts of heroism. The name is a reference to a sabaton, knight's foot armor."
      },
      {
        name: 'Iron Maiden',
        genre: 'Heavy Metal',
        description:
          "Iron Maiden are an English heavy metal band formed in Leyton, East London, in 1975 by bassist and primary songwriter Steve Harris. The band's discography has grown to thirty-nine albums, including sixteen studio albums, twelve live albums, four EPs, and seven compilations"
      },
      {
        name: 'Amon Amarth',
        genre: 'Death Metal',
        description:
          'Amon Amarth is a Swedish melodic death metal band from Tumba, formed in 1992. The band takes its name from the Sindarin name of Mount Doom, a volcano in J. R. R. Tolkien′s Middle-earth.'
      }
    ];

    let promises = artists_mock.map(async artist => {
      return await Artist.create({
        name: artist.name,
        genre: artist.genre,
        description: artist.description
      });
    });
    let results = await Promise.all(promises);

    console.log('Artists ids:');
    console.log(results[0].id);
    console.log(results[1].id);
    console.log(results[2].id);

    const albums_mock = [
      {
        name: 'The Last Stand',
        year: '2016',
        cover: 'filepath1',
        artist_id: results[0].id
      },
      {
        name: 'Fear of the Dark',
        year: '1992',
        cover: 'filepath2',
        artist_id: results[1].id
      },
      {
        name: 'Twilight of the Thunder God',
        year: '2008',
        cover: 'filepath3',
        artist_id: results[2].id
      }
    ];

    console.log('Artists ids in Albums Mocks:');
    console.log(albums_mock[0].artist_id);
    console.log(albums_mock[1].artist_id);
    console.log(albums_mock[2].artist_id);

    promises = albums_mock.map(async album => {
      //console.log(album.name, album.year, album.cover, album.artist_id);
      return await Album.create({
        name: album.name,
        year: album.year,
        cover: album.cover,
        artist_id: album.artist_id
      });
    });
    results = await Promise.all(promises);

    console.log('Albums ids:');
    console.log(results[0].id);
    console.log(results[1].id);
    console.log(results[2].id);

    const musics_mock = [
      {
        title: 'Price of a Mile',
        duration: '3:55',
        file: 'filepath1',
        album_id: results[0].id
      },
      {
        title: 'Fear of the Dark',
        duration: '5:25',
        file: 'filepath2',
        album_id: results[1].id
      },
      {
        title: 'Twilight of the Thunder God',
        duration: '4:34',
        file: 'filepath3',
        album_id: results[2].id
      }
    ];

    promises = musics_mock.map(async music => {
      return await Music.create({
        title: music.title,
        duration: music.duration,
        file: music.file,
        album_id: music.album_id
      });
    });
    results = await Promise.all(promises);

    console.log('Musics ids:');
    console.log(results[0].id);
    console.log(results[1].id);
    console.log(results[2].id);
  } catch (error) {
    return error;
  }
}

module.exports = {
  fakeData
};
