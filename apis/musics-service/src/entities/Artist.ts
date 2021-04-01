import Album from './Album';

export default class Artist {
  public readonly id: string;
  public readonly name: string;
  public readonly country: string;
  public readonly foundationDate: Date;
  public readonly members: Array<string>;
  public readonly description: string;
  public readonly genre: number;
  public readonly photos: Array<string>;
  public albums: Array<Album>;

  constructor({ id, name, country, foundationDate, members, description, genre, photos }: Omit<Artist, 'albums' | 'setAlbums'>) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.foundationDate = foundationDate;
    this.members = members;
    this.description = description;
    this.genre = genre;
    this.photos = photos;
    this.albums = [];
  }

  public setAlbums(albums: Array<Album>): void {
    this.albums = albums;
  }
}
