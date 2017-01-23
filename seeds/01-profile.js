
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM profile; ALTER SEQUENCE profile_id_seq RESTART WITH 3')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('profile').insert({id: 1, first_name: 'Chris', last_name: 'Houdlette', email: 'choudlette@gmail.com', password: 'ILoVEcheese111'}),
        knex('profile').insert({id: 2, first_name: 'Jake', last_name: 'Simmons', email: 'jsim@yahoo.com', password: 'cHEESeChEEse22283'}),
      ]);
    });
};
