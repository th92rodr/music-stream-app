export interface AddTrack {
  musicId: string;
  playlistId: string;
  userId: string;
}

export interface CreatePlaylist {
  name: string;
  userId: string;
}

export interface DeletePlaylist {
  id: string;
  userId: string;
}

export interface GetPlaylist {
  id: string;
  userId: string;
}

export interface GetPlaylists {
  userId: string;
}

export interface RemoveTrack {
  id: string;
  playlistId: string;
  userId: string;
}

export interface UpdatePlaylist {
  id: string;
  name: string;
  userId: string;
}

export interface UpdateTrack {
  id: string;
  index: number;
  playlistId: string;
  userId: string;
}
