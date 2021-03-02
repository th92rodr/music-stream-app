import Knex from 'knex';

import { ArtistsTable } from '@constants/index';
import Artist from '@entities/Artist';
import ArtistsRepository from './interface';

export default class SQLArtistsRepository implements ArtistsRepository {
  private databaseConnection: Knex;

  constructor(databaseConnection: Knex) {
    this.databaseConnection = databaseConnection;
  }

  public async find(id: string): Promise<Artist> {
    // prettier-ignore
    return this.databaseConnection<Artist, Artist>(ArtistsTable)
      .where({ id });
  }

  public async store({ id, name, genre, description, albums, photos }: Artist): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<Artist, Artist>(ArtistsTable)
      .insert({ id, name, genre, description, albums, photos });
  }

  public async update({ id, name, genre, description, albums, photos }: Artist): Promise<Artist> {
    // prettier-ignore
    return this.databaseConnection<Artist, Artist>(ArtistsTable)
      .where({ id })
      .update({ name, genre, description, albums, photos });
  }

  public async delete(id: string): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<Artist, Artist>(ArtistsTable)
      .where({ id })
      .del();
  }
}
