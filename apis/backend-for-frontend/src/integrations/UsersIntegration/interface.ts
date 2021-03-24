// prettier-ignore
import {
  GetUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
  AuthenticateUser,
  AuthenticateResponse,
} from './dtos';
import User from '@entities/User';

export default interface IUsersIntegration {
  getUser(request: GetUser): Promise<User>;
  createUser(request: CreateUser): Promise<User>;
  updateUser(request: UpdateUser): Promise<User>;
  deleteUser(request: DeleteUser): Promise<void>;
  authenticateUser(request: AuthenticateUser): Promise<AuthenticateResponse>;
}
