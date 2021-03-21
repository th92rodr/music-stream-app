import * as grpc from 'grpc';

import { IMusicsServer } from '../proto/musics_service_grpc_pb';
import {
  Id,
  Album,
  Artist,
  ArtistList,
  Empty,
  Genre,
  Music,
  CreateMusicRequest,
  UpdateMusicRequest,
  CreateAlbumRequest,
  UpdateAlbumRequest,
  GetArtistByGenreRequest,
  CreateArtistRequest,
  UpdateArtistRequest,
} from '../proto/musics_service_pb';
import { Genre as GenreEnum } from '@constants/index';
import { InternalError } from '@constants/errors';
import AlbumEntity from '@entities/Album';
import ArtistEntity from '@entities/Artist';
import MusicEntity from '@entities/Music';
import IErrorHandler from '@handlers/ErrorHandler/interface';
import IAlbumsService from '@services/AlbumsService/interface';
import IArtistsService from '@services/ArtistsService/interface';
import IMusicsService from '@services/MusicsService/interface';

export { MusicsService } from '../proto/musics_service_grpc_pb';

export class MusicsHandler implements IMusicsServer {
  private albumsService: IAlbumsService;
  private artistsService: IArtistsService;
  private musicsService: IMusicsService;
  private errorHandler: IErrorHandler;

