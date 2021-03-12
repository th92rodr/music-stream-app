import Artist from '@entities/Artist';

export default interface IArtistsRepository {
  find(id: string): Promise<Artist | undefined>;
  findAllAlbums(id: string): Promise<Artist | undefined>;
  store(artist: Artist): Promise<void>;
  update(artist: Artist): Promise<void>;
  delete(id: string): Promise<void>;
}
