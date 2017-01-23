#!/bin/sh
echo "Let's make an awesome database of cheeses!"
echo "First let's install our dependencies!"
yarn install
echo "Now let's create a database"
createdb 'great_cheeses'
echo "Migrate GO!"
knex migrate:latest
echo "Now run the seeds"
knex seed:run
echo "Now check out the awesome databases in psql try selecting everything from the profile and cheese tables!"
psql great_cheeses
