import UsersRepository from '@repositories/UsersRepository/interface';

interface Request {
  id: string;
}

export default class DeleteUserService {
  private usersRepository: UsersRepository;

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute({ id }: Request): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
