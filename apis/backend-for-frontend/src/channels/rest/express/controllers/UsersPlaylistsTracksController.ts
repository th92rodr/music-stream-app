import { Request, Response } from 'express';

import Validator from '@channels/rest/middlewares/Validator';
import { HttpStatusCode } from '@constants/index';
import BaseError from '@constants/BaseError';
import { InternalError } from '@constants/errors';
import IPlaylistsIntegration from '@integrations/PlaylistsIntegration/interface';

export default class UsersPlaylistsTracksController {
  private playlistsIntegration: IPlaylistsIntegration;
  private validator: Validator;

  constructor(playlistsIntegration: IPlaylistsIntegration, validator: Validator) {
    this.playlistsIntegration = playlistsIntegration;
    this.validator = validator;
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const errors = this.validator.validateCreatePlaylistTrackRequest(request.body);
    if (errors.length > 0) {
      return response.status(HttpStatusCode.BAD_REQUEST).json({ errors });
    }

    const userId = request.userId;
    const { playlistId } = request.params;
    const { musicId } = request.body;

    try {
      const track = await this.playlistsIntegration.addTrack({ musicId, playlistId, userId });

      return response.status(HttpStatusCode.CREATED).json(track);
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const errors = this.validator.validateUpdatePlaylistTrackRequest(request.body);
    if (errors.length > 0) {
      return response.status(HttpStatusCode.BAD_REQUEST).json({ errors });
    }

    const userId = request.userId;
    const { id, playlistId } = request.params;
    const { index } = request.body;

    try {
      const track = await this.playlistsIntegration.updateTrack({ id, index, playlistId, userId });

      return response.status(HttpStatusCode.OK).json(track);
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const userId = request.userId;
    const { id, playlistId } = request.params;

    try {
      await this.playlistsIntegration.removeTrack({ id, playlistId, userId });

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
