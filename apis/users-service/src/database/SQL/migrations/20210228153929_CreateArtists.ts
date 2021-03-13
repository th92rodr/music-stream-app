import * as Knex from 'knex';

import { ArtistsTable } from '../../../constants/index';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(ArtistsTable, table => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('description');
    table.string('genre').notNullable();
    table.specificType('photos', 'text[]');
    table.specificType('albumsIds', 'text[]');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(ArtistsTable);
}
