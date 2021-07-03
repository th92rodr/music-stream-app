import { CreateAlbumRequest, DeleteAlbumRequest, GetAlbumRequest, GetAllAlbumsRequest, GetMostRecentAlbumsRequest, UpdateAlbumRequest } from './dtos';
import IAlbumsService from './interface';
import { ErrorAlbumNotFound } from '@constants/errors';
import Album from '@entities/Album';
import IIdProvider from '@providers/IdProvider/interface';
import IAlbumsRepository from '@repositories/AlbumsRepository/interface';

export default class AlbumsService implements IAlbumsService {
  private albumsRepository: IAlbumsRepository;
  private idProvider: IIdProvider;

  constructor(albumsRepository: IAlbumsRepository, idProvider: IIdProvider) {
    this.albumsRepository = albumsRepository;
    this.idProvider = idProvider;
  }

  public async get({ id }: GetAlbumRequest): Promise<Album> {
    const album = await this.albumsRepository.find(id);

    if (!album) {
      throw new ErrorAlbumNotFound(id);
    }

    return album;
  }

  public async getAll({ limit, offset }: GetAllAlbumsRequest): Promise<Album[]> {
    return this.albumsRepository.findAll({ limit, offset });
  }

  public async create({ name, releaseDate, cover, studio, producers, artistId }: CreateAlbumRequest): Promise<Album> {
    const album = new Album({
      id: this.idProvider.generate(),
      name,
      releaseDate,
      cover,
      studio,
      producers,
      artistId,
    });

    await this.albumsRepository.store(album);

    return album;
  }

  public async update({ id, name, releaseDate, cover, studio, producers, artistId }: UpdateAlbumRequest): Promise<Album> {
    const album = await this.albumsRepository.find(id);

    if (!album) {
      throw new ErrorAlbumNotFound(id);
    }

    if (producers) {
      producers.forEach(producer => {
        if (!album.producers.includes(producer)) {
          album.producers.push(producer);
        }
      });
    }

    const newAlbum = new Album({
      id,
      name: name ? name : album.name,
      releaseDate: releaseDate ? releaseDate : album.releaseDate,
      cover: cover ? cover : album.cover,
      studio: studio ? studio : album.studio,
      producers: album.producers,
      artistId: artistId ? artistId : album.artistId,
    });

    await this.albumsRepository.update(newAlbum);

    return newAlbum;
  }

  public async delete({ id }: DeleteAlbumRequest): Promise<void> {
    await this.albumsRepository.delete(id);
  }

  public async getMostRecent({ limit, offset }: GetMostRecentAlbumsRequest): Promise<Album[]> {
    return this.albumsRepository.findMostRecent({ limit, offset });
  }
}
