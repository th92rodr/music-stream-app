import Knex from 'knex';

import { PaginationRequest } from './dtos';
import IAlbumsRepository from './interface';
import { translateAlbum, translateAlbumsList } from '../translators';
import { AlbumsTable, MusicsTable } from '@constants/index';
import Album from '@entities/Album';
import Music from '@entities/Music';

export default class SQLAlbumsRepository implements IAlbumsRepository {
  private databaseConnection: Knex;

  constructor(databaseConnection: Knex) {
    this.databaseConnection = databaseConnection;
  }

  public async find(id: string): Promise<Album | undefined> {
    // prettier-ignore
    const album = await this.databaseConnection<Album>(AlbumsTable)
      .where({ id })
      .first();

    if (!album) {
      return;
    }

    // prettier-ignore
    const tracks = await this.databaseConnection<Music>(MusicsTable)
      .where({ albumId: album.id });

    return translateAlbum(album, tracks);
  }

  public async findAll(paginationRequest?: PaginationRequest): Promise<Array<Album>> {
    if (paginationRequest) {
      const { offset, limit } = paginationRequest;

      // prettier-ignore
      const albums = await this.databaseConnection<Album>(AlbumsTable)
        .offset(offset)
        .limit(limit)
        .orderBy('name', 'asc');

      return translateAlbumsList(albums);
    }

    const albums = await this.databaseConnection<Album>(AlbumsTable);

    return translateAlbumsList(albums);
  }

  public async store({ id, name, year, cover, studio, producers, artistId }: Album): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<Album>(AlbumsTable)
      .insert({ id, name, year, cover, studio, producers, artistId });
  }

  public async update({ id, name, year, cover, studio, producers, artistId }: Album): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<Album>(AlbumsTable)
      .where({ id })
      .update({ name, year, cover, studio, producers, artistId })
      .first();
  }

  public async delete(id: string): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<Album>(AlbumsTable)
      .where({ id })
      .del()
      .first();
  }
}
