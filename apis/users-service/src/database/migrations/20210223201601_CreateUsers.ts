import * as Knex from 'knex';

import { UsersTable } from '@constants/index';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(UsersTable, table => {
    table.string('id').primary();
    table.string('username').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(UsersTable);
}
