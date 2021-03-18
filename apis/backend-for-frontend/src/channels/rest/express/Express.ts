import express, { Router } from 'express';
import * as http from 'http';

import IRestChannel from '../interface';
import MusicsController from './controllers/MusicsController';
import TokensController from './controllers/TokensController';
import UsersController from './controllers/UsersController';
import Authentication from '../middlewares/Authentication';
import Config from '@config/index';
import { HttpStatusCode } from '@constants/index';
import BaseError from '@constants/BaseError';
import { ErrorInvalidToken } from '@constants/errors';
import IErrorHandler from '@handlers/ErrorHandler/interface';
import IMusicsIntegration from '@integrations/MusicsIntegration/interface';
import IUsersIntegration from '@integrations/UsersIntegration/interface';
import ILoggerProvider from '@providers/LoggerProvider/interface';

export default class ExpressRestChannel implements IRestChannel {
  private express: express.Express;
  private server: http.Server;

  private authenticationProvider: Authentication;
  private errorHandler: IErrorHandler;
  private loggerProvider: ILoggerProvider;

  private musicsController: MusicsController;
  private tokensController: TokensController;
  private usersController: UsersController;

  // prettier-ignore
  constructor(
    musicsIntegration: IMusicsIntegration,
    usersIntegration: IUsersIntegration,
    errorHandler: IErrorHandler,
    loggerProvider: ILoggerProvider,
  ) {
    this.express = express();
    this.server = new http.Server();

    this.authenticationProvider = new Authentication();
    this.errorHandler = errorHandler;
    this.loggerProvider = loggerProvider;

    this.usersController = new UsersController(usersIntegration);
    this.tokensController = new TokensController(usersIntegration);
    this.musicsController = new MusicsController(musicsIntegration);
  }

  public start(): void {
    this.initMiddlewares();

    this.initRouter();

    const PORT = Config.channels.rest.port;
    const HOST = Config.channels.rest.host;

    this.server = this.express.listen(PORT, HOST, () => {
      this.loggerProvider.info(`Rest server is running on port ${PORT}.`);
    });
  }

  private initRouter(): void {
    const router = Router();

    router.get('/', this.checkAccess.bind(this), this.usersController.show.bind(this.usersController));
    router.post('/', this.usersController.create.bind(this.usersController));
    router.patch('/', this.checkAccess.bind(this), this.usersController.update.bind(this.usersController));
    router.delete('/', this.checkAccess.bind(this), this.usersController.delete.bind(this.usersController));

    router.post('/token', this.tokensController.create.bind(this.tokensController));

    router.get('/music/:id', this.musicsController.stream.bind(this.musicsController));

    this.express.use(router);
  }
}
