import * as grpc from 'grpc';

import { MusicsClient } from './proto/musics_service_grpc_pb';
import { Id, Music, Album, Artist, Genre } from './proto/musics_service_pb';
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

  public getMusic = async (id: string): Promise<MusicEntity> => {
    return new Promise((resolve, reject) => {
      const musicId = new Id();
      musicId.setId(id);

      this.client.getMusic(musicId, (error: Error | null, music: Music) => {
        if (error != null) reject(error);
        else resolve(this.translateMusicEntity(music));
      });
    });
  };

  public getAlbum = async (id: string): Promise<AlbumEntity> => {
    return new Promise((resolve, reject) => {
      const albumId = new Id();
      albumId.setId(id);

      this.client.getAlbum(albumId, (error: Error | null, album: Album) => {
        if (error != null) reject(error);
        else resolve(this.translateAlbumEntity(album));
      });
    });
  };

  public getArtist = async (id: string): Promise<ArtistEntity> => {
    return new Promise((resolve, reject) => {
      const artistId = new Id();
      artistId.setId(id);

      this.client.getArtist(artistId, (error: Error | null, artist: Artist) => {
        if (error != null) reject(error);
        else resolve(this.translateArtistEntity(artist));
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
}
