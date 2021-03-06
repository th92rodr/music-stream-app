import * as grpc from 'grpc';

import GrpcChannel from './interface';
import { MusicsHandler, MusicsService } from './handlers/MusicsHandler';
import Config from '@config/index';
import ErrorHandler from '@errors/ErrorHandler';
import GetMusicService from '@services/Music/GetMusicService';
import GetAlbumService from '@services/Album/GetAlbumService';
import GetArtistService from '@services/Artist/GetArtistService';

export default class Grpc implements GrpcChannel {
  private musicsHandler: MusicsHandler;
  private errorHandler: ErrorHandler;

  constructor(getMusicService: GetMusicService, getAlbumService: GetAlbumService, getArtistService: GetArtistService, errorHandler: ErrorHandler) {
    this.musicsHandler = new MusicsHandler(getMusicService, getAlbumService, getArtistService, errorHandler);
    this.errorHandler = errorHandler;
  }

  public start(): void {
    const server: grpc.Server = new grpc.Server();

    server.addService(MusicsService, this.musicsHandler);

    const PORT = Config.channels.grpc.port;
    const HOST = Config.channels.grpc.host;

    // prettier-ignore
    server.bindAsync(
      `${HOST}:${PORT}`,
      grpc.ServerCredentials.createInsecure(),
      (error: Error | null, port: number): void => {
        if (error != null) {
          this.errorHandler.handleError(error);
        }
        console.log(`gRPC server is running on port ${port}`);
      },
    );

    server.start();
  }
}
