export default class Music {
  public readonly id: string;
  public readonly title: string;
  public readonly duration: number;
  public readonly file: string;
  public readonly composers: Array<string>;
  public readonly lyrics: string;

  constructor({ id, title, duration, file, composers, lyrics }: Music) {
    this.id = id;
    this.title = title;
    this.duration = duration;
    this.file = file;
    this.composers = composers;
    this.lyrics = lyrics;
  }
}
