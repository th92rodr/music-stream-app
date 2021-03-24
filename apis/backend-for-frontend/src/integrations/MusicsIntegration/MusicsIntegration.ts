import * as grpc from 'grpc';

import { MusicsClient } from './proto/musics_service_grpc_pb';
import {
  Id,
  Music,
  Album,
  Artist,
  ArtistList,
  Genre,
  Empty,
  CreateMusicRequest,
  UpdateMusicRequest,
  CreateAlbumRequest,
  UpdateAlbumRequest,
  GetArtistByGenreRequest,
  CreateArtistRequest,
  UpdateArtistRequest,
} from './proto/musics_service_pb';
// prettier-ignore
import {
  GetMusic,
  CreateMusic,
  UpdateMusic,
  DeleteMusic,
  GetAlbum,
  CreateAlbum,
  UpdateAlbum,
  DeleteAlbum,
  GetArtist,
  GetArtistByGenre,
  CreateArtist,
  UpdateArtist,
  DeleteArtist,
} from './dtos';
import IMusicsIntegration from './interface';
import Config from '@config/index';
import { Genre as GenreEnum } from '@constants/index';
import AlbumEntity from '@entities/Album';
import ArtistEntity from '@entities/Artist';
import MusicEntity from '@entities/Music';

export default class MusicsIntegration implements IMusicsIntegration {
  private client: MusicsClient;

  constructor() {
    const ADDRESS = Config.integrations.musics_service;

    this.client = new MusicsClient(ADDRESS, grpc.credentials.createInsecure());
  }

  public getMusic = async ({ id }: GetMusic): Promise<MusicEntity> => {
    return new Promise((resolve, reject) => {
      const musicId = new Id();
      musicId.setId(id);

      this.client.getMusic(musicId, (error: Error | null, music: Music) => {
        if (error != null) reject(error);
        else resolve(this.translateMusicEntity(music));
      });
    });
  };

  public createMusic = async ({ title, durationInSeconds, file, composers, lyrics, albumId }: CreateMusic): Promise<MusicEntity> => {
    return new Promise((resolve, reject) => {
      const createMusicRequest = new CreateMusicRequest();
      createMusicRequest.setTitle(title);
      createMusicRequest.setDurationinseconds(durationInSeconds);
      createMusicRequest.setFile(file);
      createMusicRequest.setComposersList(composers);
      createMusicRequest.setLyrics(lyrics);
      createMusicRequest.setAlbumid(albumId);

      this.client.createMusic(createMusicRequest, (error: Error | null, music: Music) => {
        if (error != null) reject(error);
        else resolve(this.translateMusicEntity(music));
      });
    });
  };

  public updateMusic = async ({ id, title, durationInSeconds, file, composers, lyrics, albumId }: UpdateMusic): Promise<MusicEntity> => {
    return new Promise((resolve, reject) => {
      const updateMusicRequest = new UpdateMusicRequest();
      updateMusicRequest.setId(id);
      updateMusicRequest.setTitle(title ? title : '');
      updateMusicRequest.setDurationinseconds(durationInSeconds ? durationInSeconds : 0);
      updateMusicRequest.setFile(file ? file : '');
      updateMusicRequest.setComposersList(composers ? composers : []);
      updateMusicRequest.setLyrics(lyrics ? lyrics : '');
      updateMusicRequest.setAlbumid(albumId ? albumId : '');

      this.client.updateMusic(updateMusicRequest, (error: Error | null, music: Music) => {
        if (error != null) reject(error);
        else resolve(this.translateMusicEntity(music));
      });
    });
  };

  public deleteMusic = async ({ id }: DeleteMusic): Promise<void> => {
    return new Promise((resolve, reject) => {
      const musicId = new Id();
      musicId.setId(id);

      this.client.deleteMusic(musicId, (error: Error | null) => {
        if (error != null) reject(error);
        else resolve();
      });
    });
  };

  public getAlbum = async ({ id }: GetAlbum): Promise<AlbumEntity> => {
    return new Promise((resolve, reject) => {
      const albumId = new Id();
      albumId.setId(id);

      this.client.getAlbum(albumId, (error: Error | null, album: Album) => {
        if (error != null) reject(error);
        else resolve(this.translateAlbumEntity(album));
      });
    });
  };

  public createAlbum = async ({ name, year, cover, studio, producers, artistId }: CreateAlbum): Promise<AlbumEntity> => {
    return new Promise((resolve, reject) => {
      const createAlbumRequest = new CreateAlbumRequest();
      createAlbumRequest.setName(name);
      createAlbumRequest.setYear(year.getTime());
      createAlbumRequest.setCover(cover);
      createAlbumRequest.setStudio(studio);
      createAlbumRequest.setProducersList(producers);
      createAlbumRequest.setArtistid(artistId);

      this.client.createAlbum(createAlbumRequest, (error: Error | null, album: Album) => {
        if (error != null) reject(error);
        else resolve(this.translateAlbumEntity(album));
      });
    });
  };

