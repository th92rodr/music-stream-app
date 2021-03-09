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
import UsersService from '@services/interface';

export { UsersService } from '../proto/users_service_grpc_pb';

export class UsersHandler implements IUsersServer {
  private usersService: UsersService;
  private errorHandler: ErrorHandler;

  constructor(usersService: UsersService, errorHandler: ErrorHandler) {
    this.usersService = usersService;
    this.errorHandler = errorHandler;
  }

  get = async (call: grpc.ServerUnaryCall<GetUserRequest>, callback: grpc.sendUnaryData<GetUserResponse>): Promise<void> => {
    try {
      const user = await this.usersService.get({ id: call.request.getId() });
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
      const user = await this.usersService.create({
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
      await this.usersService.update({
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
      await this.usersService.delete({
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
      const { token } = await this.usersService.authenticate({
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
