// prettier-ignore
import {
  GetMusic,
  CreateMusic,
  UpdateMusic,
  DeleteMusic,
  GetAlbum,
  CreateAlbum,
  UpdateAlbum,
  DeleteAlbum,
  GetArtist,
  GetArtistByGenre,
  CreateArtist,
  UpdateArtist,
  DeleteArtist,
} from './dtos';
import Album from '@entities/Album';
import Artist from '@entities/Artist';
import Music from '@entities/Music';

export default interface IMusicsIntegration {
  getMusic(request: GetMusic): Promise<Music>;
  getMusics(): Promise<Array<Music>>;
  createMusic(request: CreateMusic): Promise<Music>;
  updateMusic(request: UpdateMusic): Promise<Music>;
  deleteMusic(request: DeleteMusic): Promise<void>;

  getAlbum(request: GetAlbum): Promise<Album>;
  getAlbums(): Promise<Array<Album>>;
  createAlbum(request: CreateAlbum): Promise<Album>;
  updateAlbum(request: UpdateAlbum): Promise<Album>;
  deleteAlbum(request: DeleteAlbum): Promise<void>;

  getArtist(request: GetArtist): Promise<Artist>;
  getArtists(): Promise<Array<Artist>>;
  getArtistsByGenre(request: GetArtistByGenre): Promise<Array<Artist>>;
  createArtist(request: CreateArtist): Promise<Artist>;
  updateArtist(request: UpdateArtist): Promise<Artist>;
  deleteArtist(request: DeleteArtist): Promise<void>;
}
