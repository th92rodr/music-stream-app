import { Request, Response } from 'express';

import { HttpStatusCode } from '@constants/index';
import BaseError from '@constants/BaseError';
import { InternalError } from '@constants/errors';
import IUsersIntegration from '@integrations/UsersIntegration/interface';

export default class UsersController {
  private usersIntegration: IUsersIntegration;

  constructor(usersIntegration: IUsersIntegration) {
    this.usersIntegration = usersIntegration;
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const id = request.userId;

    try {
      const user = await this.usersIntegration.getUser(id);
      return response.status(HttpStatusCode.OK).json(user);

      //
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { username, email, password } = request.body;

    try {
      const user = await this.usersIntegration.createUser({ username, email, password });
      return response.status(HttpStatusCode.CREATED).json(user);

      //
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const id = request.userId;
    const { username, email, password } = request.body;

    try {
      const user = await this.usersIntegration.updateUser({ id, username, email, password });
      return response.status(HttpStatusCode.OK).json(user);

      //
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const id = request.userId;

    try {
      await this.usersIntegration.deleteUser(id);
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
