import dotenv from 'dotenv';
dotenv.config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const knexConfig = {

  development: {
    client: 'mysql2',
    connection: {
      host:     process.env.DB_HOST || 'localhost',
      database: process.env.DB_NAME || 'posts_service',
      user:     process.env.DB_USER || 'dbuser',
      password: process.env.DB_PASSWORD || 'dbpassword'
    },
    migrations: {
      directory: './migrations'
    }
  },
  staging: {
    client: 'mysql2',
    connection: {
      host:     process.env.DB_HOST || 'localhost',
      database: process.env.DB_NAME || 'posts_service',
      user:     process.env.DB_USER || 'dbuser',
      password: process.env.DB_PASSWORD || 'dbpassword'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations'
    }
  },

  production: {
    client: 'mysql2',
    connection: {
      host:     process.env.DB_HOST || 'localhost',
      database: process.env.DB_NAME || 'posts_service',
      user:     process.env.DB_USER || 'dbuser',
      password: process.env.DB_PASSWORD || 'dbpassword'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations'
    }
  }

};

export default knexConfig;
