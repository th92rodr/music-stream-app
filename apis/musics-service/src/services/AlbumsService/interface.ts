import { CreateAlbumRequest, DeleteAlbumRequest, GetAlbumRequest, GetAllAlbumsRequest, GetMostRecentAlbumsRequest, UpdateAlbumRequest } from './dtos';
import Album from '@entities/Album';

export default interface IAlbumsService {
  get(request: GetAlbumRequest): Promise<Album>;
  getAll(request: GetAllAlbumsRequest): Promise<Album[]>;
  create(request: CreateAlbumRequest): Promise<Album>;
  update(request: UpdateAlbumRequest): Promise<Album>;
  delete(request: DeleteAlbumRequest): Promise<void>;
  getMostRecent(request: GetMostRecentAlbumsRequest): Promise<Album[]>;
}
