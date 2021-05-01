import { CreatePlaylist, DeletePlaylist, GetPlaylist, GetPlaylists, UpdatePlaylist } from './dtos';
import Playlist from '@entities/Playlist';

export default interface IPlaylistsIntegration {
  getPlaylist(request: GetPlaylist): Promise<Playlist>;
  getPlaylists(request: GetPlaylists): Promise<Array<Playlist>>;
  createPlaylist(request: CreatePlaylist): Promise<Playlist>;
  updatePlaylist(request: UpdatePlaylist): Promise<Playlist>;
  deletePlaylist(request: DeletePlaylist): Promise<void>;
}
