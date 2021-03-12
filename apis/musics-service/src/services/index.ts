import AlbumsService from './AlbumsService/AlbumsService';
import ArtistsService from './ArtistsService/ArtistsService';
import MusicsService from './MusicsService/MusicsService';

import { albumsRepository, artistsRepository, musicsRepository } from '@repositories/index';

export const albumsService = new AlbumsService(albumsRepository);

export const artistsService = new ArtistsService(artistsRepository);

export const musicsService = new MusicsService(musicsRepository);
