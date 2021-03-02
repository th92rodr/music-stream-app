import * as Knex from 'knex';

import { MusicsTable } from '../../constants/index';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(MusicsTable, table => {
    table.string('id').primary();
    table.string('title').notNullable();
    table.integer('duration').notNullable();
    table.string('file').notNullable();
    table.specificType('composers', 'text ARRAY');
    table.string('lyrics');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(MusicsTable);
}
