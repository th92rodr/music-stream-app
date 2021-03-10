import knex from 'knex';

import Database from './interface';
import LoggerProvider from '@providers/LoggerProvider/interface';

export default class KnexDatabase implements Database {
  private connection: knex;

  private loggerProvider: LoggerProvider;

  constructor(loggerProvider: LoggerProvider) {
    this.connection = knex({
      client: 'pg',
      connection: process.env.POSTGRES_ADDRESS,
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
