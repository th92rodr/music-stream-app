import Music from '@entities/Music';

export default interface MusicsRepository {
  find(id: string): Promise<Music | undefined>;
  store(music: Music): Promise<void>;
  update(music: Music): Promise<void>;
  delete(id: string): Promise<void>;
}
