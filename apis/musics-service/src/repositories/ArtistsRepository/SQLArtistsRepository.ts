import Knex from 'knex';

import ArtistsRepository from './interface';
import { AlbumsTable, ArtistsTable } from '@constants/index';
import Artist from '@entities/Artist';
import Album from '@entities/Album';
import { removeUndefineds } from '@utils/index';

export default class SQLArtistsRepository implements ArtistsRepository {
  private databaseConnection: Knex;

  constructor(databaseConnection: Knex) {
    this.databaseConnection = databaseConnection;
  }

  public async find(id: string): Promise<Artist | undefined> {
    // prettier-ignore
    return this.databaseConnection<Artist>(ArtistsTable)
      .where({ id })
      .first();
  }

  public async findAllAlbums(id: string): Promise<Artist | undefined> {
    // prettier-ignore
    const artist = await this.databaseConnection<Artist>(ArtistsTable)
      .where({ id })
      .first();

    if (!artist) {
      return;
    }

    let promises = artist.albumsIds.map(async albumId => {
      // prettier-ignore
      return await this.databaseConnection<Album>(AlbumsTable)
        .where({ id: albumId })
        .first();
    });

    const albums = await Promise.all(promises);
    artist.albums = albums.filter(removeUndefineds);

    return artist;
  }

  public async store({ id, name, description, genre, photos, albumsIds }: Artist): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<Artist>(ArtistsTable)
      .insert({ id, name, description, genre, photos, albumsIds });
  }

  public async update({ id, name, description, genre, photos, albumsIds }: Artist): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<Artist>(ArtistsTable)
      .where({ id })
      .update({ name, description, genre, photos, albumsIds })
      .first();
  }

  public async delete(id: string): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<Artist>(ArtistsTable)
      .where({ id })
      .del()
      .first();
  }
}
