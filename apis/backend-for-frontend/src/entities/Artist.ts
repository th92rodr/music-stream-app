import Album from './Album';
import Music from './Music';

export default class Artist {
  public readonly id: string;
  public readonly name: string;
  public readonly country: string;
  public readonly foundationDate: Date;
  public readonly members: Array<string>;
  public readonly description: string;
  public readonly genre: number;
  public readonly photos: Array<string>;
  public readonly facebookUrl: string;
  public readonly twitterUrl: string;
  public readonly instagramUrl: string;
  public readonly wikipediaUrl: string;
  public readonly font: string;
  public readonly favorites: number;
  public readonly followers: number;
  public readonly albums: Array<Album>;
  public readonly popularTracks: Array<Music>;

  // prettier-ignore
  constructor({ id, name, country, foundationDate, members, description, genre, photos, facebookUrl, twitterUrl, instagramUrl, wikipediaUrl, font, favorites, followers, albums, popularTracks }: Artist) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.foundationDate = foundationDate;
    this.members = members;
    this.description = description;
    this.genre = genre;
    this.photos = photos;
    this.facebookUrl = facebookUrl;
    this.twitterUrl = twitterUrl;
    this.instagramUrl = instagramUrl;
    this.wikipediaUrl = wikipediaUrl;
    this.font = font;
    this.favorites = favorites;
    this.followers = followers;
    this.albums = albums;
    this.popularTracks = popularTracks;
  }
}
