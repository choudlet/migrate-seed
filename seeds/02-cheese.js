
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM cheese; ALTER SEQUENCE cheese_id_seq RESTART WITH 6')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cheese').insert({id: 1, profile_id: 1, cheese_type: 'Gouda', rating: 6, comment: 'Just a basic cheese'}),
        knex('cheese').insert({id: 2, profile_id: 1, cheese_type: 'American', rating: 2, comment: 'This is a bad cheese'}),
        knex('cheese').insert({id: 3, profile_id: 2, cheese_type: 'Brie', rating: 10, comment: 'Baked brie is so yummy!'}),
        knex('cheese').insert({id: 4, profile_id: 2, cheese_type: 'Pepper Jack', rating: 8, comment: 'I love this cheese on nachos.'}),
        knex('cheese').insert({id: 5, profile_id: 1, cheese_type: 'Swiss', rating: 3, comment: 'Strong flavor, too many holes'}),
      ]);
    });
};
