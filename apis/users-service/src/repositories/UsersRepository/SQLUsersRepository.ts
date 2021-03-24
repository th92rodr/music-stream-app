import Knex from 'knex';

import IUsersRepository from './interface';
import { UsersTable } from '@constants/index';
import User from '@entities/User';

export default class SQLUsersRepository implements IUsersRepository {
  private databaseConnection: Knex;

  constructor(databaseConnection: Knex) {
    this.databaseConnection = databaseConnection;
  }

  public async find(id: string): Promise<User | undefined> {
    // prettier-ignore
    const user = await this.databaseConnection<User>(UsersTable)
      .where({ id })
      .first();

    if (!user) {
      return;
    }

    return this.translateUser(user);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    // prettier-ignore
    const user = await this.databaseConnection<User>(UsersTable)
      .where({ email })
      .first();

    if (!user) {
      return;
    }

    return this.translateUser(user);
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

  private translateUser(user: User): User {
    return new User({
      id: user.id,
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}
