import User from '@entities/User';

export default interface UsersRepository {
  store({ id, username, email, password }: User): Promise<void>;
  find(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  update({ id, username, email, password }: User): Promise<User>;
  delete(id: string): Promise<void>;
}
