import express, { Router } from 'express';

import RestChannel from '../interface';

export default class Express implements RestChannel {
  private express: express.Express;

  constructor() {
    this.express = express();
  }

  public start() {
    this.initRouter();
    this.initMiddlewares();

    const PORT = 8080;
    const HOST = '0.0.0.0';

    this.express.listen(PORT, HOST, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }

  private initMiddlewares() {
    this.express.use(express.json());
  }

  private initRouter() {
    const router = Router();

    router.use('/', () => {});

    this.express.use(router);
  }
}
