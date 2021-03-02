import * as Knex from 'knex';

import { AlbumsTable, MusicsTable } from '../../constants/index';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(AlbumsTable, table => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.date('year').notNullable();
    table.string('cover').notNullable();
    table.specificType('producers', 'text ARRAY');
    table.string('studio');
    // prettier-ignore
    table.specificType('tracks', 'text ARRAY')
      .notNullable()
      .references('id')
      .inTable(MusicsTable)
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(AlbumsTable);
}
