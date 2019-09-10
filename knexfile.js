// Update with your config settings.
module.exports = {
  development: {
    client: 'sqlite3',
    connection: { // can be an object or a string
      filename: './data/car-dealer.db3' // always from the root folder
    },
    migrations: {
      directory: './data/migrations'
    },
    useNullAsDefault: true // used for sqlite
  },
}

/*

Notes:

Create a migration === knex migrate:make
Run all pending migrations === knex migrate:latest
Undo migrations === knex migrate:rollback

*/