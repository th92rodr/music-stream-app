import Music from './Music';

export default class Album {
  public readonly id: string;
  public readonly name: string;
  public readonly releaseDate: Date;
  public readonly cover: string;
  public readonly studio: string;
  public readonly producers: Array<string>;
  public readonly artistId: string;
  public tracks: Array<Music>;

  constructor({ id, name, releaseDate, cover, studio, producers, artistId }: Omit<Album, 'tracks' | 'setTracks'>) {
    this.id = id;
    this.name = name;
    this.releaseDate = releaseDate;
    this.cover = cover;
    this.studio = studio;
    this.producers = producers;
    this.artistId = artistId;
    this.tracks = [];
  }

  public setTracks(tracks: Array<Music>): void {
    this.tracks = tracks;
  }
}
