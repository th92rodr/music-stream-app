import express, { Express, Request, Response, Router } from 'express';
import * as http from 'http';

import IStaticFilesChannel from '../interface';
import AlbumsController from './controllers/AlbumsController';
import ArtistsController from './controllers/ArtistsController';
import MusicsController from './controllers/MusicsController';
import Config from '@config/index';
import IErrorHandler from '@handlers/ErrorHandler/interface';
import IMusicsIntegration from '@integrations/MusicsIntegration/interface';
import ILoggerProvider from '@providers/LoggerProvider/interface';

export default class ExpressStaticFilesChannel implements IStaticFilesChannel {
  private express: Express;
  private server: http.Server;

  private errorHandler: IErrorHandler;
  private loggerProvider: ILoggerProvider;

  private albumsController;
  private artistsController;
  private musicsController;

  // prettier-ignore
  constructor(
    musicsIntegration: IMusicsIntegration,
    errorHandler: IErrorHandler,
    loggerProvider: ILoggerProvider,
  ) {
    this.express = express();
    this.server = new http.Server();

    this.errorHandler = errorHandler;
    this.loggerProvider = loggerProvider;

    this.albumsController = new AlbumsController(musicsIntegration);
    this.artistsController = new ArtistsController(musicsIntegration);
    this.musicsController = new MusicsController(musicsIntegration);
  }

  public start(): void {
    const PORT = Config.channels.staticFiles.port;
    const HOST = Config.channels.staticFiles.host;

    this.server = this.express.listen(PORT, HOST, () => {
      this.loggerProvider.info(`Static files server is running on port ${PORT}.`);
    });
  }

  public async stop(): Promise<void> {
    this.loggerProvider.info('Stopping rest server ...');

    return new Promise((resolve, reject) => {
      this.server.close((error: Error | undefined) => {
        if (error) {
          this.errorHandler.handleError(error);
          reject(error);
        } else {
          this.loggerProvider.info('Rest server stopped.');
          resolve();
        }
      });
    });
  }
}
