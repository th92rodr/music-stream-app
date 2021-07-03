export interface CreateAlbumRequest {
  name: string;
  releaseDate: Date;
  cover: string;
  studio: string;
  producers: string[];
  artistId: string;
}

export interface DeleteAlbumRequest {
  id: string;
}

export interface GetAlbumRequest {
  id: string;
}

export interface GetAllAlbumsRequest {
  limit: number;
  offset: number;
}

export interface GetMostRecentAlbumsRequest {
  limit: number;
  offset: number;
}

export interface UpdateAlbumRequest {
  id: string;
  name?: string;
  releaseDate?: Date;
  cover?: string;
  studio?: string;
  producers?: string[];
  artistId?: string;
}
