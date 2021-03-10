import { GetArtistRequest } from './dtos';
import Artist from '@entities/Artist';

export default interface ArtistsService {
  get(request: GetArtistRequest): Promise<Artist>;
  create(request: any): Promise<void>;
  update(request: any): Promise<void>;
  delete(request: any): Promise<void>;
}
