module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost/postgres',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations",
      tableName: 'dbmigrations'
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  // db connection for testing
  testing: { 
    client: 'pg',
    connection: 'postgresql://localhost/staging',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations'
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  // Heroku
  production: {
    client: 'pg',  
    connection: process.env.DATABASE_URL, 
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations",
      tableName: 'dbmigrations'
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};
