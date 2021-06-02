import { CreateAlbumRequest, DeleteAlbumRequest, GetAlbumRequest, GetMostRecentAlbumsRequest, UpdateAlbumRequest } from './dtos';
import Album from '@entities/Album';

export default interface IAlbumsService {
  get(request: GetAlbumRequest): Promise<Album>;
  getAll(): Promise<Album[]>;
  create(request: CreateAlbumRequest): Promise<Album>;
  update(request: UpdateAlbumRequest): Promise<Album>;
  delete(request: DeleteAlbumRequest): Promise<void>;
  getMostRecent(request: GetMostRecentAlbumsRequest): Promise<Album[]>;
}
