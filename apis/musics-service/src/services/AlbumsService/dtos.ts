export interface GetAlbumRequest {
  id: string;
}

export interface CreateAlbumRequest {
  name: string;
  year: Date;
  cover: string;
  studio: string;
  producers: Array<string>;
  artistId: string;
}

export interface UpdateAlbumRequest {
  id: string;
  name: string;
  year: Date | null;
  cover: string;
  studio: string;
  producers: Array<string>;
  artistId: string;
}

export interface DeleteAlbumRequest {
  id: string;
}
