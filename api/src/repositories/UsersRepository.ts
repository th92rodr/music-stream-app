import Knex from 'knex';

import User from '@entities/User';
import UsersRepository from './interface';

export default class SQLUsersRepository implements UsersRepository {
  private databaseConnection: Knex;

  constructor(databaseConnection: Knex) {
    this.databaseConnection = databaseConnection;
  }

  public async store({ id, username, email, password }: User): Promise<void> {
    await this.databaseConnection<User, User>('users').insert({ id, username, email, password });
  }

  public async find(id: string): Promise<User> {
    return this.databaseConnection<User, User>('users').where('id', id);
  }

  public async findByEmail(email: string): Promise<User> {
    return this.databaseConnection<User, User>('users').where('email', email);
  }

  public async update({ id, username, email, password }: User): Promise<User> {
    // prettier-ignore
    return this.databaseConnection<User, User>('users')
      .where({ id })
      .update({ username, email, password });
  }

  public async delete(id: string): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<User, User>('users')
      .where({ id })
      .del();
  }
}
