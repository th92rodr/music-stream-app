import User from '@entities/User';

export default interface UsersRepository {
  find(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  store(user: User): Promise<void>;
  update(user: User): Promise<User>;
  delete(id: string): Promise<void>;
}
