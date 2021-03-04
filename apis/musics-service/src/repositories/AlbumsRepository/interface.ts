import Album from '@entities/Album';

export default interface AlbumsRepository {
  find(id: string): Promise<Album | undefined>;
  findAllTracks(id: string): Promise<Album | undefined>;
  store(album: Album): Promise<void>;
  update(album: Album): Promise<void>;
  delete(id: string): Promise<void>;
}
