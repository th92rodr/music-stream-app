import Artist from '@entities/Artist';
import ArtistsRepository from '@repositories/ArtistsRepository/interface';

interface Request {
  id: string;
}

export default class GetArtistService {
  private artistsRepository: ArtistsRepository;

  constructor(artistsRepository: ArtistsRepository) {
    this.artistsRepository = artistsRepository;
  }

  public async execute({ id }: Request): Promise<Artist> {
    const artist = await this.artistsRepository.find(id);
    if (!artist) {
      throw Error();
    }
    return artist;
  }
}
