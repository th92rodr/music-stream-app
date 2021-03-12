import Knex from 'knex';

import IAlbumsRepository from './interface';
import { AlbumsTable, MusicsTable } from '@constants/index';
import Album from '@entities/Album';
import Music from '@entities/Music';
import { removeUndefineds } from '@utils/index';

export default class SQLAlbumsRepository implements IAlbumsRepository {
  private databaseConnection: Knex;

  constructor(databaseConnection: Knex) {
    this.databaseConnection = databaseConnection;
  }

  public async find(id: string): Promise<Album | undefined> {
    // prettier-ignore
    return this.databaseConnection<Album>(AlbumsTable)
      .where({ id })
      .first();
  }

  public async findAllTracks(id: string): Promise<Album | undefined> {
    // prettier-ignore
    const album = await this.databaseConnection<Album>(AlbumsTable)
      .where({ id })
      .first();

    if (!album) {
      return;
    }

    let promises = album.tracksIds.map(async trackId => {
      // prettier-ignore
      return await this.databaseConnection<Music>(MusicsTable)
        .where({ id: trackId })
        .first();
    });

    const musics = await Promise.all(promises);
    album.tracks = musics.filter(removeUndefineds);

    return album;
  }

  public async store({ id, name, year, cover, studio, producers, tracksIds, artistId }: Album): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<Album>(AlbumsTable)
      .insert({ id, name, year, cover, studio, producers, tracksIds, artistId });
  }

  public async update({ id, name, year, cover, studio, producers, tracksIds, artistId }: Album): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<Album>(AlbumsTable)
      .where({ id })
      .update({ name, year, cover, studio, producers, tracksIds, artistId })
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
