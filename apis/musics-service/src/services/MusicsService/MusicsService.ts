import { GetMusicRequest } from './dtos';
import IMusicsService from './interface';
import { ErrorMusicNotFound } from '@constants/errors';
import Music from '@entities/Music';
import MusicsRepository from '@repositories/MusicsRepository/interface';

export default class MusicsService implements IMusicsService {
  private musicsRepository: MusicsRepository;

  constructor(musicsRepository: MusicsRepository) {
    this.musicsRepository = musicsRepository;
  }

  public async get({ id }: GetMusicRequest): Promise<Music> {
    const music = await this.musicsRepository.find(id);

    if (!music) {
      throw new ErrorMusicNotFound(id);
    }

    return music;
  }

  public async create(request: any): Promise<void> {}

  public async update(request: any): Promise<void> {}

  public async delete(request: any): Promise<void> {}
}
