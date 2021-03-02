import Album from './Album';
import { Genre } from '@constants/index';

export default class Artist {
  public readonly id: string;
  public readonly name: string;
  public readonly description: string;
  public readonly genre: Genre;
  public readonly photos: Array<string>;
  public readonly albums: Array<Album>;
  public readonly albumsIds: Array<string>;

  constructor({ id, name, description, genre, photos, albums }: Omit<Artist, 'albumsIds'>) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.genre = genre;
    this.photos = photos;
    this.albums = albums;
    this.albumsIds = albums.map(album => album.id);
  }
}
