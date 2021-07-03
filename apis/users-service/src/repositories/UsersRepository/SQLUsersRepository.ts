import { Knex } from 'knex';

import IUsersRepository from './interface';
import { translateUser } from './translators';
import { UsersTable } from '@constants/index';
import User from '@entities/User';

export interface UsersDb {
  id: string;
  username: string;
  email: string;
  password: string;
}

export default class SQLUsersRepository implements IUsersRepository {
  private databaseConnection: Knex;

  constructor(databaseConnection: Knex) {
    this.databaseConnection = databaseConnection;
  }

  public async find(id: string): Promise<User | undefined> {
    // prettier-ignore
    const user = await this.databaseConnection<UsersDb>(UsersTable)
      .where({ id })
      .first();

    if (!user) {
      return;
    }

    return translateUser(user);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    // prettier-ignore
    const user = await this.databaseConnection<UsersDb>(UsersTable)
      .where({ email })
      .first();

    if (!user) {
      return;
    }

    return translateUser(user);
  }

  public async store({ id, username, email, password }: User): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<UsersDb>(UsersTable)
      .insert({ id, username, email, password });
  }

  public async update({ id, username, email, password }: User): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<UsersDb>(UsersTable)
      .where({ id })
      .update({ username, email, password });
  }

  public async delete(id: string): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<UsersDb>(UsersTable)
      .where({ id })
      .del();
  }
}
