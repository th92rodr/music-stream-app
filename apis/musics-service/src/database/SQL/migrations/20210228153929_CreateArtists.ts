import { Knex } from 'knex';

import { ArtistsTable } from '../../../constants/index';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(ArtistsTable, table => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('country').notNullable();
    table.date('foundation_date').notNullable();
    table.specificType('members', 'text[]');
    table.string('description', 5000);
    table.integer('genre').notNullable();
    table.specificType('photos', 'text[]');
    table.string('facebook_url');
    table.string('twitter_url');
    table.string('instagram_url');
    table.string('wikipedia_url');
    table.integer('favorites').notNullable();
    table.integer('followers').notNullable();
    table.string('font');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(ArtistsTable);
}
