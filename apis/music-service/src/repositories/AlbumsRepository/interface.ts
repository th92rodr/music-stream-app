import Album from '@entities/Album';

export default interface AlbumsRepository {
  find(id: string): Promise<Album>;
  store(album: Album): Promise<void>;
  update(album: Album): Promise<Album>;
  delete(id: string): Promise<void>;
}