  public updateAlbum = async ({ id, name, year, cover, studio, producers, artistId }: UpdateAlbum): Promise<AlbumEntity> => {
    return new Promise((resolve, reject) => {
      const updateAlbumRequest = new UpdateAlbumRequest();
      updateAlbumRequest.setId(id);
      updateAlbumRequest.setName(name ? name : '');
      updateAlbumRequest.setYear(year ? year.getTime() : 0);
      updateAlbumRequest.setCover(cover ? cover : '');
      updateAlbumRequest.setStudio(studio ? studio : '');
      updateAlbumRequest.setProducersList(producers ? producers : []);
      updateAlbumRequest.setArtistid(artistId ? artistId : '');

      this.client.updateAlbum(updateAlbumRequest, (error: Error | null, album: Album) => {
        if (error != null) reject(error);
        else resolve(this.translateAlbumEntity(album));
      });
    });
  };

  public deleteAlbum = async ({ id }: DeleteAlbum): Promise<void> => {
    return new Promise((resolve, reject) => {
      const albumId = new Id();
      albumId.setId(id);

      this.client.deleteAlbum(albumId, (error: Error | null) => {
        if (error != null) reject(error);
        else resolve();
      });
    });
  };

  public getArtist = async ({ id }: GetArtist): Promise<ArtistEntity> => {
    return new Promise((resolve, reject) => {
      const artistId = new Id();
      artistId.setId(id);

      this.client.getArtist(artistId, (error: Error | null, artist: Artist) => {
        if (error != null) reject(error);
        else resolve(this.translateArtistEntity(artist));
      });
    });
  };

  public getAllArtists = async (): Promise<Array<ArtistEntity>> => {
    return new Promise((resolve, reject) => {
      this.client.getAllArtists(new Empty(), (error: Error | null, artistList: ArtistList) => {
        if (error != null) reject(error);
        else resolve(this.translateArtistEntityList(artistList));
      });
    });
  };

  public getArtistsByGenre = async ({ genre }: GetArtistByGenre): Promise<Array<ArtistEntity>> => {
    return new Promise((resolve, reject) => {
      const getArtistByGenreRequest = new GetArtistByGenreRequest();
      getArtistByGenreRequest.setGenre(this.translateGenreEnum(genre));

      this.client.getArtistByGenre(getArtistByGenreRequest, (error: Error | null, artistList: ArtistList) => {
        if (error != null) reject(error);
        else resolve(this.translateArtistEntityList(artistList));
      });
    });
  };

  public createArtist = async ({ name, description, genre, photos }: CreateArtist): Promise<ArtistEntity> => {
    return new Promise((resolve, reject) => {
      const createArtistRequest = new CreateArtistRequest();
      createArtistRequest.setName(name);
      createArtistRequest.setDescription(description);
      createArtistRequest.setGenre(this.translateGenreEnum(genre));
      createArtistRequest.setPhotosList(photos);

      this.client.createArtist(createArtistRequest, (error: Error | null, artist: Artist) => {
        if (error != null) reject(error);
        else resolve(this.translateArtistEntity(artist));
      });
    });
  };

  public updateArtist = async ({ id, name, description, genre, photos }: UpdateArtist): Promise<ArtistEntity> => {
    return new Promise((resolve, reject) => {
      const updateArtistRequest = new UpdateArtistRequest();
      updateArtistRequest.setId(id);
      updateArtistRequest.setName(name ? name : '');
      updateArtistRequest.setDescription(description ? description : '');
      updateArtistRequest.setGenre(genre ? this.translateGenreEnum(genre) : 0);
      updateArtistRequest.setPhotosList(photos ? photos : []);

      this.client.updateArtist(updateArtistRequest, (error: Error | null, artist: Artist) => {
        if (error != null) reject(error);
        else resolve(this.translateArtistEntity(artist));
      });
    });
  };

  public deleteArtist = async ({ id }: DeleteArtist): Promise<void> => {
    return new Promise((resolve, reject) => {
      const artistId = new Id();
      artistId.setId(id);

      this.client.deleteArtist(artistId, (error: Error | null) => {
        if (error != null) reject(error);
        else resolve();
      });
    });
  };

  private translateMusicEntity(music: Music): MusicEntity {
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

  private translateAlbumEntity(album: Album): AlbumEntity {
    return new AlbumEntity({
      id: album.getId(),
      name: album.getName(),
      year: new Date(album.getYear()),
      cover: album.getCover(),
      studio: album.getStudio(),
      producers: album.getProducersList(),
      artistId: album.getArtistid(),
    });
  }

  private translateArtistEntity(artist: Artist): ArtistEntity {
    return new ArtistEntity({
      id: artist.getId(),
      name: artist.getName(),
      description: artist.getDescription(),
      genre: this.translateGenre(artist.getGenre()),
      photos: artist.getPhotosList(),
    });
  }

  private translateArtistEntityList(artistList: ArtistList): Array<ArtistEntity> {
    return artistList.getArtistsList().map(artist => this.translateArtistEntity(artist));
  }

  private translateGenre(genre: Genre): GenreEnum {
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

  private translateGenreEnum(genre: GenreEnum): Genre {
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
