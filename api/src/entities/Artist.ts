import Album from './Album';
import { Genre } from '../constants';

export default class Artist {
  public readonly id: string;
  public readonly name: string;
  public readonly description: string;
  public readonly genre: Genre;
  public readonly albums: Array<Album>;
  public readonly photos: Array<string>;

  constructor({ id, name, description, genre, albums, photos }: Artist) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.genre = genre;
    this.albums = albums;
    this.photos = photos;
  }
}
