import { Request, Response } from 'express';

import { HttpStatusCode } from '@constants/index';
import BaseError from '@constants/BaseError';
import { InternalError } from '@constants/errors';
import IUsersMusicsIntegration from '@integrations/UsersMusicsIntegration/interface';

export default class ArtistsFollowersController {
  private usersMusicsIntegration: IUsersMusicsIntegration;

  constructor(usersMusicsIntegration: IUsersMusicsIntegration) {
    this.usersMusicsIntegration = usersMusicsIntegration;
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const userId = request.userId;

    try {
      const followingArtists = await this.usersMusicsIntegration.getAllFollowingArtists({ userId });

      return response.status(HttpStatusCode.OK).json(followingArtists);
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
    const userId = request.userId;

    try {
      const isFollowingArtist = await this.usersMusicsIntegration.getFollowingArtist({ artistId: id, userId });

      return response.status(HttpStatusCode.OK).json(isFollowingArtist);
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }

  public async create(request: Request, response: Response) {
    const { id } = request.params;
    const userId = request.userId;

    try {
      await this.usersMusicsIntegration.followArtist({ artistId: id, userId });

      return response.status(HttpStatusCode.OK).send();
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const userId = request.userId;

    try {
      await this.usersMusicsIntegration.unfollowArtist({ artistId: id, userId });

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
