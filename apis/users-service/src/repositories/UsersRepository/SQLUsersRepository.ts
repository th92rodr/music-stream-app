import Knex from 'knex';

import User from '@entities/User';
import { UsersTable } from '@constants/index';
import UsersRepository from './interface';

export default class SQLUsersRepository implements UsersRepository {
  private databaseConnection: Knex;

  constructor(databaseConnection: Knex) {
    this.databaseConnection = databaseConnection;
  }

  public async find(id: string): Promise<User | undefined> {
    // prettier-ignore
    return this.databaseConnection<User>(UsersTable)
      .where({ id })
      .first();
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    // prettier-ignore
    return this.databaseConnection<User>(UsersTable)
      .where({ email })
      .first();
  }

  public async store({ id, username, email, password }: User): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<User>(UsersTable)
      .insert({ id, username, email, password });
  }

  public async update({ id, username, email, password }: User): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<User>(UsersTable)
      .where({ id })
      .update({ username, email, password })
      .first();
  }

  public async delete(id: string): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<User>(UsersTable)
      .where({ id })
      .del()
      .first();
  }
}
