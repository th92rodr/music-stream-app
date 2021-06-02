import { PaginationRequest } from './dtos';
import Album from '@entities/Album';

export default interface IAlbumsRepository {
  find(id: string): Promise<Album | undefined>;
  findAll(request?: PaginationRequest): Promise<Album[]>;
  store(album: Album): Promise<void>;
  update(album: Album): Promise<void>;
  delete(id: string): Promise<void>;
  findMostRecent(request: PaginationRequest): Promise<Album[]>;
}
