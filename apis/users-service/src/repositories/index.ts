import SQLUsersRepository from './UsersRepository/SQLUsersRepository';

import { database } from '@database/index';

const dbConnection = database.getConnection();

export const usersRepository = new SQLUsersRepository(dbConnection);
