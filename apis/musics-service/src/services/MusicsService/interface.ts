import { GetMusicRequest } from './dtos';
import Music from '@entities/Music';

export default interface IMusicsService {
  get(request: GetMusicRequest): Promise<Music>;
  create(request: any): Promise<void>;
  update(request: any): Promise<void>;
  delete(request: any): Promise<void>;
}
