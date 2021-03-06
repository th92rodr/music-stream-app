import { ErrorUserNotFound } from '@constants/errors';
import User from '@entities/User';
import UsersRepository from '@repositories/UsersRepository/interface';

interface Request {
  id: string;
}

export default class GetUserService {
  private usersRepository: UsersRepository;

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute({ id }: Request): Promise<User> {
    const user = await this.usersRepository.find(id);

    if (!user) {
      throw new ErrorUserNotFound(id, null);
    }

    return user;
  }
}
