import User from '@entities/User';
import UsersRepository from '@repositories/UsersRepository/interface';

interface Request {
  id: string;
  username: string;
  email: string;
  password: string;
}

export default class UpdateUserService {
  private usersRepository: UsersRepository;

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute({ id, username, email, password }: Request): Promise<User> {
    return this.usersRepository.update({ id, username, email, password });
  }
}
