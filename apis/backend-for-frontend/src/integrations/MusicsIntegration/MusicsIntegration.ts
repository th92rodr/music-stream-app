import * as grpc from 'grpc';

import {
  CreateAlbum,
  CreateArtist,
  CreateMusic,
  DeleteAlbum,
  DeleteArtist,
  DeleteMusic,
  FavoriteArtist,
  FollowArtist,
  GetAlbum,
  GetAlbums,
  GetArtist,
  GetArtists,
  GetArtistsByGenre,
  GetMostFollowedArtists,
  GetMostRecentAlbums,
  GetMostViewedMusics,
  GetMusic,
  GetMusics,
  UnfavoriteArtist,
  UnfollowArtist,
  UpdateAlbum,
  UpdateArtist,
  UpdateMusic,
  ViewMusic,
} from './dtos';
import IMusicsIntegration from './interface';
import { MusicsClient } from '../proto/musics_service_grpc_pb';
import {
  Album,
  AlbumsList,
  Artist,
  ArtistsList,
  CreateAlbumRequest,
  CreateArtistRequest,
  CreateMusicRequest,
  Empty,
  GetAlbumsRequest,
  GetArtistsRequest,
  GetArtistsByGenreRequest,
  GetMostFollowedArtistsRequest,
  GetMostRecentAlbumsRequest,
  GetMostViewedMusicsRequest,
  GetMusicsRequest,
  Id,
  Music,
  MusicsList,
  UpdateAlbumRequest,
  UpdateArtistRequest,
  UpdateMusicRequest,
} from '../proto/musics_service_pb';
import { translateAlbumEntity, translateAlbumEntityList, translateArtistEntity, translateArtistEntityList, translateGenreEnum, translateMusicEntity, translateMusicEntityList } from '../translators';
import { handleError } from '../utils';
import Config from '@config/index';
import AlbumEntity from '@entities/Album';
import ArtistEntity from '@entities/Artist';
import MusicEntity from '@entities/Music';
import { dateToTimestamp } from '@utils/index';

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
        if (error != null) reject(handleError(error));
        else resolve(translateMusicEntity(music));
      });
    });
  };

  public getMusics = async ({ limit, offset }: GetMusics): Promise<MusicEntity[]> => {
    return new Promise((resolve, reject) => {
      const getMusicsRequest = new GetMusicsRequest();
      getMusicsRequest.setLimit(limit);
      getMusicsRequest.setOffset(offset);

      this.client.getMusics(getMusicsRequest, (error: Error | null, musicsList: MusicsList) => {
        if (error != null) reject(handleError(error));
        else resolve(translateMusicEntityList(musicsList));
      });
    });
  };

  public createMusic = async ({ title, durationInSeconds, file, composers, lyrics, albumId, artistId }: CreateMusic): Promise<MusicEntity> => {
    return new Promise((resolve, reject) => {
      const createMusicRequest = new CreateMusicRequest();
      createMusicRequest.setTitle(title);
      createMusicRequest.setDuration(durationInSeconds);
      createMusicRequest.setFile(file);
      createMusicRequest.setComposersList(composers);
      createMusicRequest.setLyrics(lyrics);
      createMusicRequest.setAlbumId(albumId);
      createMusicRequest.setArtistId(artistId);

      this.client.createMusic(createMusicRequest, (error: Error | null, music: Music) => {
        if (error != null) reject(handleError(error));
        else resolve(translateMusicEntity(music));
      });
    });
  };

  public updateMusic = async ({ id, title, durationInSeconds, file, composers, lyrics, albumId, artistId }: UpdateMusic): Promise<MusicEntity> => {
    return new Promise((resolve, reject) => {
      const updateMusicRequest = new UpdateMusicRequest();
      updateMusicRequest.setId(id);
      updateMusicRequest.setTitle(title ? title : '');
      updateMusicRequest.setDuration(durationInSeconds ? durationInSeconds : 0);
      updateMusicRequest.setFile(file ? file : '');
      updateMusicRequest.setComposersList(composers ? composers : []);
      updateMusicRequest.setLyrics(lyrics ? lyrics : '');
      updateMusicRequest.setAlbumId(albumId ? albumId : '');
      updateMusicRequest.setArtistId(artistId ? artistId : '');

      this.client.updateMusic(updateMusicRequest, (error: Error | null, music: Music) => {
        if (error != null) reject(handleError(error));
        else resolve(translateMusicEntity(music));
      });
    });
  };

  public deleteMusic = async ({ id }: DeleteMusic): Promise<void> => {
    return new Promise((resolve, reject) => {
      const musicId = new Id();
      musicId.setId(id);

      this.client.deleteMusic(musicId, (error: Error | null) => {
        if (error != null) reject(handleError(error));
        else resolve();
      });
    });
  };

  public viewMusic = async ({ id }: ViewMusic): Promise<MusicEntity> => {
    return new Promise((resolve, reject) => {
      const musicId = new Id();
      musicId.setId(id);

      this.client.viewMusic(musicId, (error: Error | null, music: Music) => {
        if (error != null) reject(handleError(error));
        else resolve(translateMusicEntity(music));
      });
    });
  };

  public getMostViewedMusics = async ({ limit, offset }: GetMostViewedMusics): Promise<MusicEntity[]> => {
    return new Promise((resolve, reject) => {
      const getMostViewedMusicsRequest = new GetMostViewedMusicsRequest();
      getMostViewedMusicsRequest.setLimit(limit);
      getMostViewedMusicsRequest.setOffset(offset);

      this.client.getMostViewedMusics(getMostViewedMusicsRequest, (error: Error | null, musicsList: MusicsList) => {
        if (error != null) reject(handleError(error));
        else resolve(translateMusicEntityList(musicsList));
      });
    });
  };

  public getAlbum = async ({ id }: GetAlbum): Promise<AlbumEntity> => {
    return new Promise((resolve, reject) => {
      const albumId = new Id();
      albumId.setId(id);

      this.client.getAlbum(albumId, (error: Error | null, album: Album) => {
        if (error != null) reject(handleError(error));
        else resolve(translateAlbumEntity(album));
      });
    });
  };

  public getAlbums = async ({ limit, offset }: GetAlbums): Promise<AlbumEntity[]> => {
    return new Promise((resolve, reject) => {
      const getAlbumsRequest = new GetAlbumsRequest();
      getAlbumsRequest.setLimit(limit);
      getAlbumsRequest.setOffset(offset);

      this.client.getAlbums(getAlbumsRequest, (error: Error | null, albumsList: AlbumsList) => {
        if (error != null) reject(handleError(error));
        else resolve(translateAlbumEntityList(albumsList));
      });
    });
  };

  public createAlbum = async ({ name, releaseDate, cover, studio, producers, artistId }: CreateAlbum): Promise<AlbumEntity> => {
    return new Promise((resolve, reject) => {
      const createAlbumRequest = new CreateAlbumRequest();
      createAlbumRequest.setName(name);
      createAlbumRequest.setReleaseDate(dateToTimestamp(releaseDate));
      createAlbumRequest.setCover(cover);
      createAlbumRequest.setStudio(studio);
      createAlbumRequest.setProducersList(producers);
      createAlbumRequest.setArtistId(artistId);

      this.client.createAlbum(createAlbumRequest, (error: Error | null, album: Album) => {
        if (error != null) reject(handleError(error));
        else resolve(translateAlbumEntity(album));
      });
    });
  };

  public updateAlbum = async ({ id, name, releaseDate, cover, studio, producers, artistId }: UpdateAlbum): Promise<AlbumEntity> => {
    return new Promise((resolve, reject) => {
      const updateAlbumRequest = new UpdateAlbumRequest();
      updateAlbumRequest.setId(id);
      updateAlbumRequest.setName(name ? name : '');
      updateAlbumRequest.setReleaseDate(releaseDate ? dateToTimestamp(releaseDate) : 0);
      updateAlbumRequest.setCover(cover ? cover : '');
      updateAlbumRequest.setStudio(studio ? studio : '');
      updateAlbumRequest.setProducersList(producers ? producers : []);
      updateAlbumRequest.setArtistId(artistId ? artistId : '');

      this.client.updateAlbum(updateAlbumRequest, (error: Error | null, album: Album) => {
        if (error != null) reject(handleError(error));
        else resolve(translateAlbumEntity(album));
      });
    });
  };

  public deleteAlbum = async ({ id }: DeleteAlbum): Promise<void> => {
    return new Promise((resolve, reject) => {
      const albumId = new Id();
      albumId.setId(id);

      this.client.deleteAlbum(albumId, (error: Error | null) => {
        if (error != null) reject(handleError(error));
        else resolve();
      });
    });
  };

  public getMostRecentAlbums = async ({ limit, offset }: GetMostRecentAlbums): Promise<AlbumEntity[]> => {
    return new Promise((resolve, reject) => {
      const getMostRecentAlbumsRequest = new GetMostRecentAlbumsRequest();
      getMostRecentAlbumsRequest.setLimit(limit);
      getMostRecentAlbumsRequest.setOffset(offset);

      this.client.getMostRecentAlbums(getMostRecentAlbumsRequest, (error: Error | null, albumsList: AlbumsList) => {
        if (error != null) reject(handleError(error));
        else resolve(translateAlbumEntityList(albumsList));
      });
    });
  };

  public getArtist = async ({ id }: GetArtist): Promise<ArtistEntity> => {
    return new Promise((resolve, reject) => {
      const artistId = new Id();
      artistId.setId(id);

      this.client.getArtist(artistId, (error: Error | null, artist: Artist) => {
        if (error != null) reject(handleError(error));
        else resolve(translateArtistEntity(artist));
      });
    });
  };

  public getArtists = async ({ limit, offset }: GetArtists): Promise<ArtistEntity[]> => {
    return new Promise((resolve, reject) => {
      const getArtistsRequest = new GetArtistsRequest();
      getArtistsRequest.setLimit(limit);
      getArtistsRequest.setOffset(offset);

      this.client.getArtists(getArtistsRequest, (error: Error | null, artistsList: ArtistsList) => {
        if (error != null) reject(handleError(error));
        else resolve(translateArtistEntityList(artistsList));
      });
    });
  };

  public getArtistsByGenre = async ({ genre, limit, offset }: GetArtistsByGenre): Promise<ArtistEntity[]> => {
    return new Promise((resolve, reject) => {
      const getArtistsByGenreRequest = new GetArtistsByGenreRequest();
      getArtistsByGenreRequest.setGenre(translateGenreEnum(genre));
      getArtistsByGenreRequest.setLimit(limit);
      getArtistsByGenreRequest.setOffset(offset);

      this.client.getArtistsByGenre(getArtistsByGenreRequest, (error: Error | null, artistsList: ArtistsList) => {
        if (error != null) reject(handleError(error));
        else resolve(translateArtistEntityList(artistsList));
      });
    });
  };

  // prettier-ignore
  public createArtist = async ({ name, country, foundationDate, members, description, genre, photos, facebookUrl, twitterUrl, instagramUrl, wikipediaUrl, font }: CreateArtist): Promise<ArtistEntity> => {
    return new Promise((resolve, reject) => {
      const createArtistRequest = new CreateArtistRequest();
      createArtistRequest.setName(name);
      createArtistRequest.setCountry(country);
      createArtistRequest.setFoundationDate(dateToTimestamp(foundationDate));
      createArtistRequest.setMembersList(members);
      createArtistRequest.setDescription(description);
      createArtistRequest.setGenre(translateGenreEnum(genre));
      createArtistRequest.setPhotosList(photos);
      createArtistRequest.setFacebookUrl(facebookUrl);
      createArtistRequest.setTwitterUrl(twitterUrl);
      createArtistRequest.setInstagramUrl(instagramUrl);
      createArtistRequest.setWikipediaUrl(wikipediaUrl);
      createArtistRequest.setFont(font);

      this.client.createArtist(createArtistRequest, (error: Error | null, artist: Artist) => {
        if (error != null) reject(handleError(error));
        else resolve(translateArtistEntity(artist));
      });
    });
  };

  // prettier-ignore
  public updateArtist = async ({ id, name, country, foundationDate, members, description, genre, photos, facebookUrl, twitterUrl, instagramUrl, wikipediaUrl, font }: UpdateArtist): Promise<ArtistEntity> => {
    return new Promise((resolve, reject) => {
      const updateArtistRequest = new UpdateArtistRequest();
      updateArtistRequest.setId(id);
      updateArtistRequest.setName(name ? name : '');
      updateArtistRequest.setCountry(country ? country : '');
      updateArtistRequest.setFoundationDate(foundationDate ? dateToTimestamp(foundationDate) : 0);
      updateArtistRequest.setMembersList(members ? members : []);
      updateArtistRequest.setDescription(description ? description : '');
      updateArtistRequest.setGenre(genre ? translateGenreEnum(genre) : -1);
      updateArtistRequest.setPhotosList(photos ? photos : []);
      updateArtistRequest.setFacebookUrl(facebookUrl ? facebookUrl : '');
      updateArtistRequest.setTwitterUrl(twitterUrl ? twitterUrl : '');
      updateArtistRequest.setInstagramUrl(instagramUrl ? instagramUrl : '');
      updateArtistRequest.setWikipediaUrl(wikipediaUrl ? wikipediaUrl : '');
      updateArtistRequest.setFont(font ? font : '');

      this.client.updateArtist(updateArtistRequest, (error: Error | null, artist: Artist) => {
        if (error != null) reject(handleError(error));
        else resolve(translateArtistEntity(artist));
      });
    });
  };

  public deleteArtist = async ({ id }: DeleteArtist): Promise<void> => {
    return new Promise((resolve, reject) => {
      const artistId = new Id();
      artistId.setId(id);

      this.client.deleteArtist(artistId, (error: Error | null) => {
        if (error != null) reject(handleError(error));
        else resolve();
      });
    });
  };

  public favoriteArtist = async ({ id }: FavoriteArtist): Promise<ArtistEntity> => {
    return new Promise((resolve, reject) => {
      const artistId = new Id();
      artistId.setId(id);

      this.client.favoriteArtist(artistId, (error: Error | null, artist: Artist) => {
        if (error != null) reject(handleError(error));
        else resolve(translateArtistEntity(artist));
      });
    });
  };

  public unfavoriteArtist = async ({ id }: UnfavoriteArtist): Promise<ArtistEntity> => {
    return new Promise((resolve, reject) => {
      const artistId = new Id();
      artistId.setId(id);

      this.client.unfavoriteArtist(artistId, (error: Error | null, artist: Artist) => {
        if (error != null) reject(handleError(error));
        else resolve(translateArtistEntity(artist));
      });
    });
  };

  public followArtist = async ({ id }: FollowArtist): Promise<ArtistEntity> => {
    return new Promise((resolve, reject) => {
      const artistId = new Id();
      artistId.setId(id);

      this.client.followArtist(artistId, (error: Error | null, artist: Artist) => {
        if (error != null) reject(handleError(error));
        else resolve(translateArtistEntity(artist));
      });
    });
  };

  public unfollowArtist = async ({ id }: UnfollowArtist): Promise<ArtistEntity> => {
    return new Promise((resolve, reject) => {
      const artistId = new Id();
      artistId.setId(id);

      this.client.unfollowArtist(artistId, (error: Error | null, artist: Artist) => {
        if (error != null) reject(handleError(error));
        else resolve(translateArtistEntity(artist));
      });
    });
  };

  public getMostFollowedArtists = async ({ limit, offset }: GetMostFollowedArtists): Promise<ArtistEntity[]> => {
    return new Promise((resolve, reject) => {
      const getMostFollowedArtistsRequest = new GetMostFollowedArtistsRequest();
      getMostFollowedArtistsRequest.setLimit(limit);
      getMostFollowedArtistsRequest.setOffset(offset);

      this.client.getMostFollowedArtists(getMostFollowedArtistsRequest, (error: Error | null, artistsList: ArtistsList) => {
        if (error != null) reject(handleError(error));
        else resolve(translateArtistEntityList(artistsList));
      });
    });
  };
}
