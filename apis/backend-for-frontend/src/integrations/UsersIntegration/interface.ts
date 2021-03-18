import { AuthenticateRequest, AuthenticateResponse, CreateRequest } from './dtos';
import User from '@entities/User';

export default interface IUsersIntegration {
  getUser(id: string): Promise<User>;
  createUser(request: CreateRequest): Promise<User>;
  updateUser(user: User): Promise<User>;
  deleteUser(id: string): Promise<void>;
  authenticateUser(request: AuthenticateRequest): Promise<AuthenticateResponse>;
}
