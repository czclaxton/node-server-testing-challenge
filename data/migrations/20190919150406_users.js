exports.up = function(knex) {
  return knex.schema.createTable("users", users => {
    users.increments();
    users.string("name", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
