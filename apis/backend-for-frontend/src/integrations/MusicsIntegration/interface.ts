import Album from '@entities/Album';
import Artist from '@entities/Artist';
import Music from '@entities/Music';

export default interface IMusicsIntegration {
  getMusic(id: string): Promise<Music>;
  getAlbum(id: string): Promise<Album>;
  getArtist(id: string): Promise<Artist>;
}
