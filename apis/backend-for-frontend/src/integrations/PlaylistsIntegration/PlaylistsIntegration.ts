import * as grpc from 'grpc';

import { PlaylistsClient } from './proto/playlists_service_grpc_pb';
import { CreatePlaylistRequest, DeletePlaylistRequest, GetPlaylistRequest, Id, Playlist, PlaylistsList, UpdatePlaylistRequest } from './proto/playlists_service_pb';
import { CreatePlaylist, DeletePlaylist, GetPlaylist, GetPlaylists, UpdatePlaylist } from './dtos';
import IPlaylistsIntegration from './interface';
import { translatePlaylistEntity, translatePlaylistEntityList } from './translators';
import Config from '@config/index';
import PlaylistEntity from '@entities/Playlist';

export default class PlaylistsIntegration implements IPlaylistsIntegration {
  private client: PlaylistsClient;

  constructor() {
    const ADDRESS = Config.integrations.playlists_service;

    this.client = new PlaylistsClient(ADDRESS, grpc.credentials.createInsecure());
  }

  public getPlaylist = async ({ id, userId }: GetPlaylist): Promise<PlaylistEntity> => {
    return new Promise((resolve, reject) => {
      const getPlaylistRequest = new GetPlaylistRequest();
      getPlaylistRequest.setId(id);
      getPlaylistRequest.setUserid(userId);

      this.client.getPlaylist(getPlaylistRequest, (error: Error | null, playlist: Playlist) => {
        if (error != null) reject(error);
        else resolve(translatePlaylistEntity(playlist));
      });
    });
  };

  public getPlaylists = async ({ userId }: GetPlaylists): Promise<Array<PlaylistEntity>> => {
    return new Promise((resolve, reject) => {
      const id = new Id();
      id.setId(userId);

      this.client.getPlaylists(id, (error: Error | null, playlistsList: PlaylistsList) => {
        if (error != null) reject(error);
        else resolve(translatePlaylistEntityList(playlistsList));
      });
    });
  };

  public createPlaylist = async ({ name, userId }: CreatePlaylist): Promise<PlaylistEntity> => {
    return new Promise((resolve, reject) => {
      const createPlaylistRequest = new CreatePlaylistRequest();
      createPlaylistRequest.setName(name);
      createPlaylistRequest.setUserid(userId);

      this.client.createPlaylist(createPlaylistRequest, (error: Error | null, playlist: Playlist) => {
        if (error != null) reject(error);
        else resolve(translatePlaylistEntity(playlist));
      });
    });
  };

  public updatePlaylist = async ({ id, userId, name }: UpdatePlaylist): Promise<PlaylistEntity> => {
    return new Promise((resolve, reject) => {
      const updatePlaylistRequest = new UpdatePlaylistRequest();
      updatePlaylistRequest.setId(id);
      updatePlaylistRequest.setUserid(userId);
      updatePlaylistRequest.setName(name ? name : '');

      this.client.updatePlaylist(updatePlaylistRequest, (error: Error | null, playlist: Playlist) => {
        if (error != null) reject(error);
        else resolve(translatePlaylistEntity(playlist));
      });
    });
  };

  public deletePlaylist = async ({ id, userId }: DeletePlaylist): Promise<void> => {
    return new Promise((resolve, reject) => {
      const deletePlaylistRequest = new DeletePlaylistRequest();
      deletePlaylistRequest.setId(id);
      deletePlaylistRequest.setUserid(userId);

      this.client.deletePlaylist(deletePlaylistRequest, (error: Error | null) => {
        if (error != null) reject(error);
        else resolve();
      });
    });
  };
}
