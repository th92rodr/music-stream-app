import * as grpc from 'grpc';

import { IUsersServer } from '../proto/users_service_grpc_pb';
// prettier-ignore
import {
  User,
  Id,
  Empty,
  CreateUserRequest,
  UpdateUserRequest,
  AuthenticateUserRequest,
  AuthenticateUserResponse,
} from '../proto/users_service_pb';
import { translateAuthenticateUser, translateUserEntity } from './translators';
import { InternalError } from '@constants/errors';
import IErrorHandler from '@handlers/ErrorHandler/interface';
import IUsersService from '@services/UsersService/interface';

export { UsersService } from '../proto/users_service_grpc_pb';

export class UsersHandler implements IUsersServer {
  private usersService: IUsersService;
  private errorHandler: IErrorHandler;

  constructor(usersService: IUsersService, errorHandler: IErrorHandler) {
    this.usersService = usersService;
    this.errorHandler = errorHandler;
  }

  get = async (call: grpc.ServerUnaryCall<Id>, callback: grpc.sendUnaryData<User>): Promise<void> => {
    try {
      const user = await this.usersService.get({ id: call.request.getId() });

      callback(null, translateUserEntity(user));
    } catch (error) {
      await this.errorHandler.handleError(error);

      if (!this.errorHandler.isTrustedError(error)) {
        callback(new InternalError(), null);
      }

      callback(error, null);
    }
  };

  create = async (call: grpc.ServerUnaryCall<CreateUserRequest>, callback: grpc.sendUnaryData<User>): Promise<void> => {
    try {
      const user = await this.usersService.create({
        username: call.request.getUsername(),
        email: call.request.getEmail(),
        password: call.request.getPassword(),
      });

      callback(null, translateUserEntity(user));
    } catch (error) {
      await this.errorHandler.handleError(error);

      if (!this.errorHandler.isTrustedError(error)) {
        callback(new InternalError(), null);
      }

      callback(error, null);
    }
  };

  update = async (call: grpc.ServerUnaryCall<UpdateUserRequest>, callback: grpc.sendUnaryData<User>): Promise<void> => {
    try {
      const user = await this.usersService.update({
        id: call.request.getId(),
        username: call.request.getUsername() != '' ? call.request.getUsername() : undefined,
        email: call.request.getEmail() != '' ? call.request.getEmail() : undefined,
        password: call.request.getPassword() != '' ? call.request.getPassword() : undefined,
      });

      callback(null, translateUserEntity(user));
    } catch (error) {
      await this.errorHandler.handleError(error);

      if (!this.errorHandler.isTrustedError(error)) {
        callback(new InternalError(), null);
      }

      callback(error, null);
    }
  };

  delete = async (call: grpc.ServerUnaryCall<Id>, callback: grpc.sendUnaryData<Empty>): Promise<void> => {
    try {
      await this.usersService.delete({ id: call.request.getId() });

      callback(null, new Empty());
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
      const { token, user } = await this.usersService.authenticate({
        email: call.request.getEmail(),
        password: call.request.getPassword(),
      });

      callback(null, translateAuthenticateUser(token, user));
    } catch (error) {
      await this.errorHandler.handleError(error);

      if (!this.errorHandler.isTrustedError(error)) {
        callback(new InternalError(), null);
      }

      callback(error, null);
    }
  };
}
