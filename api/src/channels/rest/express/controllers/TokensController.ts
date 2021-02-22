import { Request, Response } from 'express';

import AuthenticateUserService from '../../../../services/AuthenticateUserService';

export default class TokensController {
  private authenticateUserService: AuthenticateUserService;

  constructor() {
    this.authenticateUserService = new AuthenticateUserService();
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const { user, token } = await this.authenticateUserService.execute({
      email,
      password,
    });

    return response.json({ user, token });
  }
}
