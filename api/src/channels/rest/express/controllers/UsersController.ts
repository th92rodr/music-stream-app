import { Request, Response } from 'express';

import CreateUserService from '../../../../services/CreateUserService';

export default class UsersController {
  private createUserService: CreateUserService;

  constructor() {
    this.createUserService = new CreateUserService();
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { username, email, password } = request.body;

    const user = await this.createUserService.execute({
      username,
      email,
      password,
    });

    return response.json(user);
  }
}
