import {
  CreateArtistRequest,
  DeleteArtistRequest,
  FavoriteArtistRequest,
  FollowArtistRequest,
  GetArtistsByGenreRequest,
  GetArtistRequest,
  GetMostFollowedArtistsRequest,
  UnfavoriteArtistRequest,
  UnfollowArtistRequest,
  UpdateArtistRequest,
} from './dtos';
import Artist from '@entities/Artist';

export default interface IArtistsService {
  get(request: GetArtistRequest): Promise<Artist>;
  getAll(): Promise<Artist[]>;
  getByGenre(request: GetArtistsByGenreRequest): Promise<Artist[]>;
  create(request: CreateArtistRequest): Promise<Artist>;
  update(request: UpdateArtistRequest): Promise<Artist>;
  delete(request: DeleteArtistRequest): Promise<void>;
  favorite(request: FavoriteArtistRequest): Promise<Artist>;
  unfavorite(request: UnfavoriteArtistRequest): Promise<Artist>;
  follow(request: FollowArtistRequest): Promise<Artist>;
  unfollow(request: UnfollowArtistRequest): Promise<Artist>;
  getMostFollowed(request: GetMostFollowedArtistsRequest): Promise<Artist[]>;
}
