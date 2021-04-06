import { Request, Response } from 'express';

import { HttpStatusCode } from '@constants/index';
import BaseError from '@constants/BaseError';
import { InternalError } from '@constants/errors';
import IMusicsIntegration from '@integrations/MusicsIntegration/interface';

export default class AlbumsController {
  private musicsIntegration: IMusicsIntegration;

  constructor(musicsIntegration: IMusicsIntegration) {
    this.musicsIntegration = musicsIntegration;
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const album = await this.musicsIntegration.getAlbum({ id });

      return response.status(HttpStatusCode.OK).json(album);

      //
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }

  public async create(request: Request, response: Response) {
    const { name, releaseDate, cover, studio, producers, artistId } = request.body;

    try {
      const album = await this.musicsIntegration.createAlbum({ name, releaseDate, cover, studio, producers, artistId });

      return response.status(HttpStatusCode.CREATED).json(album);

      //
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
    const { name, releaseDate, cover, studio, producers, artistId } = request.body;

    try {
      const album = await this.musicsIntegration.updateAlbum({ id, name, releaseDate, cover, studio, producers, artistId });

      return response.status(HttpStatusCode.OK).json(album);

      //
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

      //
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }
}
