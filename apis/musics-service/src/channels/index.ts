import Grpc from './grpc/Grpc';

import { errorHandler } from '@handlers/index';
import { loggerProvider } from '@providers/index';
import { albumsService, artistsService, musicsService } from '@services/index';

export const grpcChannel = new Grpc(albumsService, artistsService, musicsService, errorHandler, loggerProvider);
