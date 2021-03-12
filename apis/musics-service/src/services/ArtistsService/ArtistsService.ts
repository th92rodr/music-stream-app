import { GetArtistRequest } from './dtos';
import IArtistsService from './interface';
import { ErrorArtistNotFound } from '@constants/errors';
import Artist from '@entities/Artist';
import IArtistsRepository from '@repositories/ArtistsRepository/interface';

export default class ArtistsService implements IArtistsService {
  private artistsRepository: IArtistsRepository;

  constructor(artistsRepository: IArtistsRepository) {
    this.artistsRepository = artistsRepository;
  }

  public async get({ id }: GetArtistRequest): Promise<Artist> {
    const artist = await this.artistsRepository.find(id);

    if (!artist) {
      throw new ErrorArtistNotFound(id);
    }

    return artist;
  }

  public async create(request: any): Promise<void> {}

  public async update(request: any): Promise<void> {}

  public async delete(request: any): Promise<void> {}
}
