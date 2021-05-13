import * as grpc from 'grpc';
import { ServiceError } from 'grpc';

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
import { translateAuthenticateUser, translateGrpcError, translateUserEntity } from './translators';
import BaseError from '@constants/BaseError';
import { InternalError } from '@constants/errors';
import IErrorHandler from '@handlers/ErrorHandler/interface';
import ILoggerProvider from '@providers/LoggerProvider/interface';
import IUsersService from '@services/UsersService/interface';

export { UsersService } from '../proto/users_service_grpc_pb';

export class UsersHandler implements IUsersServer {
  private usersService: IUsersService;
  private errorHandler: IErrorHandler;
  private loggerProvider: ILoggerProvider;

  constructor(usersService: IUsersService, errorHandler: IErrorHandler, loggerProvider: ILoggerProvider) {
    this.usersService = usersService;
    this.errorHandler = errorHandler;
    this.loggerProvider = loggerProvider;
  }

  private async handleError<T>(callback: grpc.sendUnaryData<T>, error: Error): Promise<void> {
    await this.errorHandler.handleError(error);

    let customError: BaseError;

    if (!this.errorHandler.isTrustedError(error)) {
      customError = new InternalError();
    } else {
      customError = error as BaseError;
    }

    const grpcError: ServiceError = new Error();
    grpcError.code = translateGrpcError(customError.statusCode);
    grpcError.details = customError.message;

    callback(grpcError, null);
  }

  get = async (call: grpc.ServerUnaryCall<Id>, callback: grpc.sendUnaryData<User>): Promise<void> => {
    try {
      const user = await this.usersService.get({ id: call.request.getId() });

      this.loggerProvider.info('[GET USER]', { id: user.id });

      callback(null, translateUserEntity(user));
    } catch (error) {
      this.handleError<User>(callback, error);
    }
  };

  create = async (call: grpc.ServerUnaryCall<CreateUserRequest>, callback: grpc.sendUnaryData<User>): Promise<void> => {
    try {
      const user = await this.usersService.create({
        username: call.request.getUsername(),
        email: call.request.getEmail(),
        password: call.request.getPassword(),
      });

      this.loggerProvider.info('[CREATE USER]');

      callback(null, translateUserEntity(user));
    } catch (error) {
      this.handleError<User>(callback, error);
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

      this.loggerProvider.info('[UPDATE USER]', { id: user.id });

      callback(null, translateUserEntity(user));
    } catch (error) {
      this.handleError<User>(callback, error);
    }
  };

  delete = async (call: grpc.ServerUnaryCall<Id>, callback: grpc.sendUnaryData<Empty>): Promise<void> => {
    try {
      await this.usersService.delete({ id: call.request.getId() });

      this.loggerProvider.info('[DELETE USER]', { id: call.request.getId() });

      callback(null, new Empty());
    } catch (error) {
      this.handleError<Empty>(callback, error);
    }
  };

  authenticate = async (call: grpc.ServerUnaryCall<AuthenticateUserRequest>, callback: grpc.sendUnaryData<AuthenticateUserResponse>): Promise<void> => {
    try {
      const { token, user } = await this.usersService.authenticate({
        email: call.request.getEmail(),
        password: call.request.getPassword(),
      });

      this.loggerProvider.info('[AUTHENTICATE USER]', { id: user.id });

      callback(null, translateAuthenticateUser(token, user));
    } catch (error) {
      this.handleError<AuthenticateUserResponse>(callback, error);
    }
  };
}
