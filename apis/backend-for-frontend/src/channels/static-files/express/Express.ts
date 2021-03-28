import express, { Express, Request, Response, Router } from 'express';
import handlebars from 'express-handlebars';
import * as http from 'http';
import path from 'path';

import IStaticFilesChannel from '../interface';
import AlbumsController from './controllers/AlbumsController';
import ArtistsController from './controllers/ArtistsController';
import MusicsController from './controllers/MusicsController';
import Config from '@config/index';
import { HttpStatusCode } from '@constants/index';
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
    this.configureTemplateEngine();

    this.initRouter();

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

  private configureTemplateEngine(): void {
    // Handlebars Template Engine configuration
    this.express.engine(
      '.hbs',
      handlebars({
        defaultLayout: 'index',
        extname: '.hbs',
      }),
    );

    this.express.set('views', path.join(Config.staticFiles.path, 'views'));
    this.express.set('view engine', '.hbs');

    // Set static files folder
    this.express.use(express.static(path.join(Config.staticFiles.path, 'public')));
  }

  private initRouter(): void {
    const router = Router();

    router.get('/web/band', this.artistsController.index.bind(this.artistsController));
    router.get('/web/band/:id', this.artistsController.show.bind(this.artistsController));
    router.get('/web/band/:id/cover', this.artistsController.getCover.bind(this.artistsController));

    router.get('/web/album/:id', this.albumsController.show.bind(this.albumsController));
    router.get('/web/album/:id/cover', this.albumsController.getCover.bind(this.albumsController));

    router.get('/web/music/:id', this.musicsController.show.bind(this.musicsController));
    router.get('/web/music/:id/audio', this.musicsController.stream.bind(this.musicsController));

    router.use('*', (request: Request, response: Response) => {
      response.status(HttpStatusCode.NOT_FOUND).render('404');
    });

    this.express.use(router);
  }
}
