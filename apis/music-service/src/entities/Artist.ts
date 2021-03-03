import Album from './Album';
import { Genre } from '@constants/index';

export default class Artist {
  public readonly id: string;
  public readonly name: string;
  public readonly description: string;
  public readonly genre: Genre;
  public readonly photos: Array<string>;
  public albums: Array<Album>;
  public albumsIds: Array<string>;

  constructor({ id, name, description, genre, photos }: Omit<Artist, 'albums' | 'albumsIds' | 'setAlbums'>) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.genre = genre;
    this.photos = photos;
    this.albums = [];
    this.albumsIds = [];
  }

  public setAlbums(albums: Array<Album>) {
    this.albums = albums;
    this.albumsIds = albums.map(album => album.id);
  }
}
