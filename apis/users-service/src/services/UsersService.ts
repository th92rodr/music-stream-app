// prettier-ignore
import {
  GetUserRequest,
  CreateUserRequest,
  UpdateUserRequest,
  DeleteUserRequest,
  AuthenticateUserRequest,
  AuthenticateUserResponse } from './dtos';
import IUsersService from './interface';
import { ErrorUserNotFound, ErrorEmailInUse, ErrorInvalidCredentials } from '@constants/errors';
import User from '@entities/User';
import IdProvider from '@providers/IdProvider/interface';
import HashProvider from '@providers/HashProvider/interface';
import TokenProvider from '@providers/TokenProvider/interface';
import UsersRepository from '@repositories/UsersRepository/interface';

export default class UsersService implements IUsersService {
  private usersRepository: UsersRepository;

  private idProvider: IdProvider;
  private hashProvider: HashProvider;
  private tokenProvider: TokenProvider;

  // prettier-ignore
  constructor(
    usersRepository: UsersRepository,
    idProvider: IdProvider,
    hashProvider: HashProvider,
    tokenProvider: TokenProvider
  ) {
    this.usersRepository = usersRepository;
    this.idProvider = idProvider;
    this.hashProvider = hashProvider;
    this.tokenProvider = tokenProvider;
  }

  public async get({ id }: GetUserRequest): Promise<User> {
    const user = await this.usersRepository.find(id);

    if (!user) {
      throw new ErrorUserNotFound(id, null);
    }

    return user;
  }

  public async create({ username, email, password }: CreateUserRequest): Promise<User> {
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

  public async update({ id, username, email, password }: UpdateUserRequest): Promise<void> {
    await this.usersRepository.update({ id, username, email, password });
  }

  public async delete({ id }: DeleteUserRequest): Promise<void> {
    await this.usersRepository.delete(id);
  }

  public async authenticate({ email, password }: AuthenticateUserRequest): Promise<AuthenticateUserResponse> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new ErrorUserNotFound(null, email);
    }

    const passwordMatched = await this.hashProvider.compare(password, user.password);
    if (!passwordMatched) {
      throw new ErrorInvalidCredentials();
    }

    const token = this.tokenProvider.generate(user.id);

    return { user, token };
  }
}
