import { Request, Response } from 'express';

import { HttpStatusCode } from '@constants/index';
import BaseError from '@constants/BaseError';
import { InternalError } from '@constants/errors';
import IUsersMusicsIntegration from '@integrations/UsersMusicsIntegration/interface';

export default class MusicsViewsController {
  private usersMusicsIntegration: IUsersMusicsIntegration;

  constructor(usersMusicsIntegration: IUsersMusicsIntegration) {
    this.usersMusicsIntegration = usersMusicsIntegration;
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;
    const userId = request.userId;

    try {
      const views = await this.usersMusicsIntegration.getViews({ musicId: id, userId });

      return response.status(HttpStatusCode.OK).json(views);
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
      const view = await this.usersMusicsIntegration.viewMusic({ musicId: id, userId });

      return response.status(HttpStatusCode.CREATED).json(view);
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }
}
