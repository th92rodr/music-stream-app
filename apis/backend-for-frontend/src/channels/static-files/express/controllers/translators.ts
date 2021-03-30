import { Genre } from '@constants/index';
import Album from '@entities/Album';
import Artist from '@entities/Artist';
import Music from '@entities/Music';
import { convertMonthToString, getAlbumDuration, getMusicDuration } from '@utils/index';

export function translateArtists(artists: Array<Artist>): any {
  return artists.map(artist => translateArtist(artist));
}

export function translateArtist(artist: Artist): any {
  return {
    id: artist.id,
    name: artist.name,
    description: artist.description,
    genre: Genre[artist.genre],
    albums: artist.albums.map(album => translateAlbum(album)),
  };
}

export function translateAlbum(album: Album): any {
  return {
    id: album.id,
    name: album.name,
    year: `${convertMonthToString(album.year.getMonth())}, ${album.year.getFullYear()}`,
    studio: album.studio,
    producers: album.producers.join(', '),
    artistId: album.artistId,
    tracks: album.tracks.map(track => translateMusic(track)),
    numberOfTracks: album.tracks.length,
    fullDuration: getAlbumDuration(album.tracks),
  };
}

export function translateMusic(music: Music): any {
  return {
    id: music.id,
    title: music.title,
    duration: getMusicDuration(music.durationInSeconds),
    composers: music.composers.join(', '),
    albumId: music.albumId,
  };
}
