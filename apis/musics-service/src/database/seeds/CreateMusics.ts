import Knex from 'knex';
import path from 'path';

import Album from '../../entities/Album';
import Artist from '../../entities/Artist';
import Music from '../../entities/Music';
import { AlbumsTable, ArtistsTable, Genre, MusicsTable } from '../../constants/index';
import UuidIdProvider from '../../providers/IdProvider/UuidIdProvider';
import SQLAlbumsRepository from '../../repositories/AlbumsRepository/SQLAlbumsRepository';
import SQLArtistsRepository from '../../repositories/ArtistsRepository/SQLArtistsRepository';
import SQLMusicsRepository from '../../repositories/MusicsRepository/SQLMusicsRepository';

export async function seed(knex: Knex): Promise<void> {
  // Deletes all existing entries.
  await knex(ArtistsTable).del();
  await knex(AlbumsTable).del();
  await knex(MusicsTable).del();

  const uuidIdProvider = new UuidIdProvider();

  const artist = new Artist({
    id: uuidIdProvider.generate(),
    name: 'Sabaton',
    description: '',
    genre: Genre['Power Metal'],
    photos: [path.resolve('Sabaton', 'Sabaton.jpg'), path.resolve('Sabaton', 'Sabaton2.jpg')],
  });

  const album = new Album({
    id: uuidIdProvider.generate(),
    name: 'The Art of War',
    year: new Date(2008),
    studio: 'The Abyss Studios',
    producers: ['Tommy Tägtgren', 'Peter Tägtgren'],
    cover: path.resolve('Sabaton', 'The-Art-of-War', 'The-Art-of-War.jpg'),
    artistId: artist.id,
  });

  const music = new Music({
    id: uuidIdProvider.generate(),
    title: 'Price of a Mile',
    durationInSeconds: 355,
    file: path.resolve('Sabaton', 'The-Art-of-War', 'The-Price-of-a-Mile.mp3'),
    composers: ['Joakim Brodén'],
    lyrics: '',
    albumId: album.id,
  });

  album.setTracks([music]);
  artist.setAlbums([album]);

  const musicsRepository = new SQLMusicsRepository(knex);
  await musicsRepository.store(music);

  const albumsRepository = new SQLAlbumsRepository(knex);
  await albumsRepository.store(album);

  const artistsRepository = new SQLArtistsRepository(knex);
  await artistsRepository.store(artist);
}
