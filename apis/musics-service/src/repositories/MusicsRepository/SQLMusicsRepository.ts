import Knex from 'knex';

import MusicsRepository from './interface';
import { MusicsTable } from '@constants/index';
import Music from '@entities/Music';

export default class SQLMusicsRepository implements MusicsRepository {
  private databaseConnection: Knex;

  constructor(databaseConnection: Knex) {
    this.databaseConnection = databaseConnection;
  }

  public async find(id: string): Promise<Music | undefined> {
    // prettier-ignore
    return this.databaseConnection<Music>(MusicsTable)
      .where({ id })
      .first();
  }

  public async store({ id, title, durationInSeconds, file, composers, lyrics, albumId }: Music): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<Music>(MusicsTable)
      .insert({ id, title, durationInSeconds, file, composers, lyrics, albumId });
  }

  public async update({ id, title, durationInSeconds, file, composers, lyrics, albumId }: Music): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<Music>(MusicsTable)
      .where({ id })
      .update({ title, durationInSeconds, file, composers, lyrics, albumId })
      .first();
  }

  public async delete(id: string): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<Music>(MusicsTable)
      .where({ id })
      .del()
      .first();
  }
}
