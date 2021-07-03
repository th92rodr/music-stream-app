import {
  CreateArtistRequest,
  DeleteArtistRequest,
  FavoriteArtistRequest,
  FollowArtistRequest,
  GetAllArtistsRequest,
  GetArtistsByGenreRequest,
  GetArtistRequest,
  GetMostFollowedArtistsRequest,
  UnfavoriteArtistRequest,
  UnfollowArtistRequest,
  UpdateArtistRequest,
} from './dtos';
import IArtistsService from './interface';
import { ErrorArtistNotFound } from '@constants/errors';
import Artist from '@entities/Artist';
import IIdProvider from '@providers/IdProvider/interface';
import IArtistsRepository from '@repositories/ArtistsRepository/interface';
import IMusicsRepository from '@repositories/MusicsRepository/interface';

export default class ArtistsService implements IArtistsService {
  private artistsRepository: IArtistsRepository;
  private idProvider: IIdProvider;
  private musicsRepository: IMusicsRepository;

  constructor(artistsRepository: IArtistsRepository, musicsRepository: IMusicsRepository, idProvider: IIdProvider) {
    this.artistsRepository = artistsRepository;
    this.idProvider = idProvider;
    this.musicsRepository = musicsRepository;
  }

  public async get({ id }: GetArtistRequest): Promise<Artist> {
    const artist = await this.artistsRepository.find(id);

    if (!artist) {
      throw new ErrorArtistNotFound(id);
    }

    const musics = await this.musicsRepository.findMostViewedByArtist(id, { limit: 5, offset: 0 });

    artist.setPopularTracks(musics);

    return artist;
  }

  public async getAll({ limit, offset }: GetAllArtistsRequest): Promise<Artist[]> {
    return this.artistsRepository.findAll({ limit, offset });
  }

  public async getByGenre({ genre, limit, offset }: GetArtistsByGenreRequest): Promise<Artist[]> {
    return this.artistsRepository.findByGenre(genre, { limit, offset });
  }

  public async create({ name, country, foundationDate, members, description, genre, photos, facebookUrl, twitterUrl, instagramUrl, wikipediaUrl, font }: CreateArtistRequest): Promise<Artist> {
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
      font,
      favorites: 0,
      followers: 0,
    });

    await this.artistsRepository.store(artist);

    return artist;
  }

  public async update({ id, name, country, foundationDate, members, description, genre, photos, facebookUrl, twitterUrl, instagramUrl, wikipediaUrl, font }: UpdateArtistRequest): Promise<Artist> {
    const artist = await this.artistsRepository.find(id);

    if (!artist) {
      throw new ErrorArtistNotFound(id);
    }

    if (members) {
      members.forEach(member => {
        if (!artist.members.includes(member)) {
          artist.members.push(member);
        }
      });
    }

    if (photos) {
      photos.forEach(photo => {
        if (!artist.photos.includes(photo)) {
          artist.photos.push(photo);
        }
      });
    }

    const newArtist = new Artist({
      id,
      name: name ? name : artist.name,
      country: country ? country : artist.country,
      foundationDate: foundationDate ? foundationDate : artist.foundationDate,
      members: artist.members,
      description: description ? description : artist.description,
      genre: genre ? genre : artist.genre,
      photos: artist.photos,
      facebookUrl: facebookUrl ? facebookUrl : artist.facebookUrl,
      twitterUrl: twitterUrl ? twitterUrl : artist.twitterUrl,
      instagramUrl: instagramUrl ? instagramUrl : artist.instagramUrl,
      wikipediaUrl: wikipediaUrl ? wikipediaUrl : artist.wikipediaUrl,
      font: font ? font : artist.font,
      favorites: artist.favorites,
      followers: artist.followers,
    });

    await this.artistsRepository.update(newArtist);

    return newArtist;
  }

  public async delete({ id }: DeleteArtistRequest): Promise<void> {
    await this.artistsRepository.delete(id);
  }

  public async favorite({ id }: FavoriteArtistRequest): Promise<Artist> {
    const artist = await this.artistsRepository.find(id);

    if (!artist) {
      throw new ErrorArtistNotFound(id);
    }

    artist.favorite();

    await this.artistsRepository.update(artist);

    return artist;
  }

  public async unfavorite({ id }: UnfavoriteArtistRequest): Promise<Artist> {
    const artist = await this.artistsRepository.find(id);

    if (!artist) {
      throw new ErrorArtistNotFound(id);
    }

    artist.unfavorite();

    await this.artistsRepository.update(artist);

    return artist;
  }

  public async follow({ id }: FollowArtistRequest): Promise<Artist> {
    const artist = await this.artistsRepository.find(id);

    if (!artist) {
      throw new ErrorArtistNotFound(id);
    }

    artist.follow();

    await this.artistsRepository.update(artist);

    return artist;
  }

  public async unfollow({ id }: UnfollowArtistRequest): Promise<Artist> {
    const artist = await this.artistsRepository.find(id);

    if (!artist) {
      throw new ErrorArtistNotFound(id);
    }

    artist.unfollow();

    await this.artistsRepository.update(artist);

    return artist;
  }

  public async getMostFollowed({ limit, offset }: GetMostFollowedArtistsRequest): Promise<Artist[]> {
    return this.artistsRepository.findMostFollowed({ limit, offset });
  }
}
