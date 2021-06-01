import * as grpc from 'grpc';

import {
  FollowArtist,
  GetAllFollowingArtists,
  GetAllFollowingArtistsResponse,
  GetFollowingArtist,
  GetLastViews,
  GetMostViews,
  GetViews,
  UnfollowArtist,
  ViewMusic,
  ViewsResponse,
  ViewsListResponse,
} from './dtos';
import IUsersMusicsIntegration from './interface';
import { UsersMusicsClient } from '../proto/users_musics_service_grpc_pb';
import {
  GetAllFollowingArtistsRequest,
  GetFollowingArtistRequest,
  GetLastViewsRequest,
  GetMostViewsRequest,
  GetViewsRequest,
  FollowArtistRequest,
  FollowingArtist,
  FollowingArtists,
  UnfollowArtistRequest,
  UserMusic,
  UserMusicsList,
  ViewMusicRequest,
} from '../proto/users_musics_service_pb';
import { translateFollowingArtists, translateViews, translateViewsList } from '../translators';
import { handleError } from '../utils';
import Config from '@config/index';

export default class UsersMusicsIntegration implements IUsersMusicsIntegration {
  private client: UsersMusicsClient;

  constructor() {
    const ADDRESS = Config.integrations.users_musics_service;

    this.client = new UsersMusicsClient(ADDRESS, grpc.credentials.createInsecure());
  }

  public followArtist = async ({ artistId, userId }: FollowArtist): Promise<void> => {
    return new Promise((resolve, reject) => {
      const followArtistRequest = new FollowArtistRequest();
      followArtistRequest.setArtistId(artistId);
      followArtistRequest.setUserId(userId);

      this.client.followArtist(followArtistRequest, (error: Error | null) => {
        if (error != null) reject(handleError(error));
        else resolve();
      });
    });
  };

  public unfollowArtist = async ({ artistId, userId }: UnfollowArtist): Promise<void> => {
    return new Promise((resolve, reject) => {
      const unfollowArtistRequest = new UnfollowArtistRequest();
      unfollowArtistRequest.setArtistId(artistId);
      unfollowArtistRequest.setUserId(userId);

      this.client.unfollowArtist(unfollowArtistRequest, (error: Error | null) => {
        if (error != null) reject(handleError(error));
        else resolve();
      });
    });
  };

  public getFollowingArtist = async ({ artistId, userId }: GetFollowingArtist): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      const getFollowingArtistRequest = new GetFollowingArtistRequest();
      getFollowingArtistRequest.setArtistId(artistId);
      getFollowingArtistRequest.setUserId(userId);

      this.client.getFollowingArtist(getFollowingArtistRequest, (error: Error | null, followingArtist: FollowingArtist) => {
        if (error != null) resolve(false);
        else resolve(true);
      });
    });
  };

  public getAllFollowingArtists = async ({ userId }: GetAllFollowingArtists): Promise<GetAllFollowingArtistsResponse> => {
    return new Promise((resolve, reject) => {
      const getAllFollowingArtistsRequest = new GetAllFollowingArtistsRequest();
      getAllFollowingArtistsRequest.setUserId(userId);

      this.client.getAllFollowingArtists(getAllFollowingArtistsRequest, (error: Error | null, followingArtists: FollowingArtists) => {
        if (error != null) reject(handleError(error));
        else resolve(translateFollowingArtists(followingArtists));
      });
    });
  };

  public viewMusic = async ({ musicId, userId }: ViewMusic): Promise<ViewsResponse> => {
    return new Promise((resolve, reject) => {
      const viewMusicRequest = new ViewMusicRequest();
      viewMusicRequest.setUserId(userId);
      viewMusicRequest.setMusicId(musicId);

      this.client.viewMusic(viewMusicRequest, (error: Error | null, userMusic: UserMusic) => {
        if (error != null) reject(handleError(error));
        else resolve(translateViews(userMusic));
      });
    });
  };

  public getViews = async ({ musicId, userId }: GetViews): Promise<ViewsResponse> => {
    return new Promise((resolve, reject) => {
      const getViewsRequest = new GetViewsRequest();
      getViewsRequest.setUserId(userId);
      getViewsRequest.setMusicId(musicId);

      this.client.getViews(getViewsRequest, (error: Error | null, userMusic: UserMusic) => {
        if (error != null) reject(handleError(error));
        else resolve(translateViews(userMusic));
      });
    });
  };

  public getLastViews = async ({ limit, userId }: GetLastViews): Promise<ViewsListResponse> => {
    return new Promise((resolve, reject) => {
      const getLastViewsRequest = new GetLastViewsRequest();
      getLastViewsRequest.setUserId(userId);
      getLastViewsRequest.setLimit(limit);

      this.client.getLastViews(getLastViewsRequest, (error: Error | null, userMusicsList: UserMusicsList) => {
        if (error != null) reject(handleError(error));
        else resolve(translateViewsList(userId, userMusicsList));
      });
    });
  };

  public getMostViews = async ({ limit, userId }: GetMostViews): Promise<ViewsListResponse> => {
    return new Promise((resolve, reject) => {
      const getMostViewsRequest = new GetMostViewsRequest();
      getMostViewsRequest.setUserId(userId);
      getMostViewsRequest.setLimit(limit);

      this.client.getMostViews(getMostViewsRequest, (error: Error | null, userMusicsList: UserMusicsList) => {
        if (error != null) reject(handleError(error));
        else resolve(translateViewsList(userId, userMusicsList));
      });
    });
  };
}
