import Knex from 'knex';

import { UsersTable } from '@constants/index';
import User from '@entities/User';
import UsersRepository from './interface';

export default class SQLUsersRepository implements UsersRepository {
  private databaseConnection: Knex;

  constructor(databaseConnection: Knex) {
    this.databaseConnection = databaseConnection;
  }

  public async find(id: string): Promise<User> {
    // prettier-ignore
    return this.databaseConnection<User, User>(UsersTable)
      .where({ id });
  }

  public async findByEmail(email: string): Promise<User> {
    // prettier-ignore
    return this.databaseConnection<User, User>(UsersTable)
      .where({ email });
  }

  public async store({ id, username, email, password }: User): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<User, User>(UsersTable)
      .insert({ id, username, email, password });
  }

  public async update({ id, username, email, password }: User): Promise<User> {
    // prettier-ignore
    return this.databaseConnection<User, User>(UsersTable)
      .where({ id })
      .update({ username, email, password });
  }

  public async delete(id: string): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<User, User>(UsersTable)
      .where({ id })
      .del();
  }
}
