import User from '@entities/User';
import UsersRepository from '@repositories/UsersRepository/interface';
import HashProvider from '@providers/HashProvider/interface';
import TokenProvider from '@providers/TokenProvider/interface';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

export default class AuthenticateUserService {
  private usersRepository: UsersRepository;
  private hashProvider: HashProvider;
  private tokenProvider: TokenProvider;

  constructor(usersRepository: UsersRepository, hashProvider: HashProvider, tokenProvider: TokenProvider) {
    this.usersRepository = usersRepository;
    this.hashProvider = hashProvider;
    this.tokenProvider = tokenProvider;
  }

  public async execute({ email, password }: Request): Promise<Response> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new Error();
    }

    const passwordMatched = await this.hashProvider.compare(password, user.password);
    if (!passwordMatched) {
      throw new Error();
    }

    const token = this.tokenProvider.generate(user.id);

    return { user, token };
  }
}
