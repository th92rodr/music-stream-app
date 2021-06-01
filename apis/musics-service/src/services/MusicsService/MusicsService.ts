// prettier-ignore
import {
  AddViewRequest,
  CreateMusicRequest,
  DeleteMusicRequest,
  GetMostViewsMusicsRequest,
  GetMusicRequest,
  UpdateMusicRequest,
} from './dtos';
import IMusicsService from './interface';
import { ErrorMusicNotFound } from '@constants/errors';
import Music from '@entities/Music';
import IIdProvider from '@providers/IdProvider/interface';
import IMusicsRepository from '@repositories/MusicsRepository/interface';

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

  public async getAll(): Promise<Array<Music>> {
    const musics = await this.musicsRepository.findAll();

    return musics;
  }

  public async create({ title, durationInSeconds, file, composers, lyrics, albumId, artistId }: CreateMusicRequest): Promise<Music> {
    const music = new Music({
      id: this.idProvider.generate(),
      title,
      durationInSeconds,
      file,
      composers,
      lyrics,
      albumId,
      artistId,
      views: 0,
    });

    await this.musicsRepository.store(music);

    return music;
  }

  public async update({ id, title, durationInSeconds, file, composers, lyrics, albumId, artistId }: UpdateMusicRequest): Promise<Music> {
    const music = await this.musicsRepository.find(id);

    if (!music) {
      throw new ErrorMusicNotFound(id);
    }

    if (composers) {
      composers.forEach(composer => {
        if (!music.composers.includes(composer)) {
          music.composers.push(composer);
        }
      });
    }

    const newMusic = new Music({
      id,
      title: title ? title : music.title,
      durationInSeconds: durationInSeconds ? durationInSeconds : music.durationInSeconds,
      file: file ? file : music.file,
      composers: music.composers,
      lyrics: lyrics ? lyrics : music.lyrics,
      albumId: albumId ? albumId : music.albumId,
      artistId: artistId ? artistId : music.artistId,
      views: music.views,
    });

    await this.musicsRepository.update(newMusic);

    return newMusic;
  }

  public async delete({ id }: DeleteMusicRequest): Promise<void> {
    await this.musicsRepository.delete(id);
  }

  public async addView({ id }: AddViewRequest): Promise<Music> {
    const music = await this.musicsRepository.find(id);

    if (!music) {
      throw new ErrorMusicNotFound(id);
    }

    music.addView();

    await this.musicsRepository.update(music);

    return music;
  }

  public async getMostViews({ limit, offset }: GetMostViewsMusicsRequest): Promise<Array<Music>> {
    return this.musicsRepository.findMostViews({ limit, offset });
  }
}
