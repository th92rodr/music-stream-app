// prettier-ignore
import {
  AddViewRequest,
  CreateMusicRequest,
  DeleteMusicRequest,
  GetMostViewsMusicsRequest,
  GetMusicRequest,
  UpdateMusicRequest,
} from './dtos';
import Music from '@entities/Music';

export default interface IMusicsService {
  get(request: GetMusicRequest): Promise<Music>;
  getAll(): Promise<Array<Music>>;
  create(request: CreateMusicRequest): Promise<Music>;
  update(request: UpdateMusicRequest): Promise<Music>;
  delete(request: DeleteMusicRequest): Promise<void>;
  addView(request: AddViewRequest): Promise<Music>;
  getMostViews(request: GetMostViewsMusicsRequest): Promise<Array<Music>>;
}
