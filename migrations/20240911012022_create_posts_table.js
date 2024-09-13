/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('posts', function(table) {
            // uuid: Unique primary key, using nanoid as a default value
            table.string('uuid', 21).primary();

            // owner_user_uuid: Not null, indexed, uses nanoid for values
            table.string('owner_user_uuid', 21).notNullable().index();

            // company_id: Can be null, indexed, uses nanoid for values
            table.string('company_id', 21).nullable().index();

            // type: Small unsigned integer, not null, indexed
            table.specificType('type', 'smallint').unsigned().notNullable().index();

            // title: String, max 64 characters, not null
            table.string('title', 64).notNullable();

            // description: String, max 200 characters, not null
            table.string('description', 200).notNullable();

            // poster: String, max 256 characters, can be null
            table.string('poster', 256).nullable();

            // poster_title: String, max 32 characters, can be null
            table.string('poster_title', 32).nullable();

            // category_id: Integer, unsigned, indexed, can be null
            table.integer('category_id').unsigned().nullable().index();

            // category_model: String, max 32 characters, can be null
            table.string('category_model', 32).nullable();

            // created_at: Datetime, default to current timestamp, not null
            table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();

            // updated_at: Datetime, default to current timestamp, not null
            table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();

            // published: Boolean, default true
            table.boolean('published').defaultTo(true);

            // published_at: Datetime, default to current timestamp, not null
            table.timestamp('published_at').defaultTo(knex.fn.now()).notNullable();
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('posts');
};
