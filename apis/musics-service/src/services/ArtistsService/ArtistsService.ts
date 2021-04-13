// prettier-ignore
import {
  GetArtistRequest,
  GetArtistByGenreRequest,
  CreateArtistRequest,
  UpdateArtistRequest,
  DeleteArtistRequest,
  AddFavoriteRequest,
  RemoveFavoriteRequest,
  AddFollowerRequest,
  RemoveFollowerRequest,
} from './dtos';
import IArtistsService from './interface';
import { ErrorArtistNotFound } from '@constants/errors';
import Artist from '@entities/Artist';
import IIdProvider from '@providers/IdProvider/interface';
import IArtistsRepository from '@repositories/ArtistsRepository/interface';
import { arrayIntersection } from '@utils/index';

export default class ArtistsService implements IArtistsService {
  private artistsRepository: IArtistsRepository;
  private idProvider: IIdProvider;

  // prettier-ignore
  constructor(
    artistsRepository: IArtistsRepository,
    idProvider: IIdProvider,
  ) {
    this.artistsRepository = artistsRepository;
    this.idProvider = idProvider;
  }

  public async get({ id }: GetArtistRequest): Promise<Artist> {
    const artist = await this.artistsRepository.find(id);

    if (!artist) {
      throw new ErrorArtistNotFound(id);
    }

    return artist;
  }

  public async getAll(): Promise<Array<Artist>> {
    const artists = await this.artistsRepository.findAll();

    return artists;
  }

  public async getByGenre({ genre }: GetArtistByGenreRequest): Promise<Array<Artist>> {
    const artists = await this.artistsRepository.findByGenre(genre);

    return artists;
  }

  public async create({ name, country, foundationDate, members, description, genre, photos, facebookUrl, twitterUrl, instagramUrl, wikipediaUrl }: CreateArtistRequest): Promise<Artist> {
    const artist = new Artist({
      id: this.idProvider.generate(),
      name,
      country,
      foundationDate,
      members,
      description,
      genre,
      photos,
      facebookUrl,
      twitterUrl,
      instagramUrl,
      wikipediaUrl,
      favorites: 0,
      followers: 0,
    });

    await this.artistsRepository.store(artist);

    return artist;
  }

  public async update({ id, name, country, foundationDate, members, description, genre, photos, facebookUrl, twitterUrl, instagramUrl, wikipediaUrl }: UpdateArtistRequest): Promise<Artist> {
    const artist = await this.artistsRepository.find(id);

    if (!artist) {
      throw new ErrorArtistNotFound(id);
    }

    const newArtist = new Artist({
      id,
      name: name ? name : artist.name,
      country: country ? country : artist.country,
      foundationDate: foundationDate ? foundationDate : artist.foundationDate,
      members: members ? arrayIntersection(members, artist.members) : artist.members,
      description: description ? description : artist.description,
      genre: genre ? genre : artist.genre,
      photos: photos ? arrayIntersection(photos, artist.photos) : artist.photos,
      facebookUrl: facebookUrl ? facebookUrl : artist.facebookUrl,
      twitterUrl: twitterUrl ? twitterUrl : artist.twitterUrl,
      instagramUrl: instagramUrl ? instagramUrl : artist.instagramUrl,
      wikipediaUrl: wikipediaUrl ? wikipediaUrl : artist.wikipediaUrl,
      favorites: artist.favorites,
      followers: artist.followers,
    });

    await this.artistsRepository.update(newArtist);

    return newArtist;
  }

  public async delete({ id }: DeleteArtistRequest): Promise<void> {
    await this.artistsRepository.delete(id);
  }

  public async addFavorite({ id }: AddFavoriteRequest): Promise<Artist> {
    const artist = await this.artistsRepository.find(id);

    if (!artist) {
      throw new ErrorArtistNotFound(id);
    }

    artist.addFavorite();

    await this.artistsRepository.update(artist);

    return artist;
  }

  public async removeFavorite({ id }: RemoveFavoriteRequest): Promise<Artist> {
    const artist = await this.artistsRepository.find(id);

    if (!artist) {
      throw new ErrorArtistNotFound(id);
    }

    artist.removeFavorite();

    await this.artistsRepository.update(artist);

    return artist;
  }

  public async addFollower({ id }: AddFollowerRequest): Promise<Artist> {
    const artist = await this.artistsRepository.find(id);

    if (!artist) {
      throw new ErrorArtistNotFound(id);
    }

    artist.addFollower();

    await this.artistsRepository.update(artist);

    return artist;
  }

  public async removeFollower({ id }: RemoveFollowerRequest): Promise<Artist> {
    const artist = await this.artistsRepository.find(id);

    if (!artist) {
      throw new ErrorArtistNotFound(id);
    }

    artist.removeFollower();

    await this.artistsRepository.update(artist);

    return artist;
  }
}
