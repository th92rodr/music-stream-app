import {
  CreateAlbum,
  CreateArtist,
  CreateMusic,
  DeleteAlbum,
  DeleteArtist,
  DeleteMusic,
  FavoriteArtist,
  FollowArtist,
  GetAlbum,
  GetAlbums,
  GetArtist,
  GetArtists,
  GetArtistsByGenre,
  GetMostFollowedArtists,
  GetMostRecentAlbums,
  GetMostViewedMusics,
  GetMusic,
  GetMusics,
  UnfavoriteArtist,
  UnfollowArtist,
  UpdateAlbum,
  UpdateArtist,
  UpdateMusic,
  ViewMusic,
} from './dtos';
import Album from '@entities/Album';
import Artist from '@entities/Artist';
import Music from '@entities/Music';

export default interface IMusicsIntegration {
  getMusic(request: GetMusic): Promise<Music>;
  getMusics(request: GetMusics): Promise<Music[]>;
  createMusic(request: CreateMusic): Promise<Music>;
  updateMusic(request: UpdateMusic): Promise<Music>;
  deleteMusic(request: DeleteMusic): Promise<void>;
  viewMusic(request: ViewMusic): Promise<Music>;
  getMostViewedMusics(request: GetMostViewedMusics): Promise<Music[]>;

  getAlbum(request: GetAlbum): Promise<Album>;
  getAlbums(request: GetAlbums): Promise<Album[]>;
  createAlbum(request: CreateAlbum): Promise<Album>;
  updateAlbum(request: UpdateAlbum): Promise<Album>;
  deleteAlbum(request: DeleteAlbum): Promise<void>;
  getMostRecentAlbums(request: GetMostRecentAlbums): Promise<Album[]>;

  getArtist(request: GetArtist): Promise<Artist>;
  getArtists(request: GetArtists): Promise<Artist[]>;
  getArtistsByGenre(request: GetArtistsByGenre): Promise<Artist[]>;
  createArtist(request: CreateArtist): Promise<Artist>;
  updateArtist(request: UpdateArtist): Promise<Artist>;
  deleteArtist(request: DeleteArtist): Promise<void>;
  favoriteArtist(request: FavoriteArtist): Promise<Artist>;
  unfavoriteArtist(request: UnfavoriteArtist): Promise<Artist>;
  followArtist(request: FollowArtist): Promise<Artist>;
  unfollowArtist(request: UnfollowArtist): Promise<Artist>;
  getMostFollowedArtists(request: GetMostFollowedArtists): Promise<Artist[]>;
}
