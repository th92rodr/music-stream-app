import * as grpc from 'grpc';
import { ServiceError } from 'grpc';

import { IMusicsServer } from '../proto/musics_service_grpc_pb';
// prettier-ignore
import {
  Album,
  AlbumsList,
  Artist,
  ArtistsList,
  CreateAlbumRequest,
  CreateArtistRequest,
  CreateMusicRequest,
  Empty,
  GetArtistByGenreRequest,
  Id,
  Music,
  MusicsList,
  UpdateAlbumRequest,
  UpdateArtistRequest,
  UpdateMusicRequest,
} from '../proto/musics_service_pb';
// prettier-ignore
import {
  translateAlbumEntity,
  translateAlbumEntityList,
  translateArtistEntity,
  translateArtistEntityList,
  translateGenreEnum,
  translateGrpcError,
  translateMusicEntity,
  translateMusicEntityList,
} from './translators';
import BaseError from '@constants/BaseError';
import { InternalError } from '@constants/errors';
import IErrorHandler from '@handlers/ErrorHandler/interface';
import ILoggerProvider from '@providers/LoggerProvider/interface';
import IAlbumsService from '@services/AlbumsService/interface';
import IArtistsService from '@services/ArtistsService/interface';
import IMusicsService from '@services/MusicsService/interface';
import { timestampToDate } from '@utils/index';

export { MusicsService } from '../proto/musics_service_grpc_pb';

export class MusicsHandler implements IMusicsServer {
  private albumsService: IAlbumsService;
  private artistsService: IArtistsService;
  private musicsService: IMusicsService;
  private errorHandler: IErrorHandler;
  private loggerProvider: ILoggerProvider;

  // prettier-ignore
  constructor(
    albumsService: IAlbumsService,
    artistsService: IArtistsService,
    musicsService: IMusicsService,
    errorHandler: IErrorHandler,
    loggerProvider: ILoggerProvider,
  ) {
    this.albumsService = albumsService;
    this.artistsService = artistsService;
    this.musicsService = musicsService;
    this.errorHandler = errorHandler;
    this.loggerProvider = loggerProvider;
  }

  private async handleError<T>(callback: grpc.sendUnaryData<T>, error: Error): Promise<void> {
    await this.errorHandler.handleError(error);

    let customError: BaseError;

    if (!this.errorHandler.isTrustedError(error)) {
      customError = new InternalError();
    } else {
      customError = error as BaseError;
    }

    const grpcError: ServiceError = new Error();
    grpcError.code = translateGrpcError(customError.statusCode);
    grpcError.details = customError.message;

    callback(grpcError, null);
  }

  getMusic = async (call: grpc.ServerUnaryCall<Id>, callback: grpc.sendUnaryData<Music>): Promise<void> => {
    try {
      const music = await this.musicsService.get({ id: call.request.getId() });

      this.loggerProvider.info('[GET MUSIC]', { id: music.id });

      callback(null, translateMusicEntity(music));
    } catch (error) {
      this.handleError<Music>(callback, error);
    }
  };

  getMusics = async (call: grpc.ServerUnaryCall<Empty>, callback: grpc.sendUnaryData<MusicsList>): Promise<void> => {
    try {
      const musics = await this.musicsService.getAll();

      this.loggerProvider.info('[GET MUSICS]');

      callback(null, translateMusicEntityList(musics));
    } catch (error) {
      this.handleError<MusicsList>(callback, error);
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

      this.loggerProvider.info('[CREATE MUSIC]');

      callback(null, translateMusicEntity(music));
    } catch (error) {
      this.handleError<Music>(callback, error);
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

      this.loggerProvider.info('[UPDATE MUSIC]', { id: music.id });

      callback(null, translateMusicEntity(music));
    } catch (error) {
      this.handleError<Music>(callback, error);
    }
  };

  deleteMusic = async (call: grpc.ServerUnaryCall<Id>, callback: grpc.sendUnaryData<Empty>): Promise<void> => {
    try {
      await this.musicsService.delete({ id: call.request.getId() });

      this.loggerProvider.info('[DELETE MUSIC]', { id: call.request.getId() });

      callback(null, new Empty());
    } catch (error) {
      this.handleError<Empty>(callback, error);
    }
  };

  viewMusic = async (call: grpc.ServerUnaryCall<Id>, callback: grpc.sendUnaryData<Music>): Promise<void> => {
    try {
      const music = await this.musicsService.addView({ id: call.request.getId() });

      this.loggerProvider.info('[VIEW MUSIC]', { id: music.id });

      callback(null, translateMusicEntity(music));
    } catch (error) {
      this.handleError<Music>(callback, error);
    }
  };

