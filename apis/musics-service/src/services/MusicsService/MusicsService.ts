import { CreateMusicRequest, DeleteMusicRequest, GetMostViewedMusicsRequest, GetMusicRequest, UpdateMusicRequest, ViewMusicRequest } from './dtos';
import IMusicsService from './interface';
import { ErrorMusicNotFound } from '@constants/errors';
import Music from '@entities/Music';
import IIdProvider from '@providers/IdProvider/interface';
import IMusicsRepository from '@repositories/MusicsRepository/interface';

export default class MusicsService implements IMusicsService {
  private idProvider: IIdProvider;
  private musicsRepository: IMusicsRepository;

  constructor(musicsRepository: IMusicsRepository, idProvider: IIdProvider) {
    this.idProvider = idProvider;
    this.musicsRepository = musicsRepository;
  }

  public async get({ id }: GetMusicRequest): Promise<Music> {
    const music = await this.musicsRepository.find(id);

    if (!music) {
      throw new ErrorMusicNotFound(id);
    }

    return music;
  }

  public async getAll(): Promise<Music[]> {
    return this.musicsRepository.findAll();
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

  public async view({ id }: ViewMusicRequest): Promise<Music> {
    const music = await this.musicsRepository.find(id);

    if (!music) {
      throw new ErrorMusicNotFound(id);
    }

    music.view();

    await this.musicsRepository.update(music);

    return music;
  }

  public async getMostViewed({ limit, offset }: GetMostViewedMusicsRequest): Promise<Music[]> {
    return this.musicsRepository.findMostViewed({ limit, offset });
  }
}
