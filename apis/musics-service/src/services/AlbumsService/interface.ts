// prettier-ignore
import {
  GetAlbumRequest,
  CreateAlbumRequest,
  UpdateAlbumRequest,
  DeleteAlbumRequest,
} from './dtos';
import Album from '@entities/Album';

export default interface IAlbumsService {
  get(request: GetAlbumRequest): Promise<Album>;
  getAll(): Promise<Array<Album>>;
  create(request: CreateAlbumRequest): Promise<Album>;
  update(request: UpdateAlbumRequest): Promise<Album>;
  delete(request: DeleteAlbumRequest): Promise<void>;
}