  getAlbum = async (call: grpc.ServerUnaryCall<Id>, callback: grpc.sendUnaryData<Album>): Promise<void> => {
    try {
      const album = await this.albumsService.get({ id: call.request.getId() });

      this.loggerProvider.info('[GET ALBUM]', { id: album.id });

      callback(null, translateAlbumEntity(album));
    } catch (error) {
      this.handleError<Album>(callback, error);
    }
  };

  getAlbums = async (call: grpc.ServerUnaryCall<Empty>, callback: grpc.sendUnaryData<AlbumsList>): Promise<void> => {
    try {
      const albums = await this.albumsService.getAll();

      this.loggerProvider.info('[GET ALBUMS]');

      callback(null, translateAlbumEntityList(albums));
    } catch (error) {
      this.handleError<AlbumsList>(callback, error);
    }
  };

  createAlbum = async (call: grpc.ServerUnaryCall<CreateAlbumRequest>, callback: grpc.sendUnaryData<Album>): Promise<void> => {
    try {
      const album = await this.albumsService.create({
        name: call.request.getName(),
        releaseDate: timestampToDate(call.request.getReleasedate()),
        cover: call.request.getCover(),
        studio: call.request.getStudio(),
        producers: call.request.getProducersList(),
        artistId: call.request.getArtistid(),
      });

      this.loggerProvider.info('[CREATE ALBUM]');

      callback(null, translateAlbumEntity(album));
    } catch (error) {
      this.handleError<Album>(callback, error);
    }
  };

  updateAlbum = async (call: grpc.ServerUnaryCall<UpdateAlbumRequest>, callback: grpc.sendUnaryData<Album>): Promise<void> => {
    try {
      const album = await this.albumsService.update({
        id: call.request.getId(),
        name: call.request.getName() != '' ? call.request.getName() : undefined,
        releaseDate: call.request.getReleasedate() > 0 ? timestampToDate(call.request.getReleasedate()) : undefined,
        cover: call.request.getCover() != '' ? call.request.getCover() : undefined,
        studio: call.request.getStudio() != '' ? call.request.getStudio() : undefined,
        producers: call.request.getProducersList(),
        artistId: call.request.getArtistid() != '' ? call.request.getArtistid() : undefined,
      });

      this.loggerProvider.info('[UPDATE ALBUM]', { id: album.id });

      callback(null, translateAlbumEntity(album));
    } catch (error) {
      this.handleError<Album>(callback, error);
    }
  };

  deleteAlbum = async (call: grpc.ServerUnaryCall<Id>, callback: grpc.sendUnaryData<Empty>): Promise<void> => {
    try {
      await this.albumsService.delete({ id: call.request.getId() });

      this.loggerProvider.info('[DELETE ALBUM]', { id: call.request.getId() });

      callback(null, new Empty());
    } catch (error) {
      this.handleError<Empty>(callback, error);
    }
  };

  getArtist = async (call: grpc.ServerUnaryCall<Id>, callback: grpc.sendUnaryData<Artist>): Promise<void> => {
    try {
      const artist = await this.artistsService.get({ id: call.request.getId() });

      this.loggerProvider.info('[GET ARTIST]', { id: artist.id });

      callback(null, translateArtistEntity(artist));
    } catch (error) {
      this.handleError<Artist>(callback, error);
    }
  };

  getArtists = async (call: grpc.ServerUnaryCall<Empty>, callback: grpc.sendUnaryData<ArtistsList>): Promise<void> => {
    try {
      const artists = await this.artistsService.getAll();

      this.loggerProvider.info('[GET ARTISTS]');

      callback(null, translateArtistEntityList(artists));
    } catch (error) {
      this.handleError<ArtistsList>(callback, error);
    }
  };

  getArtistByGenre = async (call: grpc.ServerUnaryCall<GetArtistByGenreRequest>, callback: grpc.sendUnaryData<ArtistsList>): Promise<void> => {
    try {
      const artists = await this.artistsService.getByGenre({ genre: translateGenreEnum(call.request.getGenre()) });

      callback(null, translateArtistEntityList(artists));
    } catch (error) {
      this.handleError<ArtistsList>(callback, error);
    }
  };

