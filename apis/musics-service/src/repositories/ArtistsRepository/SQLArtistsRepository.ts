import Knex from 'knex';

import IArtistsRepository from './interface';
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

    return this.translateArtist(artist, albums);
  }

  public async findAll(): Promise<Array<Artist>> {
    const artists = await this.databaseConnection<Artist>(ArtistsTable);

    return this.translateArtists(artists);
  }

  public async findByGenre(genre: number): Promise<Array<Artist>> {
    // prettier-ignore
    const artists = await  this.databaseConnection<Artist>(ArtistsTable)
      .where({ genre });

    return this.translateArtists(artists);
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

  private translateArtists(artists: Array<Artist>): Array<Artist> {
    return artists.map(artist => {
      return new Artist({
        id: artist.id,
        name: artist.name,
        description: artist.description,
        genre: artist.genre,
        photos: artist.photos,
      });
    });
  }

  private translateArtist(artist: Artist, albums: Array<Album>): Artist {
    const newArtist = new Artist({
      id: artist.id,
      name: artist.name,
      description: artist.description,
      genre: artist.genre,
      photos: artist.photos,
    });

    newArtist.setAlbums(albums);

    return newArtist;
  }
}
