import Music from './Music';

export default class Playlist {
  public readonly id: string;
  public readonly name: string;
  public readonly userId: string;
  public readonly tracks: Map<number, Music>;

  constructor({ id, name, userId, tracks }: Playlist) {
    this.id = id;
    this.name = name;
    this.userId = userId;
    this.tracks = tracks;
  }
}