  // prettier-ignore
  constructor(
    albumsService: IAlbumsService,
    artistsService: IArtistsService,
    musicsService: IMusicsService,
    errorHandler: IErrorHandler,
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

  createMusic = async (call: grpc.ServerUnaryCall<CreateMusicRequest>, callback: grpc.sendUnaryData<Music>): Promise<void> => {
    try {
      const music = await this.musicsService.create({
        title: call.request.getTitle(),
        durationInSeconds: call.request.getDurationinseconds(),
        file: call.request.getFile(),
        composers: call.request.getComposersList(),
        lyrics: call.request.getLyrics(),
        albumId: call.request.getAlbumid(),
      });

      callback(null, this.translateMusicEntity(music));
    } catch (error) {
      await this.errorHandler.handleError(error);

      if (!this.errorHandler.isTrustedError(error)) {
        callback(new InternalError(), null);
      }

      callback(error, null);
    }
  };

  updateMusic = async (call: grpc.ServerUnaryCall<UpdateMusicRequest>, callback: grpc.sendUnaryData<Music>): Promise<void> => {
    try {
      const music = await this.musicsService.update({
        id: call.request.getId(),
        title: call.request.getTitle(),
        durationInSeconds: call.request.getDurationinseconds(),
        file: call.request.getFile(),
        composers: call.request.getComposersList(),
        lyrics: call.request.getLyrics(),
        albumId: call.request.getAlbumid(),
      });

      callback(null, this.translateMusicEntity(music));
    } catch (error) {
      await this.errorHandler.handleError(error);

      if (!this.errorHandler.isTrustedError(error)) {
        callback(new InternalError(), null);
      }

      callback(error, null);
    }
  };

  deleteMusic = async (call: grpc.ServerUnaryCall<Id>, callback: grpc.sendUnaryData<Empty>): Promise<void> => {
    try {
      await this.musicsService.delete({ id: call.request.getId() });

      callback(null, new Empty());
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

  createAlbum = async (call: grpc.ServerUnaryCall<CreateAlbumRequest>, callback: grpc.sendUnaryData<Album>): Promise<void> => {
    try {
      const album = await this.albumsService.create({
        name: call.request.getName(),
        year: new Date(call.request.getYear()),
        cover: call.request.getCover(),
        studio: call.request.getStudio(),
        producers: call.request.getProducersList(),
        artistId: call.request.getArtistid(),
      });

      callback(null, this.translateAlbumEntity(album));
    } catch (error) {
      await this.errorHandler.handleError(error);

      if (!this.errorHandler.isTrustedError(error)) {
        callback(new InternalError(), null);
      }

      callback(error, null);
    }
  };

  updateAlbum = async (call: grpc.ServerUnaryCall<UpdateAlbumRequest>, callback: grpc.sendUnaryData<Album>): Promise<void> => {
    try {
      const album = await this.albumsService.update({
        id: call.request.getId(),
        name: call.request.getName(),
        year: call.request.getYear() > 0 ? new Date(call.request.getYear()) : null,
        cover: call.request.getCover(),
        studio: call.request.getStudio(),
        producers: call.request.getProducersList(),
        artistId: call.request.getArtistid(),
      });

      callback(null, this.translateAlbumEntity(album));
    } catch (error) {
      await this.errorHandler.handleError(error);

      if (!this.errorHandler.isTrustedError(error)) {
        callback(new InternalError(), null);
      }

      callback(error, null);
    }
  };

  deleteAlbum = async (call: grpc.ServerUnaryCall<Id>, callback: grpc.sendUnaryData<Empty>): Promise<void> => {
    try {
      await this.albumsService.delete({ id: call.request.getId() });

      callback(null, new Empty());
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

  getAllArtists = async (call: grpc.ServerUnaryCall<Empty>, callback: grpc.sendUnaryData<ArtistList>): Promise<void> => {
    try {
      const artists = await this.artistsService.getAll();

      callback(null, this.translateArtistEntityList(artists));
    } catch (error) {
      await this.errorHandler.handleError(error);

      if (!this.errorHandler.isTrustedError(error)) {
        callback(new InternalError(), null);
      }

      callback(error, null);
    }
  };

  getArtistByGenre = async (call: grpc.ServerUnaryCall<GetArtistByGenreRequest>, callback: grpc.sendUnaryData<ArtistList>): Promise<void> => {
    try {
      const artists = await this.artistsService.getByGenre({ genre: this.translateGenreEnum(call.request.getGenre()) });

      callback(null, this.translateArtistEntityList(artists));
    } catch (error) {
      await this.errorHandler.handleError(error);

      if (!this.errorHandler.isTrustedError(error)) {
        callback(new InternalError(), null);
      }

      callback(error, null);
    }
  };

  createArtist = async (call: grpc.ServerUnaryCall<CreateArtistRequest>, callback: grpc.sendUnaryData<Artist>): Promise<void> => {
    try {
      const artist = await this.artistsService.create({
        name: call.request.getName(),
        description: call.request.getDescription(),
        genre: this.translateGenreEnum(call.request.getGenre()),
        photos: call.request.getPhotosList(),
      });

      callback(null, this.translateArtistEntity(artist));
    } catch (error) {
      await this.errorHandler.handleError(error);

      if (!this.errorHandler.isTrustedError(error)) {
        callback(new InternalError(), null);
      }

      callback(error, null);
    }
  };

  updateArtist = async (call: grpc.ServerUnaryCall<UpdateArtistRequest>, callback: grpc.sendUnaryData<Artist>): Promise<void> => {
    try {
      const artist = await this.artistsService.update({
        id: call.request.getId(),
        name: call.request.getName(),
        description: call.request.getDescription(),
        genre: this.translateGenreEnum(call.request.getGenre()) != 0 ? this.translateGenreEnum(call.request.getGenre()) : null,
        photos: call.request.getPhotosList(),
      });

      callback(null, this.translateArtistEntity(artist));
    } catch (error) {
      await this.errorHandler.handleError(error);

      if (!this.errorHandler.isTrustedError(error)) {
        callback(new InternalError(), null);
      }

      callback(error, null);
    }
  };

  deleteArtist = async (call: grpc.ServerUnaryCall<Id>, callback: grpc.sendUnaryData<Empty>): Promise<void> => {
    try {
      await this.artistsService.delete({ id: call.request.getId() });

      callback(null, new Empty());
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
    album.setYear(albumEntity.year.getTime());
    album.setCover(albumEntity.cover);
    album.setStudio(albumEntity.studio);
    album.setProducersList(albumEntity.producers);
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

    return artist;
  }

  private translateArtistEntityList(artistEntities: Array<ArtistEntity>): ArtistList {
    const artistList = new ArtistList();

    artistList.setArtistsList(artistEntities.map(artistEntity => this.translateArtistEntity(artistEntity)));

    return artistList;
  }

  private translateGenre(genre: number): Genre {
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

  private translateGenreEnum(genre: Genre): GenreEnum {
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
}
