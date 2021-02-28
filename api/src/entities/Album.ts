import Music from './Music';

export default class Album {
  public readonly id: string;
  public readonly name: string;
  public readonly year: Date;
  public readonly cover: string;
  public readonly tracks: Array<Music>;
  public readonly producers: Array<string>;
  public readonly studio: string;

  constructor({ id, name, year, cover, tracks, producers, studio }: Album) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.cover = cover;
    this.tracks = tracks;
    this.producers = producers;
    this.studio = studio;
  }
}
