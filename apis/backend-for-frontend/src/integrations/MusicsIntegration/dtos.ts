import { Genre } from '@constants/index';

export interface GetMusic {
  id: string;
}

export interface CreateMusic {
  title: string;
  durationInSeconds: number;
  file: string;
  composers: Array<string>;
  lyrics: string;
  albumId: string;
}

export interface UpdateMusic {
  id: string;
  title?: string;
  durationInSeconds?: number;
  file?: string;
  composers?: Array<string>;
  lyrics?: string;
  albumId?: string;
}

export interface DeleteMusic {
  id: string;
}

export interface GetAlbum {
  id: string;
}

export interface CreateAlbum {
  name: string;
  year: Date;
  cover: string;
  studio: string;
  producers: Array<string>;
  artistId: string;
}

export interface UpdateAlbum {
  id: string;
  name?: string;
  year?: Date;
  cover?: string;
  studio?: string;
  producers?: Array<string>;
  artistId?: string;
}

export interface DeleteAlbum {
  id: string;
}

export interface GetArtist {
  id: string;
}

export interface GetArtistByGenre {
  genre: Genre;
}

export interface CreateArtist {
  name: string;
  description: string;
  genre: Genre;
  photos: Array<string>;
}

export interface UpdateArtist {
  id: string;
  name?: string;
  description?: string;
  genre?: Genre;
  photos?: Array<string>;
}

export interface DeleteArtist {
  id: string;
}
