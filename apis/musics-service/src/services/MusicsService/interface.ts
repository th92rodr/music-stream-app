// prettier-ignore
import {
  GetMusicRequest,
  CreateMusicRequest,
  UpdateMusicRequest,
  DeleteMusicRequest,
  AddViewRequest,
} from './dtos';
import Music from '@entities/Music';

export default interface IMusicsService {
  get(request: GetMusicRequest): Promise<Music>;
  getAll(): Promise<Array<Music>>;
  create(request: CreateMusicRequest): Promise<Music>;
  update(request: UpdateMusicRequest): Promise<Music>;
  delete(request: DeleteMusicRequest): Promise<void>;
  addView(request: AddViewRequest): Promise<Music>;
}
