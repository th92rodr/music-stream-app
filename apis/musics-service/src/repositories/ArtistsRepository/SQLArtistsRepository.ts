import Knex from 'knex';

import { PaginationRequest } from './dtos';
import IArtistsRepository from './interface';
import { translateArtist, translateArtistsList } from '../translators';
import { AlbumsTable, ArtistsTable } from '@constants/index';
import Album from '@entities/Album';
import Artist from '@entities/Artist';

export default class SQLArtistsRepository implements IArtistsRepository {
  private databaseConnection: Knex;

  constructor(databaseConnection: Knex) {
    this.databaseConnection = databaseConnection;
  }

  public async find(id: string): Promise<Artist | undefined> {
    // prettier-ignore
    const artist = await this.databaseConnection<Artist>(ArtistsTable)
      .where({ id })
      .first();

    if (!artist) {
      return;
    }

    // prettier-ignore
    const albums = await this.databaseConnection<Album>(AlbumsTable)
      .where({ artistId: artist.id });

    return translateArtist(artist, albums);
  }

  public async findAll(paginationRequest?: PaginationRequest): Promise<Array<Artist>> {
    if (paginationRequest) {
      const { offset, limit } = paginationRequest;

      // prettier-ignore
      const artists = await this.databaseConnection<Artist>(ArtistsTable)
        .offset(offset)
        .limit(limit)
        .orderBy('name', 'asc');

      return translateArtistsList(artists);
    }

    const artists = await this.databaseConnection<Artist>(ArtistsTable);

    return translateArtistsList(artists);
  }

  public async findByGenre(genre: number): Promise<Array<Artist>> {
    // prettier-ignore
    const artists = await  this.databaseConnection<Artist>(ArtistsTable)
      .where({ genre });

    return translateArtistsList(artists);
  }

  public async store({ id, name, description, genre, photos }: Artist): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<Artist>(ArtistsTable)
      .insert({ id, name, description, genre, photos });
  }

  public async update({ id, name, description, genre, photos }: Artist): Promise<void> {
    // prettier-ignore
    await this.databaseConnection<Artist>(ArtistsTable)
      .where({ id })
      .update({ name, description, genre, photos })
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
