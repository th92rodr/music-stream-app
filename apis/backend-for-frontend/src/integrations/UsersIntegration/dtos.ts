import User from '@entities/User';

export interface GetUser {
  id: string;
}

export interface CreateUser {
  username: string;
  email: string;
  password: string;
}

export interface UpdateUser {
  id: string;
  username?: string;
  email?: string;
  password?: string;
}

export interface DeleteUser {
  id: string;
}

export interface AuthenticateUser {
  email: string;
  password: string;
}

export interface AuthenticateResponse {
  token: string;
  user?: User;
}
