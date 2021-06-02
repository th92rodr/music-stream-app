export interface AlbumsDb {
  id: string;
  name: string;
  release_date: Date;
  cover: string;
  studio: string;
  producers: string[];
  artist_id: string;
}

export interface ArtistsDb {
  id: string;
  name: string;
  country: string;
  foundation_date: Date;
  members: string[];
  description: string;
  genre: number;
  photos: string[];
  facebook_url: string;
  twitter_url: string;
  instagram_url: string;
  wikipedia_url: string;
  font: string;
  favorites: number;
  followers: number;
}

export interface MusicsDb {
  id: string;
  title: string;
  duration: number;
  file: string;
  composers: string[];
  lyrics: string;
  views: number;
  album_id: string;
  artist_id: string;
}
