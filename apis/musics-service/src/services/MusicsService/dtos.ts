export interface GetMusicRequest {
  id: string;
}

export interface CreateMusicRequest {
  title: string;
  durationInSeconds: number;
  file: string;
  composers: Array<string>;
  lyrics: string;
  albumId: string;
}

export interface UpdateMusicRequest {
  id: string;
  title: string;
  durationInSeconds: number;
  file: string;
  composers: Array<string>;
  lyrics: string;
  albumId: string;
}

export interface DeleteMusicRequest {
  id: string;
}
