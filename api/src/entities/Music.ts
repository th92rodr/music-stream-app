export default class Music {
  public readonly id: string;
  public readonly title: string;
  public readonly duration: number;
  public readonly file: string;
  public readonly composer: Array<string>;
  public readonly lyrics: string;

  constructor({ id, title, duration, file, composer, lyrics }: Music) {
    this.id = id;
    this.title = title;
    this.duration = duration;
    this.file = file;
    this.composer = composer;
    this.lyrics = lyrics;
  }
}
