import cors from 'cors';
import express, { NextFunction, Request, Response, Router } from 'express';

import Config from '../../../config';
import RestChannel from '../interface';
import Authentication from '../middlewares/Authentication';
import UsersController from './controllers/UsersController';

export default class Express implements RestChannel {
  private express: express.Express;

  private authenticationProvider: Authentication;
  private usersController: UsersController;

  constructor() {
    this.express = express();

    this.authenticationProvider = new Authentication();
    this.usersController = new UsersController();
  }

  public start() {
    this.initMiddlewares();

    this.initRouter();

    const PORT = Config.channels.rest.port;
    const HOST = Config.channels.rest.host;

    this.express.listen(PORT, HOST, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }

  private initMiddlewares() {
    this.express.use(cors());
    this.express.use(express.json());
  }

  private initRouter() {
    const router = Router();

    router.get(
      '/',
      this.checkAccess.bind(this),
      this.usersController.show.bind(this.usersController),
    );

    router.post('/', this.usersController.create.bind(this.usersController));

    router.patch(
      '/',
      this.checkAccess.bind(this),
      this.usersController.update.bind(this.usersController),
    );

    router.delete(
      '/',
      this.checkAccess.bind(this),
      this.usersController.delete.bind(this.usersController),
    );

    this.express.use(router);
  }

  private checkAccess(
    request: Request,
    response: Response,
    next: NextFunction,
  ): void {
    const authenticationHeader = request.headers.authorization;

    if (!authenticationHeader) {
      throw new Error();
    }

    const id = this.authenticationProvider.authentication(authenticationHeader);

    request.user.id = id;

    return next();
  }
}
