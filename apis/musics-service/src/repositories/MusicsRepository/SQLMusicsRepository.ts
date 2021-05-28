import Knex from 'knex';

import { PaginationRequest } from './dtos';
import IMusicsRepository from './interface';
import { MusicsDb } from '../databaseEntities';
import { translateMusic, translateMusicsList } from '../translators';
import { MusicsTable } from '@constants/index';
import Music from '@entities/Music';

export default class SQLMusicsRepository implements IMusicsRepository {
  private databaseConnection: Knex;

  constructor(databaseConnection: Knex) {
    this.databaseConnection = databaseConnection;
  }

  public async find(id: string): Promise<Music | undefined> {
    // prettier-ignore
    const music = await this.databaseConnection<MusicsDb>(MusicsTable)
      .where({ id })
      .first();

    if (!music) {
      return;
    }

    return translateMusic(music);
  }

  public async findAll(paginationRequest?: PaginationRequest): Promise<Array<Music>> {
    if (paginationRequest) {
      const { offset, limit } = paginationRequest;

      // prettier-ignore
      const musics = await this.databaseConnection<MusicsDb>(MusicsTable)
        .offset(offset)
        .limit(limit)
        .orderBy('title', 'asc');

      return translateMusicsList(musics);
    }

    const musics = await this.databaseConnection<MusicsDb>(MusicsTable);

    return translateMusicsList(musics);
  }

  public async store({ id, title, durationInSeconds, file, composers, lyrics, albumId, artistId, views }: Music): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<MusicsDb>(MusicsTable)
      .insert({ id, title, duration: durationInSeconds, file, composers, lyrics, album_id: albumId, artist_id: artistId, views });
  }

  public async update({ id, title, durationInSeconds, file, composers, lyrics, albumId, artistId, views }: Music): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<MusicsDb>(MusicsTable)
      .where({ id })
      .update({ title, duration: durationInSeconds, file, composers, lyrics, album_id: albumId, artist_id: artistId, views });
  }

  public async delete(id: string): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<MusicsDb>(MusicsTable)
      .where({ id })
      .del();
  }
}
