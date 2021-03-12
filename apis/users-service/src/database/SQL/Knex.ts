import knex from 'knex';

import IDatabase from './interface';
import Config from '@config/index';
import ILoggerProvider from '@providers/LoggerProvider/interface';

export default class KnexDatabase implements IDatabase {
  private connection: knex;
  private loggerProvider: ILoggerProvider;

  constructor(loggerProvider: ILoggerProvider) {
    this.connection = knex({
      client: 'pg',
      connection: Config.database.postgres.address,
      useNullAsDefault: true,
    });

    // prettier-ignore
    this.connection.raw('select 1+1 as result')
      .catch((error: Error) => { throw error; });

    this.loggerProvider = loggerProvider;
  }

  public getConnection(): knex {
    return this.connection;
  }

  public async close(): Promise<void> {
    this.loggerProvider.info('Closing database connection ...');
    return new Promise((resolve, reject) => {
      this.connection.destroy(() => {
        this.loggerProvider.info('Database connection closed.');
        resolve();
      });
    });
  }
}
