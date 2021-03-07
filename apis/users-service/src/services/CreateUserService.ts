import { ErrorEmailInUse } from '@constants/errors';
import User from '@entities/User';
import IdProvider from '@providers/IdProvider/interface';
import HashProvider from '@providers/HashProvider/interface';
import UsersRepository from '@repositories/UsersRepository/interface';

interface Request {
  username: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  private usersRepository: UsersRepository;
  private idProvider: IdProvider;
  private hashProvider: HashProvider;

  constructor(usersRepository: UsersRepository, idProvider: IdProvider, hashProvider: HashProvider) {
    this.usersRepository = usersRepository;
    this.idProvider = idProvider;
    this.hashProvider = hashProvider;
  }

  public async execute({ username, email, password }: Request): Promise<User> {
    const userExists = await this.usersRepository.findByEmail(email);
    if (userExists) {
      throw new ErrorEmailInUse(email);
    }

    const hashedPassword = await this.hashProvider.generate(password);

    const user = new User({
      id: this.idProvider.generate(),
      username,
      email,
      password: hashedPassword,
    });

    await this.usersRepository.store(user);

    return user;
  }
}
