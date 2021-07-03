import { Request, Response } from 'express';

import Config from '@config/index';
import { HttpStatusCode } from '@constants/index';
import BaseError from '@constants/BaseError';
import { InternalError } from '@constants/errors';
import IMusicsIntegration from '@integrations/MusicsIntegration/interface';

export default class TrendingController {
  private musicsIntegration: IMusicsIntegration;

  constructor(musicsIntegration: IMusicsIntegration) {
    this.musicsIntegration = musicsIntegration;
  }

  public async show(request: Request, response: Response) {
    const { limit, offset } = request.query;

    try {
      switch (request.url) {
        case '/musics':
          const musics = await this.musicsIntegration.getMostViewedMusics({
            limit: limit ? Number(limit) : Config.query.defaultLimit,
            offset: offset ? Number(offset) : Config.query.defaultOffset,
          });

          return response.status(HttpStatusCode.OK).json(musics);
        case '/artists':
          const artists = await this.musicsIntegration.getMostFollowedArtists({
            limit: limit ? Number(limit) : Config.query.defaultLimit,
            offset: offset ? Number(offset) : Config.query.defaultOffset,
          });

          return response.status(HttpStatusCode.OK).json(artists);
      }
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }
}
