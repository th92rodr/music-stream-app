import Music from '@entities/Music';
import MusicsRepository from '@repositories/MusicsRepository/interface';

interface Request {
  id: string;
}

export default class GetMusicService {
  private musicsRepository: MusicsRepository;

  constructor(musicsRepository: MusicsRepository) {
    this.musicsRepository = musicsRepository;
  }

  public async execute({ id }: Request): Promise<Music> {
    return this.musicsRepository.find(id);
  }
}
