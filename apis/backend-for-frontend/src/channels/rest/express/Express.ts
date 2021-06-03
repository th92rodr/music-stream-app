import cors from 'cors';
import express, { Express, NextFunction, Request, Response, Router } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import * as http from 'http';
import { Socket } from 'net';

import IRestChannel from '../interface';
import AlbumsController from './controllers/AlbumsController';
import ArtistsController from './controllers/ArtistsController';
import ArtistsFollowersController from './controllers/ArtistsFollowersController';
import MusicsController from './controllers/MusicsController';
import MusicsViewsController from './controllers/MusicsViewsController';
import TokensController from './controllers/TokensController';
import TrendingController from './controllers/TrendingController';
import UsersController from './controllers/UsersController';
import UsersPlaylistsController from './controllers/UsersPlaylistsController';
import UsersPlaylistsTracksController from './controllers/UsersPlaylistsTracksController';
import Authentication from '../middlewares/Authentication';
import Validator from '../middlewares/Validator';
import Config from '@config/index';
import { HttpStatusCode } from '@constants/index';
import BaseError from '@constants/BaseError';
import { ErrorInvalidToken, InternalError } from '@constants/errors';
import IErrorHandler from '@handlers/ErrorHandler/interface';
import IMusicsIntegration from '@integrations/MusicsIntegration/interface';
import IPlaylistsIntegration from '@integrations/PlaylistsIntegration/interface';
import IUsersIntegration from '@integrations/UsersIntegration/interface';
import IUsersMusicsIntegration from '@integrations/UsersMusicsIntegration/interface';
import ILoggerProvider from '@providers/LoggerProvider/interface';
import { delay } from '@utils/index';

export default class ExpressRestChannel implements IRestChannel {
  private express: Express;
  private server: http.Server;
  private sockets: Map<number, Socket>;

  private authenticationProvider: Authentication;
  private errorHandler: IErrorHandler;
  private loggerProvider: ILoggerProvider;

  private albumsController: AlbumsController;
  private artistsController: ArtistsController;
  private artistsFollowersController: ArtistsFollowersController;
  private musicsController: MusicsController;
  private musicsViewsController: MusicsViewsController;
  private tokensController: TokensController;
  private trendingController: TrendingController;
  private usersController: UsersController;
  private usersPlaylistsController: UsersPlaylistsController;
  private usersPlaylistsTracksController: UsersPlaylistsTracksController;

  // prettier-ignore
  constructor(
    musicsIntegration: IMusicsIntegration,
    playlistsIntegration: IPlaylistsIntegration,
    usersIntegration: IUsersIntegration,
    usersMusicsIntegration: IUsersMusicsIntegration,
    errorHandler: IErrorHandler,
    loggerProvider: ILoggerProvider,
  ) {
    this.express = express();
    this.server = new http.Server();
    this.sockets = new Map();

    this.authenticationProvider = new Authentication();
    const validationMiddleware = new Validator();

    this.errorHandler = errorHandler;
    this.loggerProvider = loggerProvider;

    this.albumsController = new AlbumsController(musicsIntegration, validationMiddleware);
    this.artistsController = new ArtistsController(musicsIntegration, validationMiddleware);
    this.artistsFollowersController = new ArtistsFollowersController(usersMusicsIntegration);
    this.musicsController = new MusicsController(musicsIntegration, validationMiddleware);
    this.musicsViewsController = new MusicsViewsController(usersMusicsIntegration);
    this.tokensController = new TokensController(usersIntegration, validationMiddleware);
    this.trendingController = new TrendingController(musicsIntegration);
    this.usersController = new UsersController(usersIntegration, validationMiddleware);
    this.usersPlaylistsController = new UsersPlaylistsController(playlistsIntegration, validationMiddleware);
    this.usersPlaylistsTracksController = new UsersPlaylistsTracksController(playlistsIntegration, validationMiddleware);
  }

  public start(): void {
    this.initMiddlewares();

    this.initRouter();

    const PORT = Config.channels.rest.port;
    const HOST = Config.channels.rest.host;

    this.server = this.express.listen(PORT, HOST, () => {
      this.loggerProvider.info(`Rest server is running on port ${PORT}.`);
    });

    this.server.on('connection', (socket: Socket) => {
      const socketId = this.sockets.size + 1;
      this.sockets.set(socketId, socket);

      socket.once('close', () => {
        this.sockets.delete(socketId);
      });
    });
  }

  public async stop(): Promise<void> {
    this.loggerProvider.info('Stopping rest server ...');

    if (this.sockets.size > 0) {
      await this.waitForSocketsToClose();
    }

    return new Promise((resolve, reject) => {
      this.server.close((error: Error | undefined) => {
        if (error) {
          this.errorHandler.handleError(error);
        } else {
          this.loggerProvider.info('Rest server stopped.');
          resolve();
        }
      });
    });
  }

  private async waitForSocketsToClose() {
    for (let counter = 5; counter > 0; counter--) {
      if (this.sockets.size > 0) {
        this.loggerProvider.info(`Waiting ${counter} more ${counter !== 1 ? 'seconds' : 'second'} for all connections to close ...`);
        await delay(1);
      } else {
        break;
      }
    }

    this.loggerProvider.info('Forcing all connections to close now.');
    this.sockets.forEach(socket => {
      socket.destroy();
    });
  }

  private initMiddlewares(): void {
    this.express.use(helmet());

    if (Config.channels.rest.limitRequests) {
      const OneHour = 60 * 60 * 1000;
      const limit = rateLimit({
        max: 100,
        windowMs: OneHour,
        message: 'Too many requests.',
        headers: true,
        statusCode: HttpStatusCode.TOO_MANY_REQUESTS,
      });
      this.express.use(limit);
    }

    this.express.use(cors());
    this.express.use(express.json({ limit: '10kb' }));

    this.express.use(this.logging.bind(this));
  }

