import Album from '@entities/Album';
import AlbumsRepository from '@repositories/AlbumsRepository/interface';

interface Request {
  id: string;
}

export default class GetAlbumService {
  private albumsRepository: AlbumsRepository;

  constructor(albumsRepository: AlbumsRepository) {
    this.albumsRepository = albumsRepository;
  }

  public async execute({ id }: Request): Promise<Album> {
    return this.albumsRepository.find(id);
  }
}
