// prettier-ignore
import {
  AddFavoriteRequest,
  AddFollowerRequest,
  CreateArtistRequest,
  DeleteArtistRequest,
  GetArtistRequest,
  GetArtistByGenreRequest,
  GetMostFollowersRequest,
  RemoveFavoriteRequest,
  RemoveFollowerRequest,
  UpdateArtistRequest,
} from './dtos';
import Artist from '@entities/Artist';

export default interface IArtistsService {
  get(request: GetArtistRequest): Promise<Artist>;
  getAll(): Promise<Array<Artist>>;
  getByGenre(request: GetArtistByGenreRequest): Promise<Array<Artist>>;
  create(request: CreateArtistRequest): Promise<Artist>;
  update(request: UpdateArtistRequest): Promise<Artist>;
  delete(request: DeleteArtistRequest): Promise<void>;
  addFavorite(request: AddFavoriteRequest): Promise<Artist>;
  removeFavorite(request: RemoveFavoriteRequest): Promise<Artist>;
  addFollower(request: AddFollowerRequest): Promise<Artist>;
  removeFollower(request: RemoveFollowerRequest): Promise<Artist>;
  getMostFollowers(request: GetMostFollowersRequest): Promise<Array<Artist>>;
}
