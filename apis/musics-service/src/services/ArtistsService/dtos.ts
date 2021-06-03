import { Genre } from '@constants/index';

export interface CreateArtistRequest {
  name: string;
  country: string;
  foundationDate: Date;
  members: string[];
  description: string;
  genre: Genre;
  photos: string[];
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  wikipediaUrl: string;
  font: string;
}

export interface DeleteArtistRequest {
  id: string;
}

export interface FavoriteArtistRequest {
  id: string;
}

export interface FollowArtistRequest {
  id: string;
}

export interface GetArtistRequest {
  id: string;
}

export interface GetArtistsByGenreRequest {
  genre: Genre;
}

export interface GetMostFollowedArtistsRequest {
  limit: number;
  offset: number;
}

export interface UnfavoriteArtistRequest {
  id: string;
}

export interface UnfollowArtistRequest {
  id: string;
}

export interface UpdateArtistRequest {
  id: string;
  name?: string;
  country?: string;
  foundationDate?: Date;
  members?: string[];
  description?: string;
  genre?: Genre;
  photos?: string[];
  facebookUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
  wikipediaUrl?: string;
  font?: string;
}
