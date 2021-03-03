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
    const album = await this.albumsRepository.find(id);
    if (!album) {
      throw Error();
    }
    return album;
  }
}
