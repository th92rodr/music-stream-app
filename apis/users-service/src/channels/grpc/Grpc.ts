import * as grpc from 'grpc';

import GrpcChannel from './interface';
import { UsersHandler, UsersService } from './handlers/UsersHandler';
import Config from '@config/index';
import ErrorHandler from '@errors/ErrorHandler';
import LoggerProvider from '@providers/LoggerProvider/interface';
import AuthenticateUserService from '@services/AuthenticateUserService';
import CreateUserService from '@services/CreateUserService';
import DeleteUserService from '@services/DeleteUserService';
import GetUserService from '@services/GetUserService';
import UpdateUserService from '@services/UpdateUserService';

export default class Grpc implements GrpcChannel {
  private usersHandler: UsersHandler;
  private errorHandler: ErrorHandler;
  private loggerProvider: LoggerProvider;

  constructor(
    getUserService: GetUserService,
    createUserService: CreateUserService,
    updateUserService: UpdateUserService,
    deleteUserService: DeleteUserService,
    authenticateUserService: AuthenticateUserService,
    errorHandler: ErrorHandler,
    loggerProvider: LoggerProvider,
  ) {
    this.usersHandler = new UsersHandler(getUserService, createUserService, updateUserService, deleteUserService, authenticateUserService, errorHandler);
    this.errorHandler = errorHandler;
    this.loggerProvider = loggerProvider;
  }

  public start(): void {
    const server: grpc.Server = new grpc.Server();

    server.addService(UsersService, this.usersHandler);

    const PORT = Config.channels.grpc.port;
    const HOST = Config.channels.grpc.host;

    // prettier-ignore
    server.bindAsync(
      `${HOST}:${PORT}`,
      grpc.ServerCredentials.createInsecure(),
      (error: Error | null, port: number): void => {
        if (error != null) {
          this.errorHandler.handleError(error);
        } else {
          this.loggerProvider.info(`gRPC server is running on port ${port}`);
        }
      },
    );

    server.start();
  }
}
