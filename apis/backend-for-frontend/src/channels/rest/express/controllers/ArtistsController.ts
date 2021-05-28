import { Request, Response } from 'express';

import { translateArtist, translateArtists } from './translators';
import Validator from '@channels/rest/middlewares/Validator';
import { Genre, HttpStatusCode } from '@constants/index';
import BaseError from '@constants/BaseError';
import { InternalError } from '@constants/errors';
import IMusicsIntegration from '@integrations/MusicsIntegration/interface';
import { newDate } from '@utils/index';

export default class ArtistsController {
  private musicsIntegration: IMusicsIntegration;
  private validator: Validator;

  constructor(musicsIntegration: IMusicsIntegration, validator: Validator) {
    this.musicsIntegration = musicsIntegration;
    this.validator = validator;
  }

  public async index(request: Request, response: Response) {
    try {
      const artists = await this.musicsIntegration.getArtists();

      return response.status(HttpStatusCode.OK).json(translateArtists(artists));
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const artist = await this.musicsIntegration.getArtist({ id });

      return response.status(HttpStatusCode.OK).json(translateArtist(artist));
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }

  public async create(request: Request, response: Response) {
    const errors = this.validator.validateCreateArtistRequest(request.body);
    if (errors.length > 0) {
      return response.status(HttpStatusCode.BAD_REQUEST).json({ errors });
    }

    const {
      name,
      country,
      foundation_date: foundationDate,
      members,
      description,
      genre,
      photos,
      facebook_url: facebookUrl,
      twitter_url: twitterUrl,
      instagram_url: instagramUrl,
      wikipedia_url: wikipediaUrl,
      font,
    } = request.body;

    try {
      const artist = await this.musicsIntegration.createArtist({
        name,
        country,
        foundationDate: newDate(foundationDate),
        members,
        description,
        genre: Genre[genre],
        photos,
        facebookUrl,
        twitterUrl,
        instagramUrl,
        wikipediaUrl,
        font,
      });

      return response.status(HttpStatusCode.CREATED).json(translateArtist(artist));
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }

  public async update(request: Request, response: Response) {
    const errors = this.validator.validateUpdateArtistRequest(request.body);
    if (errors.length > 0) {
      return response.status(HttpStatusCode.BAD_REQUEST).json({ errors });
    }

    const { id } = request.params;
    const {
      name,
      country,
      foundation_date: foundationDate,
      members,
      description,
      genre,
      photos,
      facebook_url: facebookUrl,
      twitter_url: twitterUrl,
      instagram_url: instagramUrl,
      wikipedia_url: wikipediaUrl,
      font,
    } = request.body;

    try {
      const artist = await this.musicsIntegration.updateArtist({
        id,
        name,
        country,
        foundationDate: foundationDate ? newDate(foundationDate) : undefined,
        members,
        description,
        genre: genre ? Genre[genre] : undefined,
        photos,
        facebookUrl,
        twitterUrl,
        instagramUrl,
        wikipediaUrl,
        font,
      });

      return response.status(HttpStatusCode.OK).json(translateArtist(artist));
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    try {
      await this.musicsIntegration.deleteArtist({ id });

      return response.status(HttpStatusCode.OK).send();
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }
}
