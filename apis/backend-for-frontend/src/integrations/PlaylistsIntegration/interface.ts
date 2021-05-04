// prettier-ignore
import {
  AddTrack,
  CreatePlaylist,
  DeletePlaylist,
  GetPlaylist,
  GetPlaylists,
  RemoveTrack,
  UpdatePlaylist,
  UpdateTrack
} from './dtos';
import Playlist, { Track } from '@entities/Playlist';

export default interface IPlaylistsIntegration {
  getPlaylist(request: GetPlaylist): Promise<Playlist>;
  getPlaylists(request: GetPlaylists): Promise<Array<Playlist>>;
  createPlaylist(request: CreatePlaylist): Promise<Playlist>;
  updatePlaylist(request: UpdatePlaylist): Promise<Playlist>;
  deletePlaylist(request: DeletePlaylist): Promise<void>;

  addTrack(request: AddTrack): Promise<Track>;
  updateTrack(request: UpdateTrack): Promise<Track>;
  removeTrack(request: RemoveTrack): Promise<void>;
}
