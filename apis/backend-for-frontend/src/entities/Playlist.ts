import Music from './Music';

export default class Playlist {
  public readonly id: string;
  public readonly name: string;
  public readonly userId: string;
  public readonly tracks: Array<Track>;

  constructor({ id, name, userId, tracks }: Playlist) {
    this.id = id;
    this.name = name;
    this.userId = userId;
    this.tracks = tracks;
  }
}

export class Track {
  public readonly id: string;
  public readonly index: number;
  public readonly music: Music | null;

  constructor({ id, index, music }: Track) {
    this.id = id;
    this.index = index;
    this.music = music;
  }
}
