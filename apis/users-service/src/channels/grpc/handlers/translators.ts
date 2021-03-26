import { User, AuthenticateUserResponse } from '../proto/users_service_pb';
import UserEntity from '@entities/User';

export function translateUserEntity(userEntity: UserEntity): User {
  const user = new User();

  user.setId(userEntity.id);
  user.setUsername(userEntity.username);
  user.setEmail(userEntity.email);
  user.setPassword(userEntity.password);

  return user;
}

export function translateAuthenticateUser(token: string, userEntity: UserEntity): AuthenticateUserResponse {
  const authenticateUserResponse = new AuthenticateUserResponse();

  authenticateUserResponse.setToken(token);
  authenticateUserResponse.setUser(translateUserEntity(userEntity));

  return authenticateUserResponse;
}
