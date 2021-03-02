import Artist from '@entities/Artist';

export default interface ArtistsRepository {
  find(id: string): Promise<Artist>;
  store(artist: Artist): Promise<void>;
  update(artist: Artist): Promise<Artist>;
  delete(id: string): Promise<void>;
}
