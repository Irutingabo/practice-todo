// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const envir = {
  test: {
    connection: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost/testcickodes`,
  },

  development: {
    connection: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost/cickodes`,
  },

  production: {
    client: 'pg',
    connectionString: process.env.DATABASE_URL,
  },
};

export default envir;
