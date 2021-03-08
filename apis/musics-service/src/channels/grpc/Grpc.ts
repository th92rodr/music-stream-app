import * as grpc from 'grpc';

import GrpcChannel from './interface';
import { MusicsHandler, MusicsService } from './handlers/MusicsHandler';
import Config from '@config/index';
import ErrorHandler from '@errors/ErrorHandler';
import LoggerProvider from '@providers/LoggerProvider/interface';
import GetMusicService from '@services/Music/GetMusicService';
import GetAlbumService from '@services/Album/GetAlbumService';
import GetArtistService from '@services/Artist/GetArtistService';

export default class Grpc implements GrpcChannel {
  private server: grpc.Server;

  private musicsHandler: MusicsHandler;
  private errorHandler: ErrorHandler;
  private loggerProvider: LoggerProvider;

  // prettier-ignore
  constructor(
    getMusicService: GetMusicService,
    getAlbumService: GetAlbumService,
    getArtistService: GetArtistService,
    errorHandler: ErrorHandler,
    loggerProvider: LoggerProvider,
  ) {
    this.musicsHandler = new MusicsHandler(getMusicService, getAlbumService, getArtistService, errorHandler);
    this.errorHandler = errorHandler;
    this.loggerProvider = loggerProvider;

    this.server = new grpc.Server();
  }

  public start(): void {
    this.server.addService(MusicsService, this.musicsHandler);

    const PORT = Config.channels.grpc.port;
    const HOST = Config.channels.grpc.host;

    // prettier-ignore
    this.server.bindAsync(
      `${HOST}:${PORT}`,
      grpc.ServerCredentials.createInsecure(),
      (error: Error | null, port: number): void => {
        if (error != null) {
          this.errorHandler.handleError(error);
        } else {
          this.loggerProvider.info(`gRPC server is running on port ${port}.`);
        }
      },
    );

    this.server.start();
  }

  public async stop(): Promise<void> {
    this.loggerProvider.info('Stopping gRPC server ...');
    return new Promise((resolve, reject) => {
      this.server.tryShutdown(() => {
        this.loggerProvider.info('gRPC server stopped.');
        resolve();
      });
    });
  }
}
