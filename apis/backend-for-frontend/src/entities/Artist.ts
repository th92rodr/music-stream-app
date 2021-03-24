import Album from './Album';

export default class Artist {
  public readonly id: string;
  public readonly name: string;
  public readonly description: string;
  public readonly genre: number;
  public readonly photos: Array<string>;
  public albums: Array<Album>;

  constructor({ id, name, description, genre, photos }: Omit<Artist, 'albums' | 'setAlbums'>) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.genre = genre;
    this.photos = photos;
    this.albums = [];
  }

  public setAlbums(albums: Array<Album>): void {
    this.albums = albums;
  }
}
