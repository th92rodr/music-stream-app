import * as grpc from 'grpc';

import IGrpcChannel from './interface';
import { UsersHandler, UsersService } from './handlers/UsersHandler';
import Config from '@config/index';
import IErrorHandler from '@handlers/ErrorHandler/interface';
import ILoggerProvider from '@providers/LoggerProvider/interface';
import IUsersService from '@services/UsersService/interface';

export default class Grpc implements IGrpcChannel {
  private server: grpc.Server;

  private errorHandler: IErrorHandler;
  private loggerProvider: ILoggerProvider;
  private usersHandler: UsersHandler;

  // prettier-ignore
  constructor(
    usersService: IUsersService,
    errorHandler: IErrorHandler,
    loggerProvider: ILoggerProvider,
  ) {
    this.usersHandler = new UsersHandler(usersService, errorHandler, loggerProvider);

    this.errorHandler = errorHandler;
    this.loggerProvider = loggerProvider;

    this.server = new grpc.Server();
  }

  public start(): void {
    this.server.addService(UsersService, this.usersHandler);

    const PORT = Config.channels.grpc.port;
    const HOST = Config.channels.grpc.host;

    // prettier-ignore
    this.server.bindAsync(
      `${HOST}:${PORT}`,
      grpc.ServerCredentials.createInsecure(),
      (error: Error | null, port: number): void => {
        if (error != null) {
          this.errorHandler.handleError(error);
        } else {
          this.loggerProvider.info(`gRPC server is running on port ${port}.`);
        }
      },
    );

    this.server.start();
  }

  public async stop(): Promise<void> {
    this.loggerProvider.info('Stopping gRPC server ...');

    return new Promise((resolve, reject) => {
      this.server.tryShutdown(() => {
        this.loggerProvider.info('gRPC server stopped.');
        resolve();
      });
    });
  }
}
