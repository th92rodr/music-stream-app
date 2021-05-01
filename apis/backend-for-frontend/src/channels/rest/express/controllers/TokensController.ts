import { Request, Response } from 'express';

import Validator from '@channels/rest/middlewares/Validator';
import { HttpStatusCode } from '@constants/index';
import BaseError from '@constants/BaseError';
import { InternalError } from '@constants/errors';
import IUsersIntegration from '@integrations/UsersIntegration/interface';

export default class TokensController {
  private usersIntegration: IUsersIntegration;
  private validator: Validator;

  constructor(usersIntegration: IUsersIntegration, validator: Validator) {
    this.usersIntegration = usersIntegration;
    this.validator = validator;
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const errors = this.validator.validateCreateTokenRequest(request.body);
    if (errors.length > 0) {
      return response.status(HttpStatusCode.BAD_REQUEST).json({ errors });
    }

    const { email, password } = request.body;

    try {
      const { token, user } = await this.usersIntegration.authenticateUser({ email, password });

      return response.status(HttpStatusCode.OK).json({ token, user });
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }
}
