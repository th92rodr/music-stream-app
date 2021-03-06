import * as grpc from 'grpc';

import { IUsersServer } from '../proto/users_service_grpc_pb';
import {
  AuthenticateUserRequest,
  AuthenticateUserResponse,
  CreateUserRequest,
  CreateUserResponse,
  DeleteUserRequest,
  DeleteUserResponse,
  GetUserRequest,
  GetUserResponse,
  UpdateUserRequest,
  UpdateUserResponse,
} from '../proto/users_service_pb';
import { InternalError } from '@constants/errors';
import User from '@entities/User';
import ErrorHandler from '@errors/ErrorHandler';
import AuthenticateUserService from '@services/AuthenticateUserService';
import CreateUserService from '@services/CreateUserService';
import DeleteUserService from '@services/DeleteUserService';
import GetUserService from '@services/GetUserService';
import UpdateUserService from '@services/UpdateUserService';

export { UsersService } from '../proto/users_service_grpc_pb';

export class UsersHandler implements IUsersServer {
  private getUserService: GetUserService;
  private createUserService: CreateUserService;
  private updateUserService: UpdateUserService;
  private deleteUserService: DeleteUserService;
  private authenticateUserService: AuthenticateUserService;

  private errorHandler: ErrorHandler;

  constructor(
    getUserService: GetUserService,
    createUserService: CreateUserService,
    updateUserService: UpdateUserService,
    deleteUserService: DeleteUserService,
    authenticateUserService: AuthenticateUserService,
    errorHandler: ErrorHandler,
  ) {
    this.getUserService = getUserService;
    this.createUserService = createUserService;
    this.updateUserService = updateUserService;
    this.deleteUserService = deleteUserService;
    this.authenticateUserService = authenticateUserService;
    this.errorHandler = errorHandler;
  }

  get = async (call: grpc.ServerUnaryCall<GetUserRequest>, callback: grpc.sendUnaryData<GetUserResponse>): Promise<void> => {
    try {
      const user = await this.getUserService.execute({ id: call.request.getId() });
      callback(null, this.translateGetUser(user));
    } catch (error) {
      await this.errorHandler.handleError(error);

      if (!this.errorHandler.isTrustedError(error)) {
        callback(new InternalError(), null);
      }
      callback(error, null);
    }
  };

  create = async (call: grpc.ServerUnaryCall<CreateUserRequest>, callback: grpc.sendUnaryData<CreateUserResponse>): Promise<void> => {
    try {
      const user = await this.createUserService.execute({
        username: call.request.getUsername(),
        email: call.request.getEmail(),
        password: call.request.getPassword(),
      });
      callback(null, this.translateCreateUser(user));
    } catch (error) {
      await this.errorHandler.handleError(error);

      if (!this.errorHandler.isTrustedError(error)) {
        callback(new InternalError(), null);
      }
      callback(error, null);
    }
  };

  update = async (call: grpc.ServerUnaryCall<UpdateUserRequest>, callback: grpc.sendUnaryData<UpdateUserResponse>): Promise<void> => {
    try {
      await this.updateUserService.execute({
        id: call.request.getId(),
        username: call.request.getUsername(),
        email: call.request.getEmail(),
        password: call.request.getPassword(),
      });
      callback(null, call.request);
    } catch (error) {
      await this.errorHandler.handleError(error);

      if (!this.errorHandler.isTrustedError(error)) {
        callback(new InternalError(), null);
      }
      callback(error, null);
    }
  };

  delete = async (call: grpc.ServerUnaryCall<DeleteUserRequest>, callback: grpc.sendUnaryData<DeleteUserResponse>): Promise<void> => {
    try {
      await this.deleteUserService.execute({
        id: call.request.getId(),
      });
      callback(null, new DeleteUserResponse());
    } catch (error) {
      await this.errorHandler.handleError(error);

      if (!this.errorHandler.isTrustedError(error)) {
        callback(new InternalError(), null);
      }
      callback(error, null);
    }
  };

  authenticate = async (call: grpc.ServerUnaryCall<AuthenticateUserRequest>, callback: grpc.sendUnaryData<AuthenticateUserResponse>): Promise<void> => {
    try {
      const { token } = await this.authenticateUserService.execute({
        email: call.request.getEmail(),
        password: call.request.getPassword(),
      });
      callback(null, this.translateAuthenticateUser(token));
    } catch (error) {
      await this.errorHandler.handleError(error);

      if (!this.errorHandler.isTrustedError(error)) {
        callback(new InternalError(), null);
      }
      callback(error, null);
    }
  };

  private translateGetUser(user: User): GetUserResponse {
    const getUserResponse = new GetUserResponse();

    getUserResponse.setId(user.id);
    getUserResponse.setUsername(user.username);
    getUserResponse.setEmail(user.email);
    getUserResponse.setPassword(user.password);

    return getUserResponse;
  }

  private translateCreateUser(user: User): CreateUserResponse {
    const createUserResponse = new CreateUserResponse();

    createUserResponse.setId(user.id);
    createUserResponse.setUsername(user.username);
    createUserResponse.setEmail(user.email);
    createUserResponse.setPassword(user.password);

    return createUserResponse;
  }

  private translateAuthenticateUser(token: string): AuthenticateUserResponse {
    const authenticateUserResponse = new AuthenticateUserResponse();

    authenticateUserResponse.setToken(token);

    return authenticateUserResponse;
  }
}
