import User from '@entities/User';

export interface GetUserRequest {
  id: string;
}

export interface CreateUserRequest {
  username: string;
  email: string;
  password: string;
}

export interface UpdateUserRequest {
  id: string;
  username?: string;
  email?: string;
  password?: string;
}

export interface DeleteUserRequest {
  id: string;
}

export interface AuthenticateUserRequest {
  email: string;
  password: string;
}

export interface AuthenticateUserResponse {
  user: User;
  token: string;
}
