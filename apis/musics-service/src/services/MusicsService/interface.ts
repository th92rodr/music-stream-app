import { CreateMusicRequest, DeleteMusicRequest, GetAllMusicsRequest, GetMostViewedMusicsRequest, GetMusicRequest, UpdateMusicRequest, ViewMusicRequest } from './dtos';
import Music from '@entities/Music';

export default interface IMusicsService {
  get(request: GetMusicRequest): Promise<Music>;
  getAll(request: GetAllMusicsRequest): Promise<Music[]>;
  create(request: CreateMusicRequest): Promise<Music>;
  update(request: UpdateMusicRequest): Promise<Music>;
  delete(request: DeleteMusicRequest): Promise<void>;
  view(request: ViewMusicRequest): Promise<Music>;
  getMostViewed(request: GetMostViewedMusicsRequest): Promise<Music[]>;
}
