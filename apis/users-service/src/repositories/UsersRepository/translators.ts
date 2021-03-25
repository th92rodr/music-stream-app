import User from '@entities/User';

export function translateUser(user: User): User {
  return new User({
    id: user.id,
    username: user.username,
    email: user.email,
    password: user.password,
  });
}
