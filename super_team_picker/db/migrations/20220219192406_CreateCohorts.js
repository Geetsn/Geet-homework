/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("cohorts", (cohorts) => {
    cohorts.increments("id");
    cohorts.string("name");
    cohorts.string("logoUrl");
    cohorts.text("members");
    cohorts.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("cohorts");
};
