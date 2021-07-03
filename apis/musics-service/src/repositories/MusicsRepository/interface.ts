import { PaginationRequest } from './dtos';
import Music from '@entities/Music';

export default interface IMusicsRepository {
  find(id: string): Promise<Music | undefined>;
  findAll(request: PaginationRequest): Promise<Music[]>;
  store(music: Music): Promise<void>;
  update(music: Music): Promise<void>;
  delete(id: string): Promise<void>;
  findMostViewed(request: PaginationRequest): Promise<Music[]>;
}
