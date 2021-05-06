import * as Knex from 'knex';

import { AlbumsTable, MusicsTable } from '../../../constants/index';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(MusicsTable, table => {
    table.string('id').primary();
    table.string('title').notNullable();
    table.integer('duration').notNullable();
    table.string('file').notNullable();
    table.specificType('composers', 'text[]');
    table.string('lyrics', 5000);
    table.integer('views').notNullable();
    // prettier-ignore
    table.string('album_id')
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
