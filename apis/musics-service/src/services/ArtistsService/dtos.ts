import { Genre } from '@constants/index';

export interface GetArtistRequest {
  id: string;
}

export interface GetArtistByGenreRequest {
  genre: Genre;
}

export interface CreateArtistRequest {
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

export interface UpdateArtistRequest {
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

export interface DeleteArtistRequest {
  id: string;
}

export interface AddFavoriteRequest {
  id: string;
}

export interface RemoveFavoriteRequest {
  id: string;
}

export interface AddFollowerRequest {
  id: string;
}

export interface RemoveFollowerRequest {
  id: string;
}
