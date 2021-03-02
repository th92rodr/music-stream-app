import Music from './Music';

export default class Album {
  public readonly id: string;
  public readonly name: string;
  public readonly year: Date;
  public readonly cover: string;
  public readonly studio: string;
  public readonly producers: Array<string>;
  public readonly tracks: Array<Music>;
  public readonly tracksIds: Array<string>;

  constructor({ id, name, year, cover, studio, producers, tracks }: Omit<Album, 'tracksIds'>) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.cover = cover;
    this.studio = studio;
    this.producers = producers;
    this.tracks = tracks;
    this.tracksIds = tracks.map(track => track.id);
  }
}
