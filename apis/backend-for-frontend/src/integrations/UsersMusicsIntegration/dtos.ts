export interface FollowArtist {
  artistId: string;
  userId: string;
}

export interface GetAllFollowingArtists {
  userId: string;
}

export interface GetAllFollowingArtistsResponse {
  artistIds: string[];
  userId: string;
}

export interface GetFollowingArtist {
  artistId: string;
  userId: string;
}

export interface GetLastViews {
  limit: number;
  userId: string;
}

export interface GetMostViews {
  limit: number;
  userId: string;
}

export interface GetViews {
  musicId: string;
  userId: string;
}

export interface UnfollowArtist {
  artistId: string;
  userId: string;
}

export interface ViewMusic {
  musicId: string;
  userId: string;
}

export interface ViewsListResponse {
  userId: string;
  music: {
    musicId: string;
    views: number;
  }[];
}

export interface ViewsResponse {
  musicId: string;
  userId: string;
  views: number;
}
