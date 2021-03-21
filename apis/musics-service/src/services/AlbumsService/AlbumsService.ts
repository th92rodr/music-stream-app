// prettier-ignore
import {
  GetAlbumRequest,
  CreateAlbumRequest,
  UpdateAlbumRequest,
  DeleteAlbumRequest
} from './dtos';
import IAlbumsService from './interface';
import { ErrorAlbumNotFound } from '@constants/errors';
import Album from '@entities/Album';
import IIdProvider from '@providers/IdProvider/interface';
import IAlbumsRepository from '@repositories/AlbumsRepository/interface';
import { arrayIntersection } from '@utils/index';

export default class AlbumsService implements IAlbumsService {
  private albumsRepository: IAlbumsRepository;
  private idProvider: IIdProvider;

  // prettier-ignore
  constructor(
    albumsRepository: IAlbumsRepository,
    idProvider: IIdProvider,
  ) {
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

  public async create({ name, year, cover, studio, producers, artistId }: CreateAlbumRequest): Promise<Album> {
    const album = new Album({
      id: this.idProvider.generate(),
      name,
      year,
      cover,
      studio,
      producers,
      artistId,
    });

    await this.albumsRepository.store(album);

    return album;
  }

  public async update({ id, name, year, cover, studio, producers, artistId }: UpdateAlbumRequest): Promise<Album> {
    const album = await this.albumsRepository.find(id);

    if (!album) {
      throw new ErrorAlbumNotFound(id);
    }

    const newAlbum = new Album({
      id,
      name: name != '' ? name : album.name,
      year: year != null ? year : album.year,
      cover: cover != '' ? cover : album.cover,
      studio: studio != '' ? studio : album.studio,
      producers: arrayIntersection(producers, album.producers),
      artistId: artistId != '' ? artistId : album.artistId,
    });

    await this.albumsRepository.update(newAlbum);

    return newAlbum;
  }

  public async delete({ id }: DeleteAlbumRequest): Promise<void> {
    await this.albumsRepository.delete(id);
  }
}
