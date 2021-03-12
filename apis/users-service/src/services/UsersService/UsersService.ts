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
import IHashProvider from '@providers/HashProvider/interface';
import IIdProvider from '@providers/IdProvider/interface';
import ITokenProvider from '@providers/TokenProvider/interface';
import IUsersRepository from '@repositories/UsersRepository/interface';

export default class UsersService implements IUsersService {
  private usersRepository: IUsersRepository;

  private hashProvider: IHashProvider;
  private idProvider: IIdProvider;
  private tokenProvider: ITokenProvider;

  // prettier-ignore
  constructor(
    usersRepository: IUsersRepository,
    hashProvider: IHashProvider,
    idProvider: IIdProvider,
    tokenProvider: ITokenProvider
  ) {
    this.usersRepository = usersRepository;
    this.hashProvider = hashProvider;
    this.idProvider = idProvider;
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
