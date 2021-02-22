import { Request, Response } from 'express';

import CreateUserService from '../../../../services/CreateUserService';
import GetUserService from '../../../../services/GetUserService';
import UpdateUserService from '../../../../services/UpdateUserService';
import DeleteUserService from '../../../../services/DeleteUserService';

export default class UsersController {
  private createUserService: CreateUserService;
  private getUserService: GetUserService;
  private updateUserService: UpdateUserService;
  private deleteUserService: DeleteUserService;

  constructor() {
    this.createUserService = new CreateUserService();
    this.getUserService = new GetUserService();
    this.updateUserService = new UpdateUserService();
    this.deleteUserService = new DeleteUserService();
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

  public async update(request: Request, response: Response): Promise<Response> {
    const id = request.user.id;
    const { username, email, password } = request.body;

    const user = await this.updateUserService.execute({
      id,
      username,
      email,
      password,
    });

    return response.json(user);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const id = request.user.id;

    await this.deleteUserService.execute({ id });

    return response.send();
  }
}
