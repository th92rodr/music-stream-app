import Knex from 'knex';
import path from 'path';

import { AlbumsTable, ArtistsTable, Genre, MusicsTable } from '../../../constants/index';
import Album from '../../../entities/Album';
import Artist from '../../../entities/Artist';
import Music from '../../../entities/Music';
import { idProvider } from '../../../providers/index';

export async function seed(knex: Knex): Promise<void> {
  // Deletes all existing entries.
  await knex(ArtistsTable).del();
  await knex(AlbumsTable).del();
  await knex(MusicsTable).del();

  const sabaton = new Artist({
    id: idProvider.generate(),
    name: 'Sabaton',
    description: `Sabaton is a Swedish power metal band from Falun. The band's main lyrical themes are based on war, historical battles, and acts of heroism. The name is a reference to a sabaton, knight's foot armor.`,
    genre: Genre['Power Metal'],
    photos: [path.resolve('Sabaton', 'Sabaton.jpg'), path.resolve('Sabaton', 'Sabaton2.jpg')],
  });

  const ironMaiden = new Artist({
    id: idProvider.generate(),
    name: 'Iron Maiden',
    description: `Iron Maiden are an English heavy metal band formed in Leyton, East London, in 1975 by bassist and primary songwriter Steve Harris. The band's discography has grown to thirty-nine albums, including sixteen studio albums, twelve live albums, four EPs, and seven compilations.`,
    genre: Genre['Heavy Metal'],
    photos: [path.resolve('Iron-Maiden', 'Iron-Maiden.jpg'), path.resolve('Iron-Maiden', 'Iron-Maiden2.jpg')],
  });

  const amonAmarth = new Artist({
    id: idProvider.generate(),
    name: 'Amon Amarth',
    description: `Amon Amarth is a Swedish melodic death metal band from Tumba, formed in 1992. The band takes its name from the Sindarin name of Mount Doom, a volcano in J. R. R. Tolkien's Middle-earth.`,
    genre: Genre['Death Metal'],
    photos: [path.resolve('Amon-Amarth', 'Amon-Amarth.jpg'), path.resolve('Amon-Amarth', 'Amon-Amarth2.jpg'), path.resolve('Amon-Amarth', 'Amon-Amarth3.png')],
  });

  const theArtOfWar = new Album({
    id: idProvider.generate(),
    name: 'The Art of War',
    year: new Date(2008, 4),
    studio: 'The Abyss Studios',
    producers: ['Tommy Tägtgren', 'Peter Tägtgren'],
    cover: path.resolve('Sabaton', 'The-Art-of-War', 'The-Art-of-War.jpg'),
    artistId: sabaton.id,
  });

  const fearOfTheDark = new Album({
    id: idProvider.generate(),
    name: 'Fear of the Dark',
    year: new Date(1992, 4),
    studio: 'Barnyard',
    producers: ['Martin Birch', 'Steve Harris'],
    cover: path.resolve('Iron-Maiden', 'Fear-of-the-Dark', 'Fear-of-the-Dark.jpg'),
    artistId: ironMaiden.id,
  });

  const twilightOfTheThunderGod = new Album({
    id: idProvider.generate(),
    name: 'Twilight of the Thunder God',
    year: new Date(2008, 8),
    studio: 'Fascination Street Studio',
    producers: ['Jens Bogren'],
    cover: path.resolve('Amon-Amarth', 'Twilight-of-the-Thunder-God', 'Twilight-of-the-Thunder-God.jpg'),
    artistId: amonAmarth.id,
  });

  const priceOfAMile = new Music({
    id: idProvider.generate(),
    title: 'Price of a Mile',
    durationInSeconds: 355,
    file: path.resolve('Sabaton', 'The-Art-of-War', 'The-Price-of-a-Mile.mp3'),
    composers: ['Joakim Brodén'],
    lyrics: '',
    albumId: theArtOfWar.id,
  });

  const fearOfTheDarkTrack = new Music({
    id: idProvider.generate(),
    title: 'Fear of the Dark',
    durationInSeconds: 525,
    file: path.resolve('Sabaton', 'The-Art-of-War', 'The-Price-of-a-Mile.mp3'),
    composers: ['Steve Harris'],
    lyrics: '',
    albumId: fearOfTheDark.id,
  });

  const twilightOfTheThunderGodTrack = new Music({
    id: idProvider.generate(),
    title: 'Twilight of the Thunder God',
    durationInSeconds: 434,
    file: path.resolve('Sabaton', 'The-Art-of-War', 'The-Price-of-a-Mile.mp3'),
    composers: ['Johan Söderberg'],
    lyrics: '',
    albumId: twilightOfTheThunderGod.id,
  });

  theArtOfWar.setTracks([priceOfAMile]);
  fearOfTheDark.setTracks([fearOfTheDarkTrack]);
  twilightOfTheThunderGod.setTracks([twilightOfTheThunderGodTrack]);

  sabaton.setAlbums([theArtOfWar]);
  ironMaiden.setAlbums([fearOfTheDark]);
  amonAmarth.setAlbums([twilightOfTheThunderGod]);

  await knex<Artist>(ArtistsTable).insert(sabaton);
  await knex<Artist>(ArtistsTable).insert(ironMaiden);
  await knex<Artist>(ArtistsTable).insert(amonAmarth);

  await knex<Album>(AlbumsTable).insert(theArtOfWar);
  await knex<Album>(AlbumsTable).insert(fearOfTheDark);
  await knex<Album>(AlbumsTable).insert(twilightOfTheThunderGod);

  await knex<Music>(MusicsTable).insert(priceOfAMile);
  await knex<Music>(MusicsTable).insert(fearOfTheDarkTrack);
  await knex<Music>(MusicsTable).insert(twilightOfTheThunderGodTrack);
}
