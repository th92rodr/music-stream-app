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
  artistId: string;
}

export interface UpdateMusic {
  id: string;
  title?: string;
  durationInSeconds?: number;
  file?: string;
  composers?: Array<string>;
  lyrics?: string;
  albumId?: string;
  artistId?: string;
}

export interface DeleteMusic {
  id: string;
}

export interface ViewMusic {
  id: string;
}

export interface GetAlbum {
  id: string;
}

export interface CreateAlbum {
  name: string;
  releaseDate: Date;
  cover: string;
  studio: string;
  producers: Array<string>;
  artistId: string;
}

export interface UpdateAlbum {
  id: string;
  name?: string;
  releaseDate?: Date;
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
  country: string;
  foundationDate: Date;
  members: Array<string>;
  description: string;
  genre: Genre;
  photos: Array<string>;
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  wikipediaUrl: string;
  font: string;
}

export interface UpdateArtist {
  id: string;
  name?: string;
  country?: string;
  foundationDate?: Date;
  members?: Array<string>;
  description?: string;
  genre?: Genre;
  photos?: Array<string>;
  facebookUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
  wikipediaUrl?: string;
  font?: string;
}

export interface DeleteArtist {
  id: string;
}

export interface FavoriteArtist {
  id: string;
}

export interface UnfavoriteArtist {
  id: string;
}

export interface FollowArtist {
  id: string;
}

export interface UnfollowArtist {
  id: string;
}
