import cors from 'cors';
import express, { Router } from 'express';

import Config from '../../../config';
import RestChannel from '../interface';
import UsersController from './controllers/UsersController';

export default class Express implements RestChannel {
  private express: express.Express;

  private usersController: UsersController;

  constructor() {
    this.express = express();

    this.usersController = new UsersController();
  }

  public start() {
    this.initRouter();
    this.initMiddlewares();

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

    router.get('/', this.usersController.show);
    router.post('/', this.usersController.create);
    router.patch('/', this.usersController.update);
    router.delete('/', this.usersController.delete);

    this.express.use(router);
  }
}
