// prettier-ignore
import {
  GetArtistRequest,
  GetArtistByGenreRequest,
  CreateArtistRequest,
  UpdateArtistRequest,
  DeleteArtistRequest
} from './dtos';
import Artist from '@entities/Artist';

export default interface IArtistsService {
  get(request: GetArtistRequest): Promise<Artist>;
  getAll(): Promise<Array<Artist>>;
  getByGenre(request: GetArtistByGenreRequest): Promise<Array<Artist>>;
  create(request: CreateArtistRequest): Promise<Artist>;
  update(request: UpdateArtistRequest): Promise<Artist>;
  delete(request: DeleteArtistRequest): Promise<void>;
}
