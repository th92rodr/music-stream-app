import { Genre } from '@constants/index';

export interface GetArtistRequest {
  id: string;
}

export interface GetArtistByGenreRequest {
  genre: Genre;
}

export interface CreateArtistRequest {
  name: string;
  description: string;
  genre: Genre;
  photos: Array<string>;
}

export interface UpdateArtistRequest {
  id: string;
  name: string;
  description: string;
  genre: Genre | null;
  photos: Array<string>;
}

export interface DeleteArtistRequest {
  id: string;
}
