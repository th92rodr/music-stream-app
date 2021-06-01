import { PaginationRequest } from './dtos';
import Artist from '@entities/Artist';

export default interface IArtistsRepository {
  find(id: string): Promise<Artist | undefined>;
  findAll(request?: PaginationRequest): Promise<Array<Artist>>;
  findByGenre(genre: number): Promise<Array<Artist>>;
  store(artist: Artist): Promise<void>;
  update(artist: Artist): Promise<void>;
  delete(id: string): Promise<void>;
  findMostFollowers(paginationRequest: PaginationRequest): Promise<Array<Artist>>;
}
