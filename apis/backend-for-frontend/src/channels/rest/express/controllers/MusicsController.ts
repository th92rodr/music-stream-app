import { Request, Response } from 'express';

import { translateMusic } from './translators';
import Validator from '@channels/rest/middlewares/Validator';
import { HttpStatusCode } from '@constants/index';
import BaseError from '@constants/BaseError';
import { InternalError } from '@constants/errors';
import IMusicsIntegration from '@integrations/MusicsIntegration/interface';

export default class MusicsController {
  private musicsIntegration: IMusicsIntegration;
  private validator: Validator;

  constructor(musicsIntegration: IMusicsIntegration, validator: Validator) {
    this.musicsIntegration = musicsIntegration;
    this.validator = validator;
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const music = await this.musicsIntegration.getMusic({ id });

      return response.status(HttpStatusCode.OK).json(translateMusic(music));
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }

  public async create(request: Request, response: Response) {
    const errors = this.validator.validateCreateMusicRequest(request.body);
    if (errors.length > 0) {
      return response.status(HttpStatusCode.BAD_REQUEST).json({ errors });
    }

    const { title, duration: durationInSeconds, file, composers, lyrics, album_id: albumId, artist_id: artistId } = request.body;

    try {
      const music = await this.musicsIntegration.createMusic({ title, durationInSeconds, file, composers, lyrics, albumId, artistId });

      return response.status(HttpStatusCode.CREATED).json(translateMusic(music));
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }

  public async update(request: Request, response: Response) {
    const { id } = request.params;
    const { title, duration: durationInSeconds, file, composers, lyrics, album_id: albumId, artist_id: artistId } = request.body;

    try {
      const music = await this.musicsIntegration.updateMusic({ id, title, durationInSeconds, file, composers, lyrics, albumId, artistId });

      return response.status(HttpStatusCode.OK).json(translateMusic(music));
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
      await this.musicsIntegration.deleteMusic({ id });

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
