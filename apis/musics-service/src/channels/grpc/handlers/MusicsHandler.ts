import * as grpc from 'grpc';

import { IMusicsServer } from '../proto/musics_service_grpc_pb';
import {
  Id,
  Album,
  AlbumsList,
  Artist,
  ArtistsList,
  Empty,
  Music,
  MusicsList,
  CreateMusicRequest,
  UpdateMusicRequest,
  CreateAlbumRequest,
  UpdateAlbumRequest,
  GetArtistByGenreRequest,
  CreateArtistRequest,
  UpdateArtistRequest,
} from '../proto/musics_service_pb';
// prettier-ignore
import {
  translateAlbumEntity,
  translateAlbumEntityList,
  translateArtistEntity,
  translateArtistEntityList,
  translateGenreEnum,
  translateMusicEntity,
  translateMusicEntityList,
} from './translators';
import { InternalError } from '@constants/errors';
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

      callback(null, translateMusicEntity(music));
    } catch (error) {
      await this.errorHandler.handleError(error);

      if (!this.errorHandler.isTrustedError(error)) {
        callback(new InternalError(), null);
      }

      callback(error, null);
    }
  };

  getMusics = async (call: grpc.ServerUnaryCall<Empty>, callback: grpc.sendUnaryData<MusicsList>): Promise<void> => {
    try {
      const musics = await this.musicsService.getAll();

      callback(null, translateMusicEntityList(musics));
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

      callback(null, translateMusicEntity(music));
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
        title: call.request.getTitle() != '' ? call.request.getTitle() : undefined,
        durationInSeconds: call.request.getDurationinseconds() > 0 ? call.request.getDurationinseconds() : undefined,
        file: call.request.getFile() != '' ? call.request.getFile() : undefined,
        composers: call.request.getComposersList(),
        lyrics: call.request.getLyrics() != '' ? call.request.getLyrics() : undefined,
        albumId: call.request.getAlbumid() != '' ? call.request.getAlbumid() : undefined,
      });

      callback(null, translateMusicEntity(music));
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

      callback(null, translateAlbumEntity(album));
    } catch (error) {
      await this.errorHandler.handleError(error);

      if (!this.errorHandler.isTrustedError(error)) {
        callback(new InternalError(), null);
      }

      callback(error, null);
    }
  };

  getAlbums = async (call: grpc.ServerUnaryCall<Empty>, callback: grpc.sendUnaryData<AlbumsList>): Promise<void> => {
    try {
      const albums = await this.albumsService.getAll();

      callback(null, translateAlbumEntityList(albums));
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

      callback(null, translateAlbumEntity(album));
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
        name: call.request.getName() != '' ? call.request.getName() : undefined,
        year: call.request.getYear() > 0 ? new Date(call.request.getYear()) : undefined,
        cover: call.request.getCover() != '' ? call.request.getCover() : undefined,
        studio: call.request.getStudio() != '' ? call.request.getStudio() : undefined,
        producers: call.request.getProducersList(),
        artistId: call.request.getArtistid() != '' ? call.request.getArtistid() : undefined,
      });

      callback(null, translateAlbumEntity(album));
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

      callback(null, translateArtistEntity(artist));
    } catch (error) {
      await this.errorHandler.handleError(error);

      if (!this.errorHandler.isTrustedError(error)) {
        callback(new InternalError(), null);
      }

      callback(error, null);
    }
  };

  getArtists = async (call: grpc.ServerUnaryCall<Empty>, callback: grpc.sendUnaryData<ArtistsList>): Promise<void> => {
    try {
      const artists = await this.artistsService.getAll();

      callback(null, translateArtistEntityList(artists));
    } catch (error) {
      await this.errorHandler.handleError(error);

      if (!this.errorHandler.isTrustedError(error)) {
        callback(new InternalError(), null);
      }

      callback(error, null);
    }
  };

  getArtistByGenre = async (call: grpc.ServerUnaryCall<GetArtistByGenreRequest>, callback: grpc.sendUnaryData<ArtistsList>): Promise<void> => {
    try {
      const artists = await this.artistsService.getByGenre({ genre: translateGenreEnum(call.request.getGenre()) });

      callback(null, translateArtistEntityList(artists));
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
        genre: translateGenreEnum(call.request.getGenre()),
        photos: call.request.getPhotosList(),
      });

      callback(null, translateArtistEntity(artist));
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
        name: call.request.getName() != '' ? call.request.getName() : undefined,
        description: call.request.getDescription() != '' ? call.request.getDescription() : undefined,
        genre: translateGenreEnum(call.request.getGenre()) > 0 ? translateGenreEnum(call.request.getGenre()) : undefined,
        photos: call.request.getPhotosList(),
      });

      callback(null, translateArtistEntity(artist));
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
}
