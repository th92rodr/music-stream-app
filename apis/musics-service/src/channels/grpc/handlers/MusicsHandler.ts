import * as grpc from 'grpc';

import { IMusicsServer } from '../proto/musics_service_grpc_pb';
import { Id, Music, Album, Artist, Genre } from '../proto/musics_service_pb';
import { Genre as GenreEnum } from '@constants/index';
import { InternalError } from '@constants/errors';
import AlbumEntity from '@entities/Album';
import ArtistEntity from '@entities/Artist';
import MusicEntity from '@entities/Music';
import ErrorHandler from '@errors/ErrorHandler';
import AlbumsService from '@services/AlbumsService/interface';
import ArtistsService from '@services/ArtistsService/interface';
import MusicsService from '@services/MusicsService/interface';

export { MusicsService } from '../proto/musics_service_grpc_pb';

export class MusicsHandler implements IMusicsServer {
  private albumsService: AlbumsService;
  private artistsService: ArtistsService;
  private musicsService: MusicsService;
  private errorHandler: ErrorHandler;

  // prettier-ignore
  constructor(
    albumsService: AlbumsService,
    artistsService: ArtistsService,
    musicsService: MusicsService,
    errorHandler: ErrorHandler,
  ) {
    this.albumsService = albumsService;
    this.artistsService = artistsService;
    this.musicsService = musicsService;
    this.errorHandler = errorHandler;
  }

  getMusic = async (call: grpc.ServerUnaryCall<Id>, callback: grpc.sendUnaryData<Music>): Promise<void> => {
    try {
      const music = await this.musicsService.get({ id: call.request.getId() });
      callback(null, this.translateMusicEntity(music));
    } catch (error) {
      await this.errorHandler.handleError(error);

      if (!this.errorHandler.isTrustedError(error)) {
        callback(new InternalError(), null);
      }
      callback(error, null);
    }
  };

  getAlbum = async (call: grpc.ServerUnaryCall<Id>, callback: grpc.sendUnaryData<Album>): Promise<void> => {
    try {
      const album = await this.albumsService.get({ id: call.request.getId() });
      callback(null, this.translateAlbumEntity(album));
    } catch (error) {
      await this.errorHandler.handleError(error);

      if (!this.errorHandler.isTrustedError(error)) {
        callback(new InternalError(), null);
      }
      callback(error, null);
    }
  };

  getArtist = async (call: grpc.ServerUnaryCall<Id>, callback: grpc.sendUnaryData<Artist>): Promise<void> => {
    try {
      const artist = await this.artistsService.get({ id: call.request.getId() });
      callback(null, this.translateArtistEntity(artist));
    } catch (error) {
      await this.errorHandler.handleError(error);

      if (!this.errorHandler.isTrustedError(error)) {
        callback(new InternalError(), null);
      }
      callback(error, null);
    }
  };

  private translateMusicEntity(musicEntity: MusicEntity): Music {
    const music: Music = new Music();

    music.setId(musicEntity.id);
    music.setTitle(musicEntity.title);
    music.setDurationinseconds(musicEntity.durationInSeconds);
    music.setFile(musicEntity.file);
    music.setComposersList(musicEntity.composers);
    music.setLyrics(musicEntity.lyrics);
    music.setAlbumid(musicEntity.albumId);

    return music;
  }

  private translateAlbumEntity(albumEntity: AlbumEntity): Album {
    const album: Album = new Album();

    album.setId(albumEntity.id);
    album.setName(albumEntity.name);
    album.setYear(albumEntity.year.toString());
    album.setCover(albumEntity.cover);
    album.setStudio(albumEntity.studio);
    album.setProducersList(albumEntity.producers);
    const musicsList = albumEntity.tracks.map(track => this.translateMusicEntity(track));
    album.setMusicsList(musicsList);
    album.setArtistid(albumEntity.artistId);

    return album;
  }

  private translateArtistEntity(artistEntity: ArtistEntity): Artist {
    const artist: Artist = new Artist();

    artist.setId(artistEntity.id);
    artist.setName(artistEntity.name);
    artist.setDescription(artistEntity.description);
    artist.setGenre(this.translateGenre(artistEntity.genre));
    artist.setPhotosList(artistEntity.photos);
    const albumsList = artistEntity.albums.map(album => this.translateAlbumEntity(album));
    artist.setAlbumsList(albumsList);

    return artist;
  }

  private translateGenre(genre: Number): Genre {
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
}
