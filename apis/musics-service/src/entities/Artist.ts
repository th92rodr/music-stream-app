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
  public favorites: number;
  public followers: number;
  public albums: Array<Album>;
  public popularTracks: Array<Music>;

  constructor({
    id,
    name,
    country,
    foundationDate,
    members,
    description,
    genre,
    photos,
    facebookUrl,
    twitterUrl,
    instagramUrl,
    wikipediaUrl,
    font,
    favorites,
    followers,
  }: Omit<Artist, 'albums' | 'popularTracks' | 'favorite' | 'unfavorite' | 'follow' | 'unfollow' | 'setAlbums' | 'setPopularTracks'>) {
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
    this.albums = [];
    this.popularTracks = [];
  }

  public favorite(): void {
    this.favorites++;
  }

  public unfavorite(): void {
    this.favorites--;
  }

  public follow(): void {
    this.followers++;
  }

  public unfollow(): void {
    this.followers--;
  }

  public setAlbums(albums: Array<Album>): void {
    this.albums = albums;
  }

  public setPopularTracks(tracks: Array<Music>): void {
    this.popularTracks = tracks;
  }
}
