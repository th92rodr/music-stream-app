import { AuthenticateUserResponse, User } from './proto/users_service_pb';
import { AuthenticateResponse } from './dtos';
import UserEntity from '@entities/User';

export function translateUserEntity(user: User): UserEntity {
  return new UserEntity({
    id: user.getId(),
    username: user.getUsername(),
    email: user.getEmail(),
    password: user.getPassword(),
  });
}

export function translateAuthenticateUser(authenticateUserResponse: AuthenticateUserResponse): AuthenticateResponse {
  const user = authenticateUserResponse.getUser();
  return {
    token: authenticateUserResponse.getToken(),
    user: user ? translateUserEntity(user) : undefined,
  };
}
