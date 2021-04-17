import { Genre } from '@constants/index';
import Album from '@entities/Album';
import Artist from '@entities/Artist';
import Music from '@entities/Music';
import { convertMonthToString, getAlbumDuration, getMusicDuration } from '@utils/index';

export function translateArtist(artist: Artist): any {
  return {
    id: artist.id,
    name: artist.name,
    country: artist.country,
    foundationDate: artist.foundationDate,
    foundationDateStr: `${artist.foundationDate.getFullYear()}`,
    members: artist.members,
    membersStr: artist.members.join(', '),
    description: artist.description,
    genre: Genre[artist.genre],
    profileImg: artist.photos[0],
    fullImg: artist.photos.length > 1 ? artist.photos[1] : '',
    verticalImg: artist.photos.length > 2 ? artist.photos[2] : '',
    facebookUrl: artist.facebookUrl,
    twitterUrl: artist.twitterUrl,
    instagramUrl: artist.instagramUrl,
    wikipediaUrl: artist.wikipediaUrl,
    favorites: artist.favorites,
    followers: artist.followers,
    albums: artist.albums.map(album => translateAlbum(album)),
    popularTracks: artist.popularTracks.map(track => translateMusic(track)),
  };
}

export function translateArtists(artists: Array<Artist>): any {
  return artists.map(artist => translateArtist(artist));
}

export function translateAlbum(album: Album): any {
  return {
    id: album.id,
    name: album.name,
    releaseDate: album.releaseDate,
    releaseDateStr: `${convertMonthToString(album.releaseDate.getMonth())}, ${album.releaseDate.getFullYear()}`,
    cover: album.cover,
    studio: album.studio,
    producers: album.producers,
    producersStr: album.producers.join(', '),
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
    durationInSeconds: music.durationInSeconds,
    durationStr: getMusicDuration(music.durationInSeconds),
    file: music.file,
    composers: music.composers,
    composersStr: music.composers.join(', '),
    lyrics: music.lyrics,
    albumId: music.albumId,
    views: music.views,
  };
}
