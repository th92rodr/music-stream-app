import * as grpc from 'grpc';

import Config from '@config/index';
import GrpcChannel from './interface';
import { UsersHandler, UsersService } from './handlers/UsersHandler';
import AuthenticateUserService from '@services/AuthenticateUserService';
import CreateUserService from '@services/CreateUserService';
import DeleteUserService from '@services/DeleteUserService';
import GetUserService from '@services/GetUserService';
import UpdateUserService from '@services/UpdateUserService';

export default class Grpc implements GrpcChannel {
  private usersHandler: UsersHandler;

  constructor(
    getUserService: GetUserService,
    createUserService: CreateUserService,
    updateUserService: UpdateUserService,
    deleteUserService: DeleteUserService,
    authenticateUserService: AuthenticateUserService,
  ) {
    this.usersHandler = new UsersHandler(getUserService, createUserService, updateUserService, deleteUserService, authenticateUserService);
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
          return console.error(error);
        }
        console.log(`gRPC server is running on port ${port}`);
      },
    );

    server.start();
  }
}
