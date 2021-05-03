import { Request, Response } from 'express';

import { translatePlaylist, translatePlaylists } from './translators';
import Validator from '@channels/rest/middlewares/Validator';
import { HttpStatusCode } from '@constants/index';
import BaseError from '@constants/BaseError';
import { InternalError } from '@constants/errors';
import IPlaylistsIntegration from '@integrations/PlaylistsIntegration/interface';

export default class UsersPlaylistsController {
  private playlistsIntegration: IPlaylistsIntegration;
  private validator: Validator;

  constructor(playlistsIntegration: IPlaylistsIntegration, validator: Validator) {
    this.playlistsIntegration = playlistsIntegration;
    this.validator = validator;
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const userId = request.userId;

    try {
      const playlists = await this.playlistsIntegration.getPlaylists({ userId });

      return response.status(HttpStatusCode.OK).json(translatePlaylists(playlists));
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const userId = request.userId;
    const { id } = request.params;

    try {
      const playlist = await this.playlistsIntegration.getPlaylist({ id, userId });

      return response.status(HttpStatusCode.OK).json(translatePlaylist(playlist));
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const errors = this.validator.validateCreatePlaylistRequest(request.body);
    if (errors.length > 0) {
      return response.status(HttpStatusCode.BAD_REQUEST).json({ errors });
    }

    const userId = request.userId;
    const { name } = request.body;

    try {
      const playlist = await this.playlistsIntegration.createPlaylist({ name, userId });

      return response.status(HttpStatusCode.CREATED).json(translatePlaylist(playlist));
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const userId = request.userId;
    const { id } = request.params;
    const { name } = request.body;

    try {
      const playlist = await this.playlistsIntegration.updatePlaylist({ id, userId, name });

      return response.status(HttpStatusCode.OK).json(translatePlaylist(playlist));
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
    const { id } = request.params;

    try {
      await this.playlistsIntegration.deletePlaylist({ id, userId });

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
