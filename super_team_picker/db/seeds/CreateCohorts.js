const faker = require("faker");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("cohorts").del();
  const cohorts = Array.from({ length: 10 }).map(() => {
    return {
      name: faker.lorem.words(2),
      logoUrl: faker.image.cats(30,30),
      members: faker.lorem
        .words(faker.datatype.number({ min: 15, max: 25 }))
        .split(" ")
        .join(", "),
      created_at: faker.date.past(),
    };
  });
  await knex("cohorts").insert(cohorts);
};
