import { Request, Response } from 'express';

import CreateUserService from '../../../../services/CreateUserService';
import GetUserService from '../../../../services/GetUserService';

export default class UsersController {
  private createUserService: CreateUserService;
  private getUserService: GetUserService;

  constructor() {
    this.createUserService = new CreateUserService();
    this.getUserService = new GetUserService();
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

  public async show(request: Request, response: Response): Promise<Response> {
    const id = request.user.id;

    const user = await this.getUserService.execute({ id });

    return response.json(user);
  }
}
