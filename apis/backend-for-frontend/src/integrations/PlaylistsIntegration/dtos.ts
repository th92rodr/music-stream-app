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
  name?: string;
}

export interface DeletePlaylist {
  id: string;
  userId: string;
}
