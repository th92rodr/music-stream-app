import express, { Express, Response, Router } from 'express';
import handlebars from 'express-handlebars';
import * as http from 'http';
import path from 'path';

import IStaticFilesChannel from '../interface';
import ArtistsController from './controllers/ArtistsController';
import ImagesController from './controllers/ImagesController';
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

  private artistsController: ArtistsController;
  private imagesController: ImagesController;
  private musicsController: MusicsController;

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

    this.artistsController = new ArtistsController(musicsIntegration);
    this.imagesController = new ImagesController();
    this.musicsController = new MusicsController();
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
    this.loggerProvider.info('Stopping static files server ...');

    return new Promise((resolve, reject) => {
      this.server.close((error: Error | undefined) => {
        if (error) {
          this.errorHandler.handleError(error);
        } else {
          this.loggerProvider.info('Static files server stopped.');
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

    router.get('/static/artists', this.artistsController.index.bind(this.artistsController));
    router.get('/static/artists/:id', this.artistsController.show.bind(this.artistsController));

    router.get('/static/files', this.imagesController.files.bind(this.imagesController));
    router.get('/static/musics', this.musicsController.stream.bind(this.musicsController));

    router.use('*', (_, response: Response) => {
      response.status(HttpStatusCode.NOT_FOUND).render('404-page');
    });

    this.express.use(router);
  }
}
