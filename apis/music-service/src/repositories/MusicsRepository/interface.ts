import Music from '@entities/Music';

export default interface MusicsRepository {
  find(id: string): Promise<Music>;
  store(music: Music): Promise<void>;
  update(music: Music): Promise<Music>;
  delete(id: string): Promise<void>;
}
