import { GetAlbumRequest } from './dtos';
import Album from '@entities/Album';

export default interface IAlbumsService {
  get(request: GetAlbumRequest): Promise<Album>;
  create(request: any): Promise<void>;
  update(request: any): Promise<void>;
  delete(request: any): Promise<void>;
}
