export interface GetPlaylist {
  id: string;
  userId: string;
}

export interface GetPlaylists {
  userId: string;
}

export interface CreatePlaylist {
  name: string;
  userId: string;
}

export interface UpdatePlaylist {
  id: string;
  userId: string;
  name: string;
}

export interface DeletePlaylist {
  id: string;
  userId: string;
}

export interface AddTrack {
  userId: string;
  playlistId: string;
  musicId: string;
}

export interface UpdateTrack {
  userId: string;
  playlistId: string;
  id: string;
  index: number;
}

export interface RemoveTrack {
  userId: string;
  playlistId: string;
  id: string;
}
