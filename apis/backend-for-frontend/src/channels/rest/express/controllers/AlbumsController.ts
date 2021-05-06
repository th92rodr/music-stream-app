import { Request, Response } from 'express';

import { translateAlbum } from './translators';
import Validator from '@channels/rest/middlewares/Validator';
import { HttpStatusCode } from '@constants/index';
import BaseError from '@constants/BaseError';
import { InternalError } from '@constants/errors';
import IMusicsIntegration from '@integrations/MusicsIntegration/interface';
import { newDate } from '@utils/index';

export default class AlbumsController {
  private musicsIntegration: IMusicsIntegration;
  private validator: Validator;

  constructor(musicsIntegration: IMusicsIntegration, validator: Validator) {
    this.musicsIntegration = musicsIntegration;
    this.validator = validator;
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const album = await this.musicsIntegration.getAlbum({ id });

      return response.status(HttpStatusCode.OK).json(translateAlbum(album));
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }

  public async create(request: Request, response: Response) {
    const errors = this.validator.validateCreateAlbumRequest(request.body);
    if (errors.length > 0) {
      return response.status(HttpStatusCode.BAD_REQUEST).json({ errors });
    }

    const { name, release_date: releaseDate, cover, studio, producers, artist_id: artistId } = request.body;

    try {
      const album = await this.musicsIntegration.createAlbum({
        name,
        releaseDate: newDate(releaseDate),
        cover,
        studio,
        producers,
        artistId,
      });

      return response.status(HttpStatusCode.CREATED).json(translateAlbum(album));
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }

  public async update(request: Request, response: Response) {
    const errors = this.validator.validateUpdateAlbumRequest(request.body);
    if (errors.length > 0) {
      return response.status(HttpStatusCode.BAD_REQUEST).json({ errors });
    }

    const { id } = request.params;
    const { name, release_date: releaseDate, cover, studio, producers, artist_id: artistId } = request.body;

    try {
      const album = await this.musicsIntegration.updateAlbum({
        id,
        name,
        releaseDate: releaseDate ? newDate(releaseDate) : undefined,
        cover,
        studio,
        producers,
        artistId,
      });

      return response.status(HttpStatusCode.OK).json(translateAlbum(album));
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
      await this.musicsIntegration.deleteAlbum({ id });

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
