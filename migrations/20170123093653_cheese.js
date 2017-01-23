
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cheese', table=>{
    table.increments();
    table.integer('profile_id').unsigned().references('id').inTable('profile').onDelete('cascade');
    table.text('cheese_type').notNullable();
    table.integer('rating');
    table.text('comment');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cheese');
};