  private initRouter(): void {
    const router = Router();

    router.use('/api/users', this.usersRoutes());
    router.use('/api/tokens', this.tokensRoutes());

    router.use('/api/artists', this.artistsRoutes());
    router.use('/api/albums', this.albumsRoutes());
    router.use('/api/musics', this.musicsRoutes());

    router.use('/api/playlists', this.playlistsRoutes());

    router.use('/api/trending', this.trendingRoutes());

    router.use('*', (_, response: Response) => {
      response.status(HttpStatusCode.NOT_FOUND).json({ message: 'Not Found' });
    });

    this.express.use(router);
  }

  private usersRoutes(): Router {
    const router = Router();

    router.get('/', this.checkAccess.bind(this), this.usersController.show.bind(this.usersController));
    router.post('/', this.usersController.create.bind(this.usersController));
    router.patch('/', this.checkAccess.bind(this), this.usersController.update.bind(this.usersController));
    router.delete('/', this.checkAccess.bind(this), this.usersController.delete.bind(this.usersController));

    return router;
  }

  private tokensRoutes(): Router {
    const router = Router();

    router.post('/', this.tokensController.create.bind(this.tokensController));

    return router;
  }

  private artistsRoutes(): Router {
    const router = Router();

    router.get('/', this.artistsController.index.bind(this.artistsController));
    router.get('/:id', this.artistsController.show.bind(this.artistsController));
    router.post('/', this.artistsController.create.bind(this.artistsController));
    router.patch('/:id', this.artistsController.update.bind(this.artistsController));
    router.delete('/:id', this.artistsController.delete.bind(this.artistsController));

    router.get('/following', this.checkAccess.bind(this), this.artistsFollowersController.index.bind(this.artistsFollowersController));
    router.get('/:id/following', this.checkAccess.bind(this), this.artistsFollowersController.show.bind(this.artistsFollowersController));
    router.post('/:id/following', this.checkAccess.bind(this), this.artistsFollowersController.create.bind(this.artistsFollowersController));
    router.delete('/:id/following', this.checkAccess.bind(this), this.artistsFollowersController.delete.bind(this.artistsFollowersController));

    return router;
  }

  private albumsRoutes(): Router {
    const router = Router();

    router.get('/:id', this.albumsController.show.bind(this.albumsController));
    router.post('/', this.albumsController.create.bind(this.albumsController));
    router.patch('/:id', this.albumsController.update.bind(this.albumsController));
    router.delete('/:id', this.albumsController.delete.bind(this.albumsController));

    return router;
  }

  private musicsRoutes(): Router {
    const router = Router();

    router.get('/:id', this.musicsController.show.bind(this.musicsController));
    router.post('/', this.musicsController.create.bind(this.musicsController));
    router.patch('/:id', this.musicsController.update.bind(this.musicsController));
    router.delete('/:id', this.musicsController.delete.bind(this.musicsController));

    router.get('/last-views', this.checkAccess.bind(this), this.musicsViewsController.index.bind(this.musicsViewsController));
    router.get('/most-views', this.checkAccess.bind(this), this.musicsViewsController.index.bind(this.musicsViewsController));
    router.get('/:id/views', this.checkAccess.bind(this), this.musicsViewsController.show.bind(this.musicsViewsController));
    router.post('/:id/views', this.checkAccess.bind(this), this.musicsViewsController.create.bind(this.musicsViewsController));

    return router;
  }

  private playlistsRoutes(): Router {
    const router = Router();

    router.get('/', this.checkAccess.bind(this), this.usersPlaylistsController.index.bind(this.usersPlaylistsController));
    router.get('/:id', this.checkAccess.bind(this), this.usersPlaylistsController.show.bind(this.usersPlaylistsController));
    router.post('/', this.checkAccess.bind(this), this.usersPlaylistsController.create.bind(this.usersPlaylistsController));
    router.patch('/:id', this.checkAccess.bind(this), this.usersPlaylistsController.update.bind(this.usersPlaylistsController));
    router.delete('/:id', this.checkAccess.bind(this), this.usersPlaylistsController.delete.bind(this.usersPlaylistsController));

    router.post('/:playlistId/tracks', this.checkAccess.bind(this), this.usersPlaylistsTracksController.create.bind(this.usersPlaylistsTracksController));
    router.patch('/:playlistId/tracks/:id', this.checkAccess.bind(this), this.usersPlaylistsTracksController.update.bind(this.usersPlaylistsTracksController));
    router.delete('/:playlistId/tracks/:id', this.checkAccess.bind(this), this.usersPlaylistsTracksController.delete.bind(this.usersPlaylistsTracksController));

    return router;
  }

  private trendingRoutes(): Router {
    const router = Router();

    router.get('/artists', this.trendingController.show.bind(this.trendingController));
    router.get('/musics', this.trendingController.show.bind(this.trendingController));

    return router;
  }

  private checkAccess(request: Request, response: Response, next: NextFunction): void | Response {
    const authenticationHeader = request.headers.authorization;

    if (!authenticationHeader) {
      const error = new ErrorInvalidToken();
      return response.status(error.statusCode).json({ error: error.message });
    }

    try {
      const id = this.authenticationProvider.authentication(authenticationHeader);

      request.userId = id;

      return next();
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }

  private logging(request: Request, response: Response, next: NextFunction): void {
    this.loggerProvider.info('', {
      'http-version': request.httpVersionMajor + '.' + request.httpVersionMinor,
      method: request.method,
      URL: request.originalUrl || request.url,
      'user-agent': request.headers['user-agent'],
      'remote-addr': request.ip || (request.connection && request.connection.remoteAddress) || undefined,
    });

    return next();
  }
}
