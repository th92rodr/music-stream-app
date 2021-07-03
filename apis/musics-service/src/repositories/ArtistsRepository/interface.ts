import { PaginationRequest } from './dtos';
import Artist from '@entities/Artist';

export default interface IArtistsRepository {
  find(id: string): Promise<Artist | undefined>;
  findAll(request: PaginationRequest): Promise<Artist[]>;
  findByGenre(genre: number, request: PaginationRequest): Promise<Artist[]>;
  store(artist: Artist): Promise<void>;
  update(artist: Artist): Promise<void>;
  delete(id: string): Promise<void>;
  findMostFollowed(paginationRequest: PaginationRequest): Promise<Artist[]>;
}
