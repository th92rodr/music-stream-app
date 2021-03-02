import Knex from 'knex';

import { MusicsTable } from '@constants/index';
import Music from '@entities/Music';
import MusicsRepository from './interface';

export default class SQLMusicsRepository implements MusicsRepository {
  private databaseConnection: Knex;

  constructor(databaseConnection: Knex) {
    this.databaseConnection = databaseConnection;
  }

  public async find(id: string): Promise<Music> {
    // prettier-ignore
    return this.databaseConnection<Music, Music>(MusicsTable)
      .where({ id });
  }

  public async store({ id, title, duration, composers, file, lyrics }: Music): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<Music, Music>(MusicsTable)
      .insert({ id, title, duration, composers, file, lyrics });
  }

  public async update({ id, title, duration, composers, file, lyrics }: Music): Promise<Music> {
    // prettier-ignore
    return this.databaseConnection<Music, Music>(MusicsTable)
      .where({ id })
      .update({ title, duration, composers, file, lyrics });
  }

  public async delete(id: string): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<Music, Music>(MusicsTable)
      .where({ id })
      .del();
  }
}
