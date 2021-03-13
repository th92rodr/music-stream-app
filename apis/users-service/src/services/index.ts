import UsersService from './UsersService/UsersService';

import { hashProvider, idProvider, tokenProvider } from '@providers/index';
import { usersRepository } from '@repositories/index';

export const usersService = new UsersService(usersRepository, hashProvider, idProvider, tokenProvider);
