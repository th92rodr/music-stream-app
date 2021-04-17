import * as Knex from 'knex';

import { ArtistsTable } from '../../../constants/index';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(ArtistsTable, table => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('country').notNullable();
    table.date('foundationDate').notNullable();
    table.specificType('members', 'text[]');
    table.string('description', 5000);
    table.integer('genre').notNullable();
    table.specificType('photos', 'text[]');
    table.string('facebookUrl');
    table.string('twitterUrl');
    table.string('instagramUrl');
    table.string('wikipediaUrl');
    table.integer('favorites').notNullable();
    table.integer('followers').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(ArtistsTable);
}
