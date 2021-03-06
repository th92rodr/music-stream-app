export default class Music {
  public readonly id: string;
  public readonly title: string;
  public readonly durationInSeconds: number;
  public readonly file: string;
  public readonly composers: Array<string>;
  public readonly lyrics: string;
  public readonly albumId: string;

  constructor({ id, title, durationInSeconds, file, composers, lyrics, albumId }: Music) {
    this.id = id;
    this.title = title;
    this.durationInSeconds = durationInSeconds;
    this.file = file;
    this.composers = composers;
    this.lyrics = lyrics;
    this.albumId = albumId;
  }
}
