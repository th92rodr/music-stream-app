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
    return this.usersRepository.find(id);
  }
}
