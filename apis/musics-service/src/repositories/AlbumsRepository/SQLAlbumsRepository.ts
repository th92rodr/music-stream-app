import Knex from 'knex';

import IAlbumsRepository from './interface';
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

    return this.translateAlbum(album, tracks);
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

  private translateAlbum(album: Album, tracks: Array<Music>): Album {
    const newAlbum = new Album({
      id: album.id,
      name: album.name,
      year: album.year,
      cover: album.cover,
      studio: album.studio,
      producers: album.producers,
      artistId: album.artistId,
    });

    newAlbum.setTracks(tracks);

    return newAlbum;
  }
}
