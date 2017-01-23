
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profile', table=>{
    table.increments();
    table.text('first_name');
    table.text('last_name');
    table.text('email').unique().notNullable();
    table.text('password').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('profile');
};
