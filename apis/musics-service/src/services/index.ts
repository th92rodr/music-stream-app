import AlbumsService from './AlbumsService/AlbumsService';
import ArtistsService from './ArtistsService/ArtistsService';
import MusicsService from './MusicsService/MusicsService';

import { idProvider } from '@providers/index';
import { albumsRepository, artistsRepository, musicsRepository } from '@repositories/index';

export const albumsService = new AlbumsService(albumsRepository, idProvider);

export const artistsService = new ArtistsService(artistsRepository, idProvider);

export const musicsService = new MusicsService(musicsRepository, idProvider);
