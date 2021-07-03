import Knex from 'knex';

import { PaginationRequest } from './dtos';
import IAlbumsRepository from './interface';
import { AlbumsDb, MusicsDb } from '../databaseEntities';
import { translateAlbum, translateAlbumsList } from '../translators';
import { AlbumsTable, AscendingOrder, DescendingOrder, MusicsTable } from '@constants/index';
import Album from '@entities/Album';

export default class SQLAlbumsRepository implements IAlbumsRepository {
  private databaseConnection: Knex;

  constructor(databaseConnection: Knex) {
    this.databaseConnection = databaseConnection;
  }

  public async find(id: string): Promise<Album | undefined> {
    // prettier-ignore
    const album = await this.databaseConnection<AlbumsDb>(AlbumsTable)
      .where({ id })
      .first();

    if (!album) {
      return;
    }

    // prettier-ignore
    const tracks = await this.databaseConnection<MusicsDb>(MusicsTable)
      .where({ album_id: album.id });

    return translateAlbum(album, tracks);
  }

  public async findAll({ limit, offset }: PaginationRequest): Promise<Album[]> {
    // prettier-ignore
    const albums = await this.databaseConnection<AlbumsDb>(AlbumsTable)
      .offset(offset)
      .limit(limit)
      .orderBy('name', AscendingOrder);

    return translateAlbumsList(albums);
  }

  public async store({ id, name, releaseDate, cover, studio, producers, artistId }: Album): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<AlbumsDb>(AlbumsTable)
      .insert({ id, name, release_date: releaseDate, cover, studio, producers, artist_id: artistId });
  }

  public async update({ id, name, releaseDate, cover, studio, producers, artistId }: Album): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<AlbumsDb>(AlbumsTable)
      .where({ id })
      .update({ name, release_date: releaseDate, cover, studio, producers, artist_id: artistId });
  }

  public async delete(id: string): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<AlbumsDb>(AlbumsTable)
      .where({ id })
      .del();
  }

  public async findMostRecent({ limit, offset }: PaginationRequest): Promise<Album[]> {
    // prettier-ignore
    const albums = await this.databaseConnection<AlbumsDb>(AlbumsTable)
      .offset(offset)
      .limit(limit)
      .orderBy('release_date', DescendingOrder);

    return translateAlbumsList(albums);
  }
}
