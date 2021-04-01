import * as grpc from 'grpc';

import { MusicsClient } from './proto/musics_service_grpc_pb';
import {
  Id,
  Album,
  Artist,
  ArtistsList,
  Empty,
  Music,
  CreateMusicRequest,
  UpdateMusicRequest,
  CreateAlbumRequest,
  UpdateAlbumRequest,
  GetArtistByGenreRequest,
  CreateArtistRequest,
  UpdateArtistRequest,
  AlbumsList,
  MusicsList,
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
// prettier-ignore
import {
  translateAlbumEntity,
  translateAlbumEntityList,
  translateArtistEntity,
  translateArtistEntityList,
  translateGenreEnum,
  translateMusicEntity,
  translateMusicEntityList
} from './translators';
import Config from '@config/index';
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
        else resolve(translateMusicEntity(music));
      });
    });
  };

  public getMusics = async (): Promise<Array<MusicEntity>> => {
    return new Promise((resolve, reject) => {
      this.client.getMusics(new Empty(), (error: Error | null, musicsList: MusicsList) => {
        if (error != null) reject(error);
        else resolve(translateMusicEntityList(musicsList));
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
        else resolve(translateMusicEntity(music));
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
        else resolve(translateMusicEntity(music));
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
        else resolve(translateAlbumEntity(album));
      });
    });
  };

  public getAlbums = async (): Promise<Array<AlbumEntity>> => {
    return new Promise((resolve, reject) => {
      this.client.getAlbums(new Empty(), (error: Error | null, albumsList: AlbumsList) => {
        if (error != null) reject(error);
        else resolve(translateAlbumEntityList(albumsList));
      });
    });
  };

  public createAlbum = async ({ name, releaseDate, cover, studio, producers, artistId }: CreateAlbum): Promise<AlbumEntity> => {
    return new Promise((resolve, reject) => {
      const createAlbumRequest = new CreateAlbumRequest();
      createAlbumRequest.setName(name);
      createAlbumRequest.setReleasedate(releaseDate.getTime());
      createAlbumRequest.setCover(cover);
      createAlbumRequest.setStudio(studio);
      createAlbumRequest.setProducersList(producers);
      createAlbumRequest.setArtistid(artistId);

      this.client.createAlbum(createAlbumRequest, (error: Error | null, album: Album) => {
        if (error != null) reject(error);
        else resolve(translateAlbumEntity(album));
      });
    });
  };

  public updateAlbum = async ({ id, name, releaseDate, cover, studio, producers, artistId }: UpdateAlbum): Promise<AlbumEntity> => {
    return new Promise((resolve, reject) => {
      const updateAlbumRequest = new UpdateAlbumRequest();
      updateAlbumRequest.setId(id);
      updateAlbumRequest.setName(name ? name : '');
      updateAlbumRequest.setReleasedate(releaseDate ? releaseDate.getTime() : 0);
      updateAlbumRequest.setCover(cover ? cover : '');
      updateAlbumRequest.setStudio(studio ? studio : '');
      updateAlbumRequest.setProducersList(producers ? producers : []);
      updateAlbumRequest.setArtistid(artistId ? artistId : '');

      this.client.updateAlbum(updateAlbumRequest, (error: Error | null, album: Album) => {
        if (error != null) reject(error);
        else resolve(translateAlbumEntity(album));
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
        else resolve(translateArtistEntity(artist));
      });
    });
  };

  public getArtists = async (): Promise<Array<ArtistEntity>> => {
    return new Promise((resolve, reject) => {
      this.client.getArtists(new Empty(), (error: Error | null, artistsList: ArtistsList) => {
        if (error != null) reject(error);
        else resolve(translateArtistEntityList(artistsList));
      });
    });
  };

  public getArtistsByGenre = async ({ genre }: GetArtistByGenre): Promise<Array<ArtistEntity>> => {
    return new Promise((resolve, reject) => {
      const getArtistByGenreRequest = new GetArtistByGenreRequest();
      getArtistByGenreRequest.setGenre(translateGenreEnum(genre));

      this.client.getArtistByGenre(getArtistByGenreRequest, (error: Error | null, artistsList: ArtistsList) => {
        if (error != null) reject(error);
        else resolve(translateArtistEntityList(artistsList));
      });
    });
  };

  public createArtist = async ({ name, country, foundationDate, members, description, genre, photos }: CreateArtist): Promise<ArtistEntity> => {
    return new Promise((resolve, reject) => {
      const createArtistRequest = new CreateArtistRequest();
      createArtistRequest.setName(name);
      createArtistRequest.setCountry(country);
      createArtistRequest.setFoundationdate(foundationDate.getTime());
      createArtistRequest.setMembersList(members);
      createArtistRequest.setDescription(description);
      createArtistRequest.setGenre(translateGenreEnum(genre));
      createArtistRequest.setPhotosList(photos);

      this.client.createArtist(createArtistRequest, (error: Error | null, artist: Artist) => {
        if (error != null) reject(error);
        else resolve(translateArtistEntity(artist));
      });
    });
  };

  public updateArtist = async ({ id, name, country, foundationDate, members, description, genre, photos }: UpdateArtist): Promise<ArtistEntity> => {
    return new Promise((resolve, reject) => {
      const updateArtistRequest = new UpdateArtistRequest();
      updateArtistRequest.setId(id);
      updateArtistRequest.setName(name ? name : '');
      updateArtistRequest.setCountry(country ? country : '');
      updateArtistRequest.setFoundationdate(foundationDate ? foundationDate.getTime() : 0);
      updateArtistRequest.setMembersList(members ? members : []);
      updateArtistRequest.setDescription(description ? description : '');
      updateArtistRequest.setGenre(genre ? translateGenreEnum(genre) : 0);
      updateArtistRequest.setPhotosList(photos ? photos : []);

      this.client.updateArtist(updateArtistRequest, (error: Error | null, artist: Artist) => {
        if (error != null) reject(error);
        else resolve(translateArtistEntity(artist));
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
}
