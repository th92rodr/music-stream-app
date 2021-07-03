import Knex from 'knex';

import { PaginationRequest } from './dtos';
import IMusicsRepository from './interface';
import { MusicsDb } from '../databaseEntities';
import { translateMusic, translateMusicsList } from '../translators';
import { AscendingOrder, DescendingOrder, MusicsTable } from '@constants/index';
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

  public async findAll({ limit, offset }: PaginationRequest): Promise<Music[]> {
    // prettier-ignore
    const musics = await this.databaseConnection<MusicsDb>(MusicsTable)
      .offset(offset)
      .limit(limit)
      .orderBy('title', AscendingOrder);

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

  public async findMostViewed({ limit, offset }: PaginationRequest): Promise<Music[]> {
    // prettier-ignore
    const musics = await this.databaseConnection<MusicsDb>(MusicsTable)
      .offset(offset)
      .limit(limit)
      .orderBy('views', DescendingOrder);

    return translateMusicsList(musics);
  }

  public async findMostViewedByArtist(artistId: string, { limit, offset }: PaginationRequest): Promise<Music[]> {
    // prettier-ignore
    const musics = await this.databaseConnection<MusicsDb>(MusicsTable)
      .where({ artist_id: artistId })
      .offset(offset)
      .limit(limit)
      .orderBy('views', DescendingOrder);

    return translateMusicsList(musics);
  }
}
