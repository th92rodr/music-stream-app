import { Genre } from '@constants/index';

export interface CreateAlbum {
  name: string;
  releaseDate: Date;
  cover: string;
  studio: string;
  producers: string[];
  artistId: string;
}

export interface DeleteAlbum {
  id: string;
}

export interface GetAlbum {
  id: string;
}

export interface GetMostRecentAlbums {
  limit: number;
  offset: number;
}

export interface UpdateAlbum {
  id: string;
  name?: string;
  releaseDate?: Date;
  cover?: string;
  studio?: string;
  producers?: string[];
  artistId?: string;
}

export interface CreateArtist {
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

export interface DeleteArtist {
  id: string;
}

export interface FavoriteArtist {
  id: string;
}

export interface FollowArtist {
  id: string;
}

export interface GetArtist {
  id: string;
}

export interface GetArtistsByGenre {
  genre: Genre;
}

export interface GetMostFollowedArtists {
  limit: number;
  offset: number;
}

export interface UnfavoriteArtist {
  id: string;
}

export interface UnfollowArtist {
  id: string;
}

export interface UpdateArtist {
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

export interface CreateMusic {
  title: string;
  durationInSeconds: number;
  file: string;
  composers: string[];
  lyrics: string;
  albumId: string;
  artistId: string;
}

export interface DeleteMusic {
  id: string;
}

export interface GetMostViewedMusics {
  limit: number;
  offset: number;
}

export interface GetMusic {
  id: string;
}

export interface UpdateMusic {
  id: string;
  title?: string;
  durationInSeconds?: number;
  file?: string;
  composers?: string[];
  lyrics?: string;
  albumId?: string;
  artistId?: string;
}

export interface ViewMusic {
  id: string;
}
