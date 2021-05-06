import { status as grpcStatus } from 'grpc';

import { Album, AlbumsList, Artist, ArtistsList, Genre, Music, MusicsList } from './proto/musics_service_pb';
import { Playlist, PlaylistsList, Track } from './proto/playlists_service_pb';
import { AuthenticateUserResponse, User } from './proto/users_service_pb';
import { AuthenticateResponse } from './UsersIntegration/dtos';
import { Genre as GenreEnum, HttpStatusCode } from '@constants/index';
import AlbumEntity from '@entities/Album';
import ArtistEntity from '@entities/Artist';
import MusicEntity from '@entities/Music';
import PlaylistEntity, { Track as TrackEntity } from '@entities/Playlist';
import UserEntity from '@entities/User';
import { timestampToDate } from '@utils/index';

export function translateAlbumEntity(album: Album): AlbumEntity {
  return new AlbumEntity({
    id: album.getId(),
    name: album.getName(),
    releaseDate: timestampToDate(album.getReleasedate()),
    cover: album.getCover(),
    studio: album.getStudio(),
    producers: album.getProducersList(),
    artistId: album.getArtistid(),
    tracks: album.getTracksList().map(track => translateMusicEntity(track)),
  });
}

export function translateAlbumEntityList(albumsList: AlbumsList): Array<AlbumEntity> {
  return albumsList.getAlbumsList().map(album => translateAlbumEntity(album));
}

export function translateArtistEntity(artist: Artist): ArtistEntity {
  return new ArtistEntity({
    id: artist.getId(),
    name: artist.getName(),
    country: artist.getCountry(),
    foundationDate: timestampToDate(artist.getFoundationdate()),
    members: artist.getMembersList(),
    description: artist.getDescription(),
    genre: translateGenre(artist.getGenre()),
    photos: artist.getPhotosList(),
    facebookUrl: artist.getFacebookurl(),
    twitterUrl: artist.getTwitterurl(),
    instagramUrl: artist.getInstagramurl(),
    wikipediaUrl: artist.getWikipediaurl(),
    favorites: artist.getFavorites(),
    followers: artist.getFollowers(),
    albums: artist.getAlbumsList().map(album => translateAlbumEntity(album)),
    popularTracks: artist.getPopulartracksList().map(track => translateMusicEntity(track)),
  });
}

export function translateArtistEntityList(artistsList: ArtistsList): Array<ArtistEntity> {
  return artistsList.getArtistsList().map(artist => translateArtistEntity(artist));
}

export function translateMusicEntity(music: Music): MusicEntity {
  return new MusicEntity({
    id: music.getId(),
    title: music.getTitle(),
    durationInSeconds: music.getDurationinseconds(),
    file: music.getFile(),
    composers: music.getComposersList(),
    lyrics: music.getLyrics(),
    albumId: music.getAlbumid(),
    views: music.getViews(),
  });
}

export function translateMusicEntityList(musicsList: MusicsList): Array<MusicEntity> {
  return musicsList.getMusicsList().map(music => translateMusicEntity(music));
}

export function translateGenre(genre: Genre): GenreEnum {
  switch (genre) {
    case Genre.HEAVY_METAL:
      return GenreEnum['Heavy Metal'];
    case Genre.FOLK_METAL:
      return GenreEnum['Folk Metal'];
    case Genre.POWER_METAL:
      return GenreEnum['Power Metal'];
    case Genre.DEATH_METAL:
      return GenreEnum['Death Metal'];
    case Genre.THRASH_METAL:
      return GenreEnum['Thrash Metal'];
    case Genre.BLACK_METAL:
      return GenreEnum['Black Metal'];
    default:
      return 0;
  }
}

export function translateGenreEnum(genre: GenreEnum): Genre {
  switch (genre) {
    case GenreEnum['Heavy Metal']:
      return Genre.HEAVY_METAL;
    case GenreEnum['Folk Metal']:
      return Genre.FOLK_METAL;
    case GenreEnum['Power Metal']:
      return Genre.POWER_METAL;
    case GenreEnum['Death Metal']:
      return Genre.DEATH_METAL;
    case GenreEnum['Thrash Metal']:
      return Genre.THRASH_METAL;
    case GenreEnum['Black Metal']:
      return Genre.BLACK_METAL;
    default:
      return -1;
  }
}

export function translateUserEntity(user: User): UserEntity {
  return new UserEntity({
    id: user.getId(),
    username: user.getUsername(),
    email: user.getEmail(),
    password: user.getPassword(),
  });
}

export function translateAuthenticateUser(authenticateUserResponse: AuthenticateUserResponse): AuthenticateResponse {
  const user = authenticateUserResponse.getUser();
  return {
    token: authenticateUserResponse.getToken(),
    user: user ? translateUserEntity(user) : undefined,
  };
}

export function translatePlaylistEntity(playlist: Playlist): PlaylistEntity {
  return new PlaylistEntity({
    id: playlist.getId(),
    name: playlist.getName(),
    userId: playlist.getUserid(),
    tracks: playlist.getTracksList().map(track => translateTrackEntity(track)),
  });
}

export function translatePlaylistEntityList(playlistsList: PlaylistsList): Array<PlaylistEntity> {
  return playlistsList.getPlaylistsList().map(playlist => translatePlaylistEntity(playlist));
}

export function translateTrackEntity(track: Track): TrackEntity {
  const music = track.getMusic();
  return new TrackEntity({
    id: track.getId(),
    index: track.getIndex(),
    music: music ? translateMusicEntity(music) : null,
  });
}

export function translateGrpcError(statusCode?: grpcStatus): HttpStatusCode {
  if (!statusCode) {
    return HttpStatusCode.INTERNAL_SERVER_ERROR;
  }

  switch (statusCode) {
    case grpcStatus.INVALID_ARGUMENT:
      return HttpStatusCode.BAD_REQUEST;
    case grpcStatus.NOT_FOUND:
      return HttpStatusCode.NOT_FOUND;
    case grpcStatus.INTERNAL:
      return HttpStatusCode.INTERNAL_SERVER_ERROR;
    default:
      return HttpStatusCode.INTERNAL_SERVER_ERROR;
  }
}
