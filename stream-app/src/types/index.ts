export interface Album {
  id: string;
  name: string;
  release_date: Date;
  cover: string;
  studio: string;
  producers: string[];
  artist_id: string;
  tracks: Music[];
  number_of_tracks: number;
  full_duration: number;
}

export interface Artist {
  id: string;
  name: string;
  country: string;
  foundation_date: Date;
  members: string[];
  description: string;
  genre: string;
  photos: string[];
  profile_img: string;
  full_img: string;
  vertical_img: string;
  facebook_url: string;
  twitter_url: string;
  instagram_url: string;
  wikipedia_url: string;
  font: string;
  favorites: number;
  followers: number;
  albums: Album[];
  popular_tracks: Music[];
}

export interface Music {
  id: string;
  title: string;
  duration: number;
  file: string;
  composers: string[];
  lyrics: string;
  album_id: string;
  artist_id: string;
  views: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
}
