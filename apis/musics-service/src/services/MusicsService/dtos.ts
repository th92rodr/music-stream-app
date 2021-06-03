export interface CreateMusicRequest {
  title: string;
  durationInSeconds: number;
  file: string;
  composers: string[];
  lyrics: string;
  albumId: string;
  artistId: string;
}

export interface DeleteMusicRequest {
  id: string;
}

export interface GetMusicRequest {
  id: string;
}

export interface GetMostViewedMusicsRequest {
  limit: number;
  offset: number;
}

export interface UpdateMusicRequest {
  id: string;
  title?: string;
  durationInSeconds?: number;
  file?: string;
  composers?: string[];
  lyrics?: string;
  albumId?: string;
  artistId?: string;
}

export interface ViewMusicRequest {
  id: string;
}
