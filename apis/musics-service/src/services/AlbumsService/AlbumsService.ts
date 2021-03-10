import { GetAlbumRequest } from './dtos';
import IAlbumsService from './interface';
import { ErrorAlbumNotFound } from '@constants/errors';
import Album from '@entities/Album';
import AlbumsRepository from '@repositories/AlbumsRepository/interface';

export default class AlbumsService implements IAlbumsService {
  private albumsRepository: AlbumsRepository;

  constructor(albumsRepository: AlbumsRepository) {
    this.albumsRepository = albumsRepository;
  }

  public async get({ id }: GetAlbumRequest): Promise<Album> {
    const album = await this.albumsRepository.find(id);

    if (!album) {
      throw new ErrorAlbumNotFound(id);
    }

    return album;
  }

  public async create(request: any): Promise<void> {}

  public async update(request: any): Promise<void> {}

  public async delete(request: any): Promise<void> {}
}
