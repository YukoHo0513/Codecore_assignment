// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'new_team_db'
    },
    migrations: {
      tableName: 'migrations',
      directory: 'db/migrations'
    }

  }

};
