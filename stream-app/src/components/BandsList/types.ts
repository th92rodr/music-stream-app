export interface Band {
  id: string;
  name: string;
  country: string;
  foundation_date: Date;
  foundation_date_str: string;
  members: string[];
  members_str: string;
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
  favorites: number;
  followers: number;
}
