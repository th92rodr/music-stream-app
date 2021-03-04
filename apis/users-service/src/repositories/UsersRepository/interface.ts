import User from '@entities/User';

export default interface UsersRepository {
  find(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  store(user: User): Promise<void>;
  update(user: User): Promise<void>;
  delete(id: string): Promise<void>;
}
