module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/auth.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
      tableName: 'dbmigrations',
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  // db connection for testing
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/tests.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  // Heroku will look for a 'production' configuration
  production: {
    client: 'pg',  // npm i pg
    connection: process.env.DATABASE_URL, // provided by heroku
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};
