import cors from 'cors';
import express, { Router } from 'express';

import Config from '../../../config';
import RestChannel from '../interface';

export default class Express implements RestChannel {
  private express: express.Express;

  constructor() {
    this.express = express();
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

    router.use('/', () => {});

    this.express.use(router);
  }
}
