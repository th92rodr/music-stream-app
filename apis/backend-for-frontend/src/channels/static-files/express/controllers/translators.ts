import { Genre } from '@constants/index';
import Album from '@entities/Album';
import Artist from '@entities/Artist';
import Music from '@entities/Music';
import { convertMonthToString, getAlbumDuration, getMusicDuration, prepareArtistDescription } from '@utils/index';

export function translateArtist(artist: Artist): any {
  return {
    id: artist.id,
    name: artist.name,
    country: artist.country,
    foundation_date: `${artist.foundationDate.getFullYear()}`,
    members: artist.members.join(', '),
    description: prepareArtistDescription(artist.description),
    genre: Genre[artist.genre],
    profile_img: artist.photos[0],
    full_img: artist.photos.length > 1 ? artist.photos[1] : '',
    vertical_img: artist.photos.length > 2 ? artist.photos[2] : '',
    facebook_url: artist.facebookUrl,
    twitter_url: artist.twitterUrl,
    instagram_url: artist.instagramUrl,
    wikipedia_url: artist.wikipediaUrl,
    font: artist.font,
    favorites: artist.favorites,
    followers: artist.followers,
    albums: artist.albums.map(album => translateAlbum(album)),
    popular_tracks: artist.popularTracks.map(track => translateMusic(track)),
  };
}

export function translateArtists(artists: Artist[]): any {
  return artists.map(artist => translateArtist(artist));
}

export function translateAlbum(album: Album): any {
  return {
    id: album.id,
    name: album.name,
    release_date: `${convertMonthToString(album.releaseDate.getMonth())}, ${album.releaseDate.getFullYear()}`,
    cover: album.cover,
    studio: album.studio,
    producers: album.producers.join(', '),
    artist_id: album.artistId,
    tracks: album.tracks.map(track => translateMusic(track)),
    number_of_tracks: album.tracks.length,
    full_duration: getAlbumDuration(album.tracks),
  };
}

export function translateMusic(music: Music): any {
  return {
    id: music.id,
    title: music.title,
    duration: getMusicDuration(music.durationInSeconds),
    file: music.file,
    composers: music.composers.join(', '),
    lyrics: music.lyrics,
    album_id: music.albumId,
    artist_id: music.artistId,
    views: music.views,
  };
}
