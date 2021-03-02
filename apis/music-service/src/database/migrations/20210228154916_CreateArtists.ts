import * as Knex from 'knex';

import { AlbumsTable, ArtistsTable } from '../../constants/index';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(ArtistsTable, table => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('description');
    table.string('genre').notNullable();
    table.specificType('photos', 'text ARRAY');
    // prettier-ignore
    table.specificType('albums', 'text ARRAY')
      .notNullable()
      .references('id')
      .inTable(AlbumsTable)
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(ArtistsTable);
}
