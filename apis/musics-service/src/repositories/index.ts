import SQLAlbumsRepository from './AlbumsRepository/SQLAlbumsRepository';
import SQLArtistsRepository from './ArtistsRepository/SQLArtistsRepository';
import SQLMusicsRepository from './MusicsRepository/SQLMusicsRepository';

import { database } from '@database/index';

const dbConnection = database.getConnection();

export const albumsRepository = new SQLAlbumsRepository(dbConnection);

export const artistsRepository = new SQLArtistsRepository(dbConnection);

export const musicsRepository = new SQLMusicsRepository(dbConnection);
