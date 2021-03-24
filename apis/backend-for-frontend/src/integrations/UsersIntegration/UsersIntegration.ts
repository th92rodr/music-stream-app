import * as grpc from 'grpc';

import { UsersClient } from './proto/users_service_grpc_pb';
// prettier-ignore
import {
  User,
  Id,
  Empty,
  CreateUserRequest,
  UpdateUserRequest,
  AuthenticateUserRequest,
  AuthenticateUserResponse,
} from './proto/users_service_pb';
// prettier-ignore
import {
  GetUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
  AuthenticateUser,
  AuthenticateResponse,
} from './dtos';
import IUsersIntegration from './interface';
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
        if (error != null) reject(error);
        else resolve(this.translateUserEntity(user));
      });
    });
  };

  public createUser = async ({ username, email, password }: CreateUser): Promise<UserEntity> => {
    return new Promise((resolve, reject) => {
      const createUserRequest = new CreateUserRequest();
      createUserRequest.setUsername(username);
      createUserRequest.setEmail(email);
      createUserRequest.setPassword(password);

      this.client.create(createUserRequest, (error: Error | null, user: User) => {
        if (error != null) reject(error);
        else resolve(this.translateUserEntity(user));
      });
    });
  };

  public updateUser = async ({ id, username, email, password }: UpdateUser): Promise<UserEntity> => {
    return new Promise((resolve, reject) => {
      const updateUserRequest = new UpdateUserRequest();
      updateUserRequest.setId(id);
      updateUserRequest.setUsername(username ? username : '');
      updateUserRequest.setEmail(email ? email : '');
      updateUserRequest.setPassword(password ? password : '');

      this.client.update(updateUserRequest, (error: Error | null, user: User) => {
        if (error != null) reject(error);
        else resolve(this.translateUserEntity(user));
      });
    });
  };

  public deleteUser = async ({ id }: DeleteUser): Promise<void> => {
    return new Promise((resolve, reject) => {
      const userId = new Id();
      userId.setId(id);

      this.client.delete(userId, (error: Error | null) => {
        if (error != null) reject(error);
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
        if (error != null) reject(error);
        else {
          const user = response.getUser();
          resolve({
            token: response.getToken(),
            user: user ? this.translateUserEntity(user) : undefined,
          });
        }
      });
    });
  };

  private translateUserEntity(user: User): UserEntity {
    return new UserEntity({
      id: user.getId(),
      username: user.getUsername(),
      email: user.getEmail(),
      password: user.getPassword(),
    });
  }
}
