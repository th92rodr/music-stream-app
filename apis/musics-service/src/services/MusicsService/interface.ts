// prettier-ignore
import {
  GetMusicRequest,
  CreateMusicRequest,
  UpdateMusicRequest,
  DeleteMusicRequest
} from './dtos';
import Music from '@entities/Music';

export default interface IMusicsService {
  get(request: GetMusicRequest): Promise<Music>;
  getAll(): Promise<Array<Music>>;
  create(request: CreateMusicRequest): Promise<Music>;
  update(request: UpdateMusicRequest): Promise<Music>;
  delete(request: DeleteMusicRequest): Promise<void>;
}
