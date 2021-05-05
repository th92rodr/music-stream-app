import { Genre } from '@constants/index';
import Album from '@entities/Album';
import Artist from '@entities/Artist';
import Music from '@entities/Music';
import Playlist, { Track } from '@entities/Playlist';
import { convertMonthToString, getAlbumDuration, getMusicDuration } from '@utils/index';

export function translateArtist(artist: Artist): any {
  return {
    id: artist.id,
    name: artist.name,
    country: artist.country,
    foundation_date: artist.foundationDate,
    foundation_date_str: `${artist.foundationDate.getFullYear()}`,
    members: artist.members,
    members_str: artist.members.join(', '),
    description: artist.description,
    genre: Genre[artist.genre],
    photos: artist.photos,
    profile_img: artist.photos[0],
    full_img: artist.photos.length > 1 ? artist.photos[1] : '',
    vertical_img: artist.photos.length > 2 ? artist.photos[2] : '',
    facebook_url: artist.facebookUrl,
    twitter_url: artist.twitterUrl,
    instagram_url: artist.instagramUrl,
    wikipedia_url: artist.wikipediaUrl,
    favorites: artist.favorites,
    followers: artist.followers,
    albums: artist.albums.map(album => translateAlbum(album)),
    popular_tracks: artist.popularTracks.map(track => translateMusic(track)),
  };
}

export function translateArtists(artists: Array<Artist>): any {
  return artists.map(artist => translateArtist(artist));
}

export function translateAlbum(album: Album): any {
  return {
    id: album.id,
    name: album.name,
    release_date: album.releaseDate,
    release_date_str: `${convertMonthToString(album.releaseDate.getMonth())}, ${album.releaseDate.getFullYear()}`,
    cover: album.cover,
    studio: album.studio,
    producers: album.producers,
    producers_str: album.producers.join(', '),
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
    duration: music.durationInSeconds,
    duration_str: getMusicDuration(music.durationInSeconds),
    file: music.file,
    composers: music.composers,
    composers_str: music.composers.join(', '),
    lyrics: music.lyrics,
    album_id: music.albumId,
    views: music.views,
  };
}

export function translatePlaylist(playlist: Playlist): any {
  return {
    id: playlist.id,
    name: playlist.name,
    user_id: playlist.userId,
    tracks: playlist.tracks.map(track => translatePlaylistTrack(track)),
  };
}

export function translatePlaylists(playlists: Array<Playlist>): any {
  return playlists.map(playlist => translatePlaylist(playlist));
}

export function translatePlaylistTrack(track: Track): any {
  return {
    id: track.id,
    index: track.index,
    music: track.music ? translateMusic(track.music) : null,
  };
}
