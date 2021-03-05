import * as grpc from 'grpc';

import Config from '@config/index';
import GrpcChannel from './interface';
import { MusicsHandler, MusicsService } from './handlers/MusicsHandler';
import GetMusicService from '@services/Music/GetMusicService';
import GetAlbumService from '@services/Album/GetAlbumService';
import GetArtistService from '@services/Artist/GetArtistService';

export default class Grpc implements GrpcChannel {
  private musicsHandler: MusicsHandler;

  constructor(getMusicService: GetMusicService, getAlbumService: GetAlbumService, getArtistService: GetArtistService) {
    this.musicsHandler = new MusicsHandler(getMusicService, getAlbumService, getArtistService);
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
          return console.error(error);
        }
        console.log(`gRPC server is running on port ${port}`);
      },
    );

    server.start();
  }
}
