import knex from 'knex';

const dbConnection = knex({
  client: 'pg',
  connection: process.env.POSTGRES_ADDRESS,
  useNullAsDefault: true,
});

export default dbConnection;
