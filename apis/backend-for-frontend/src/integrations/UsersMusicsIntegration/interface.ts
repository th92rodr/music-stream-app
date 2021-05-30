import { FollowArtist, GetAllFollowingArtists, GetAllFollowingArtistsResponse, GetFollowingArtist, GetViews, UnfollowArtist, ViewMusic, ViewsResponse } from './dtos';

export default interface IUsersMusicsIntegration {
  followArtist(request: FollowArtist): Promise<void>;
  unfollowArtist(request: UnfollowArtist): Promise<void>;

  getFollowingArtist(request: GetFollowingArtist): Promise<boolean>;
  getAllFollowingArtists(request: GetAllFollowingArtists): Promise<GetAllFollowingArtistsResponse>;

  viewMusic(request: ViewMusic): Promise<ViewsResponse>;
  getViews(request: GetViews): Promise<ViewsResponse>;
}
