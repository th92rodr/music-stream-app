import Album from '@entities/Album';

export default interface IAlbumsRepository {
  find(id: string): Promise<Album | undefined>;
  store(album: Album): Promise<void>;
  update(album: Album): Promise<void>;
  delete(id: string): Promise<void>;
}
