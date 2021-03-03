import * as Knex from 'knex';

import { AlbumsTable, ArtistsTable } from '../../constants/index';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(AlbumsTable, table => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.date('year').notNullable();
    table.string('cover').notNullable();
    table.string('studio');
    table.specificType('producers', 'text[]');
    table.specificType('tracksIds', 'text[]');
    // prettier-ignore
    table.string('artistId')
      .notNullable()
      .references('id')
      .inTable(ArtistsTable)
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(AlbumsTable);
}