  createArtist = async (call: grpc.ServerUnaryCall<CreateArtistRequest>, callback: grpc.sendUnaryData<Artist>): Promise<void> => {
    try {
      const artist = await this.artistsService.create({
        name: call.request.getName(),
        country: call.request.getCountry(),
        foundationDate: timestampToDate(call.request.getFoundationdate()),
        members: call.request.getMembersList(),
        description: call.request.getDescription(),
        genre: translateGenreEnum(call.request.getGenre()),
        photos: call.request.getPhotosList(),
        facebookUrl: call.request.getFacebookurl(),
        twitterUrl: call.request.getTwitterurl(),
        instagramUrl: call.request.getInstagramurl(),
        wikipediaUrl: call.request.getWikipediaurl(),
      });

      this.loggerProvider.info('[CREATE ARTIST]');

      callback(null, translateArtistEntity(artist));
    } catch (error) {
      this.handleError<Artist>(callback, error);
    }
  };

  updateArtist = async (call: grpc.ServerUnaryCall<UpdateArtistRequest>, callback: grpc.sendUnaryData<Artist>): Promise<void> => {
    try {
      const artist = await this.artistsService.update({
        id: call.request.getId(),
        name: call.request.getName() != '' ? call.request.getName() : undefined,
        country: call.request.getCountry() != '' ? call.request.getCountry() : undefined,
        foundationDate: call.request.getFoundationdate() > 0 ? timestampToDate(call.request.getFoundationdate()) : undefined,
        members: call.request.getMembersList(),
        description: call.request.getDescription() != '' ? call.request.getDescription() : undefined,
        genre: translateGenreEnum(call.request.getGenre()) > 0 ? translateGenreEnum(call.request.getGenre()) : undefined,
        photos: call.request.getPhotosList(),
        facebookUrl: call.request.getFacebookurl() != '' ? call.request.getFacebookurl() : undefined,
        twitterUrl: call.request.getTwitterurl() != '' ? call.request.getTwitterurl() : undefined,
        instagramUrl: call.request.getInstagramurl() != '' ? call.request.getInstagramurl() : undefined,
        wikipediaUrl: call.request.getWikipediaurl() != '' ? call.request.getWikipediaurl() : undefined,
      });

      this.loggerProvider.info('[UPDATE ARTIST]', { id: artist.id });

      callback(null, translateArtistEntity(artist));
    } catch (error) {
      this.handleError<Artist>(callback, error);
    }
  };

  deleteArtist = async (call: grpc.ServerUnaryCall<Id>, callback: grpc.sendUnaryData<Empty>): Promise<void> => {
    try {
      await this.artistsService.delete({ id: call.request.getId() });

      this.loggerProvider.info('[DELETE ARTIST]', { id: call.request.getId() });

      callback(null, new Empty());
    } catch (error) {
      this.handleError<Empty>(callback, error);
    }
  };

  favoriteArtist = async (call: grpc.ServerUnaryCall<Id>, callback: grpc.sendUnaryData<Artist>): Promise<void> => {
    try {
      const artist = await this.artistsService.addFavorite({ id: call.request.getId() });

      this.loggerProvider.info('[FAVORITE ARTIST]', { id: artist.id });

      callback(null, translateArtistEntity(artist));
    } catch (error) {
      this.handleError<Artist>(callback, error);
    }
  };

  unfavoriteArtist = async (call: grpc.ServerUnaryCall<Id>, callback: grpc.sendUnaryData<Artist>): Promise<void> => {
    try {
      const artist = await this.artistsService.removeFavorite({ id: call.request.getId() });

      this.loggerProvider.info('[UNFAVORITE ARTIST]', { id: artist.id });

      callback(null, translateArtistEntity(artist));
    } catch (error) {
      this.handleError<Artist>(callback, error);
    }
  };

  followArtist = async (call: grpc.ServerUnaryCall<Id>, callback: grpc.sendUnaryData<Artist>): Promise<void> => {
    try {
      const artist = await this.artistsService.addFollower({ id: call.request.getId() });

      this.loggerProvider.info('[FOLLOW ARTIST]', { id: artist.id });

      callback(null, translateArtistEntity(artist));
    } catch (error) {
      this.handleError<Artist>(callback, error);
    }
  };

  unfollowArtist = async (call: grpc.ServerUnaryCall<Id>, callback: grpc.sendUnaryData<Artist>): Promise<void> => {
    try {
      const artist = await this.artistsService.removeFollower({ id: call.request.getId() });

      this.loggerProvider.info('[UNFOLLOW ARTIST]', { id: artist.id });

      callback(null, translateArtistEntity(artist));
    } catch (error) {
      this.handleError<Artist>(callback, error);
    }
  };
}
