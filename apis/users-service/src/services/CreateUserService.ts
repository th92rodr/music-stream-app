import User from '@entities/User';
import UsersRepository from '@repositories/UsersRepository/interface';
import IdProvider from '@providers/IdProvider/interface';
import HashProvider from '@providers/HashProvider/interface';

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
      throw new Error();
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
