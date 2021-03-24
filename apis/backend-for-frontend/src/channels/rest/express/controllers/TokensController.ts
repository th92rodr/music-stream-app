import { Request, Response } from 'express';

import { HttpStatusCode } from '@constants/index';
import BaseError from '@constants/BaseError';
import { InternalError } from '@constants/errors';
import IUsersIntegration from '@integrations/UsersIntegration/interface';

export default class TokensController {
  private usersIntegration: IUsersIntegration;

  constructor(usersIntegration: IUsersIntegration) {
    this.usersIntegration = usersIntegration;
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    try {
      const { token, user } = await this.usersIntegration.authenticateUser({ email, password });

      return response.status(HttpStatusCode.OK).json({ token, user });

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
