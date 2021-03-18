import * as grpc from 'grpc';

import { UsersClient } from './proto/users_service_grpc_pb';
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
} from './proto/users_service_pb';
import { AuthenticateRequest, AuthenticateResponse, CreateRequest } from './dtos';
import IUsersIntegration from './interface';
import Config from '@config/index';
import User from '@entities/User';

export default class UsersIntegration implements IUsersIntegration {
  private client: UsersClient;

  constructor() {
    const ADDRESS = Config.integrations.users_service;

    this.client = new UsersClient(ADDRESS, grpc.credentials.createInsecure());
  }

  public getUser = async (id: string): Promise<User> => {
    return new Promise((resolve, reject) => {
      const getUserRequest = new GetUserRequest();
      getUserRequest.setId(id);

      this.client.get(getUserRequest, (error: Error | null, response: GetUserResponse) => {
        if (error != null) reject(error);
        else resolve(this.translateUserEntity(response));
      });
    });
  };

  public createUser = async ({ username, email, password }: CreateRequest): Promise<User> => {
    return new Promise((resolve, reject) => {
      const createUserRequest = new CreateUserRequest();
      createUserRequest.setUsername(username);
      createUserRequest.setEmail(email);
      createUserRequest.setPassword(password);

      this.client.create(createUserRequest, (error: Error | null, response: CreateUserResponse) => {
        if (error != null) reject(error);
        else resolve(this.translateUserEntity(response));
      });
    });
  };

  public updateUser = async ({ id, username, email, password }: User): Promise<User> => {
    return new Promise((resolve, reject) => {
      const updateUserRequest = new UpdateUserRequest();
      updateUserRequest.setId(id);
      updateUserRequest.setUsername(username);
      updateUserRequest.setEmail(email);
      updateUserRequest.setPassword(password);

      this.client.update(updateUserRequest, (error: Error | null, response: UpdateUserResponse) => {
        if (error != null) reject(error);
        else resolve(this.translateUserEntity(response));
      });
    });
  };

  public deleteUser = async (id: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const deleteUserRequest = new DeleteUserRequest();
      deleteUserRequest.setId(id);

      this.client.delete(deleteUserRequest, (error: Error | null, response: DeleteUserResponse) => {
        if (error != null) reject(error);
        else resolve();
      });
    });
  };

  public authenticateUser = async ({ email, password }: AuthenticateRequest): Promise<AuthenticateResponse> => {
    return new Promise((resolve, reject) => {
      const authenticateUserRequest = new AuthenticateUserRequest();
      authenticateUserRequest.setEmail(email);
      authenticateUserRequest.setPassword(password);

      this.client.authenticate(authenticateUserRequest, (error: Error | null, response: AuthenticateUserResponse) => {
        if (error != null) reject(error);
        else resolve({ token: response.getToken() });
      });
    });
  };

  private translateUserEntity(user: GetUserResponse | CreateUserResponse | UpdateUserResponse): User {
    return new User({
      id: user.getId(),
      username: user.getUsername(),
      email: user.getEmail(),
      password: user.getPassword(),
    });
  }
}
