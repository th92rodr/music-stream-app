import { Album, AlbumsList, Artist, ArtistsList, Genre, Music, MusicsList } from '../proto/musics_service_pb';
import { Genre as GenreEnum } from '@constants/index';
import AlbumEntity from '@entities/Album';
import ArtistEntity from '@entities/Artist';
import MusicEntity from '@entities/Music';
import { dateToTimestamp } from '@utils/index';

export function translateMusicEntity(musicEntity: MusicEntity): Music {
  const music = new Music();

  music.setId(musicEntity.id);
  music.setTitle(musicEntity.title);
  music.setDurationinseconds(musicEntity.durationInSeconds);
  music.setFile(musicEntity.file);
  music.setComposersList(musicEntity.composers);
  music.setLyrics(musicEntity.lyrics);
  music.setAlbumid(musicEntity.albumId);
  music.setViews(musicEntity.views);

  return music;
}

export function translateMusicEntityList(musicEntities: Array<MusicEntity>): MusicsList {
  const musicsList = new MusicsList();

  musicsList.setMusicsList(musicEntities.map(musicEntity => translateMusicEntity(musicEntity)));

  return musicsList;
}

export function translateAlbumEntity(albumEntity: AlbumEntity): Album {
  const album = new Album();

  album.setId(albumEntity.id);
  album.setName(albumEntity.name);
  album.setReleasedate(dateToTimestamp(albumEntity.releaseDate));
  album.setCover(albumEntity.cover);
  album.setStudio(albumEntity.studio);
  album.setProducersList(albumEntity.producers);
  album.setArtistid(albumEntity.artistId);
  album.setTracksList(albumEntity.tracks.map(track => translateMusicEntity(track)));

  return album;
}

export function translateAlbumEntityList(albumEntities: Array<AlbumEntity>): AlbumsList {
  const albumsList = new AlbumsList();

  albumsList.setAlbumsList(albumEntities.map(albumEntity => translateAlbumEntity(albumEntity)));

  return albumsList;
}

export function translateArtistEntity(artistEntity: ArtistEntity): Artist {
  const artist = new Artist();

  artist.setId(artistEntity.id);
  artist.setName(artistEntity.name);
  artist.setCountry(artistEntity.country);
  artist.setFoundationdate(dateToTimestamp(artistEntity.foundationDate));
  artist.setMembersList(artistEntity.members);
  artist.setDescription(artistEntity.description);
  artist.setGenre(translateGenre(artistEntity.genre));
  artist.setPhotosList(artistEntity.photos);
  artist.setFacebookurl(artistEntity.facebookUrl);
  artist.setTwitterurl(artistEntity.twitterUrl);
  artist.setInstagramurl(artistEntity.instagramUrl);
  artist.setWikipediaurl(artistEntity.wikipediaUrl);
  artist.setFavorites(artistEntity.favorites);
  artist.setFollowers(artistEntity.followers);
  artist.setAlbumsList(artistEntity.albums.map(album => translateAlbumEntity(album)));
  artist.setPopulartracksList(artistEntity.popularTracks.map(track => translateMusicEntity(track)));

  return artist;
}

export function translateArtistEntityList(artistEntities: Array<ArtistEntity>): ArtistsList {
  const artistList = new ArtistsList();

  artistList.setArtistsList(artistEntities.map(artistEntity => translateArtistEntity(artistEntity)));

  return artistList;
}

export function translateGenre(genre: number): Genre {
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

export function translateGenreEnum(genre: Genre): GenreEnum {
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
