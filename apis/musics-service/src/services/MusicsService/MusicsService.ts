// prettier-ignore
import {
  GetMusicRequest,
  CreateMusicRequest,
  UpdateMusicRequest,
  DeleteMusicRequest
} from './dtos';
import IMusicsService from './interface';
import { ErrorMusicNotFound } from '@constants/errors';
import Music from '@entities/Music';
import IIdProvider from '@providers/IdProvider/interface';
import IMusicsRepository from '@repositories/MusicsRepository/interface';
import { arrayIntersection } from '@utils/index';

export default class MusicsService implements IMusicsService {
  private musicsRepository: IMusicsRepository;
  private idProvider: IIdProvider;

  // prettier-ignore
  constructor(
    musicsRepository: IMusicsRepository,
    idProvider: IIdProvider,
  ) {
    this.musicsRepository = musicsRepository;
    this.idProvider = idProvider;
  }

  public async get({ id }: GetMusicRequest): Promise<Music> {
    const music = await this.musicsRepository.find(id);

    if (!music) {
      throw new ErrorMusicNotFound(id);
    }

    return music;
  }

  public async create({ title, durationInSeconds, file, composers, lyrics, albumId }: CreateMusicRequest): Promise<Music> {
    const music = new Music({
      id: this.idProvider.generate(),
      title,
      durationInSeconds,
      file,
      composers,
      lyrics,
      albumId,
    });

    await this.musicsRepository.store(music);

    return music;
  }

  public async update({ id, title, durationInSeconds, file, composers, lyrics, albumId }: UpdateMusicRequest): Promise<Music> {
    const music = await this.musicsRepository.find(id);

    if (!music) {
      throw new ErrorMusicNotFound(id);
    }

    const newMusic = new Music({
      id,
      title: title != '' ? title : music.title,
      durationInSeconds: durationInSeconds > 0 ? durationInSeconds : music.durationInSeconds,
      file: file != '' ? file : music.file,
      composers: arrayIntersection(composers, music.composers),
      lyrics: lyrics != '' ? lyrics : music.lyrics,
      albumId: albumId != '' ? albumId : music.albumId,
    });

    await this.musicsRepository.update(newMusic);

    return newMusic;
  }

  public async delete({ id }: DeleteMusicRequest): Promise<void> {
    await this.musicsRepository.delete(id);
  }
}
