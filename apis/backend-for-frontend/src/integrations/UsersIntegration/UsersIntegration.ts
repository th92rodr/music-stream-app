import * as grpc from 'grpc';

// prettier-ignore
import {
  AuthenticateResponse,
  AuthenticateUser,
  CreateUser,
  DeleteUser,
  GetUser,
  UpdateUser,
} from './dtos';
import IUsersIntegration from './interface';
import { UsersClient } from '../proto/users_service_grpc_pb';
// prettier-ignore
import {
  AuthenticateUserRequest,
  AuthenticateUserResponse,
  CreateUserRequest,
  Id,
  UpdateUserRequest,
  User,
} from '../proto/users_service_pb';
import { translateAuthenticateUser, translateUserEntity } from '../translators';
import { handleError } from '../utils';
import Config from '@config/index';
import UserEntity from '@entities/User';

export default class UsersIntegration implements IUsersIntegration {
  private client: UsersClient;

  constructor() {
    const ADDRESS = Config.integrations.users_service;

    this.client = new UsersClient(ADDRESS, grpc.credentials.createInsecure());
  }

  public getUser = async ({ id }: GetUser): Promise<UserEntity> => {
    return new Promise((resolve, reject) => {
      const userId = new Id();
      userId.setId(id);

      this.client.get(userId, (error: Error | null, user: User) => {
        if (error != null) reject(handleError(error));
        else resolve(translateUserEntity(user));
      });
    });
  };

  public createUser = async ({ email, password, username }: CreateUser): Promise<UserEntity> => {
    return new Promise((resolve, reject) => {
      const createUserRequest = new CreateUserRequest();
      createUserRequest.setEmail(email);
      createUserRequest.setPassword(password);
      createUserRequest.setUsername(username);

      this.client.create(createUserRequest, (error: Error | null, user: User) => {
        if (error != null) reject(handleError(error));
        else resolve(translateUserEntity(user));
      });
    });
  };

  public updateUser = async ({ id, email, password, username }: UpdateUser): Promise<UserEntity> => {
    return new Promise((resolve, reject) => {
      const updateUserRequest = new UpdateUserRequest();
      updateUserRequest.setId(id);
      updateUserRequest.setEmail(email ? email : '');
      updateUserRequest.setPassword(password ? password : '');
      updateUserRequest.setUsername(username ? username : '');

      this.client.update(updateUserRequest, (error: Error | null, user: User) => {
        if (error != null) reject(handleError(error));
        else resolve(translateUserEntity(user));
      });
    });
  };

  public deleteUser = async ({ id }: DeleteUser): Promise<void> => {
    return new Promise((resolve, reject) => {
      const userId = new Id();
      userId.setId(id);

      this.client.delete(userId, (error: Error | null) => {
        if (error != null) reject(handleError(error));
        else resolve();
      });
    });
  };

  public authenticateUser = async ({ email, password }: AuthenticateUser): Promise<AuthenticateResponse> => {
    return new Promise((resolve, reject) => {
      const authenticateUserRequest = new AuthenticateUserRequest();
      authenticateUserRequest.setEmail(email);
      authenticateUserRequest.setPassword(password);

      this.client.authenticate(authenticateUserRequest, (error: Error | null, response: AuthenticateUserResponse) => {
        if (error != null) reject(handleError(error));
        else resolve(translateAuthenticateUser(response));
      });
    });
  };
}
