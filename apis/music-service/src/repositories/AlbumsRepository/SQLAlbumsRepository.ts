import Knex from 'knex';

import Album from '@entities/Album';
import { AlbumsTable } from '@constants/index';
import AlbumsRepository from './interface';

export default class SQLAlbumsRepository implements AlbumsRepository {
  private databaseConnection: Knex;

  constructor(databaseConnection: Knex) {
    this.databaseConnection = databaseConnection;
  }

  public async find(id: string): Promise<Album> {
    // prettier-ignore
    return this.databaseConnection<Album, Album>(AlbumsTable)
      .where({ id });
  }

  public async store({ id, name, year, producers, studio, cover, tracksIds }: Album): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<Album, Album>(AlbumsTable)
      .insert({ id, name, year, producers, studio, cover, tracksIds });
  }

  public async update({ id, name, year, producers, studio, cover, tracksIds }: Album): Promise<Album> {
    // prettier-ignore
    return this.databaseConnection<Album, Album>(AlbumsTable)
      .where({ id })
      .update({ name, year, producers, studio, cover, tracksIds });
  }

  public async delete(id: string): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<Album, Album>(AlbumsTable)
      .where({ id })
      .del();
  }
}
