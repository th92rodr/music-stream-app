export interface FollowArtist {
  userId: string;
  artistId: string;
}

export interface UnfollowArtist {
  userId: string;
  artistId: string;
}

export interface GetFollowingArtist {
  userId: string;
  artistId: string;
}

export interface GetAllFollowingArtists {
  userId: string;
}

export interface GetAllFollowingArtistsResponse {
  userId: string;
  artistIds: string[];
}

export interface ViewMusic {
  userId: string;
  musicId: string;
}

export interface GetViews {
  userId: string;
  musicId: string;
}

export interface ViewsResponse {
  userId: string;
  musicId: string;
  views: number;
}
