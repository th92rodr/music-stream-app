import KnexDatabase from './SQL/Knex';

import { loggerProvider } from '@providers/index';

export const database = new KnexDatabase(loggerProvider);
