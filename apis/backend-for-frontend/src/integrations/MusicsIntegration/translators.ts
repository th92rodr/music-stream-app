import { Album, AlbumsList, Artist, ArtistsList, Genre, Music, MusicsList } from './proto/musics_service_pb';
import { Genre as GenreEnum } from '@constants/index';
import AlbumEntity from '@entities/Album';
import ArtistEntity from '@entities/Artist';
import MusicEntity from '@entities/Music';

export function translateMusicEntity(music: Music): MusicEntity {
  return new MusicEntity({
    id: music.getId(),
    title: music.getTitle(),
    durationInSeconds: music.getDurationinseconds(),
    file: music.getFile(),
    composers: music.getComposersList(),
    lyrics: music.getLyrics(),
    albumId: music.getAlbumid(),
  });
}

export function translateMusicEntityList(musicsList: MusicsList): Array<MusicEntity> {
  return musicsList.getMusicsList().map(music => translateMusicEntity(music));
}

export function translateAlbumEntity(album: Album): AlbumEntity {
  const newAlbum = new AlbumEntity({
    id: album.getId(),
    name: album.getName(),
    year: new Date(album.getYear()),
    cover: album.getCover(),
    studio: album.getStudio(),
    producers: album.getProducersList(),
    artistId: album.getArtistid(),
  });

  newAlbum.setTracks(album.getTracksList().map(track => translateMusicEntity(track)));

  return newAlbum;
}

export function translateAlbumEntityList(albumsList: AlbumsList): Array<AlbumEntity> {
  return albumsList.getAlbumsList().map(album => translateAlbumEntity(album));
}

export function translateArtistEntity(artist: Artist): ArtistEntity {
  const newArtist = new ArtistEntity({
    id: artist.getId(),
    name: artist.getName(),
    description: artist.getDescription(),
    genre: translateGenre(artist.getGenre()),
    photos: artist.getPhotosList(),
  });

  newArtist.setAlbums(artist.getAlbumsList().map(album => translateAlbumEntity(album)));

  return newArtist;
}

export function translateArtistEntityList(artistsList: ArtistsList): Array<ArtistEntity> {
  return artistsList.getArtistsList().map(artist => translateArtistEntity(artist));
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
      return 0;
  }
}
