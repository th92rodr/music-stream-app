import * as Knex from 'knex';

import { AlbumsTable, MusicsTable } from '../../constants/index';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(MusicsTable, table => {
    table.string('id').primary();
    table.string('title').notNullable();
    table.integer('durationInSeconds').notNullable();
    table.string('file').notNullable();
    table.specificType('composers', 'text[]');
    table.string('lyrics');
    // prettier-ignore
    table.string('albumId')
      .notNullable()
      .references('id')
      .inTable(AlbumsTable)
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(MusicsTable);
}
