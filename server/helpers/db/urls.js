import dotenv from 'dotenv';

dotenv.config({ silent: process.env.NODE_ENV === 'production' });

const envir = {
  testlocal: {
    connection: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost/testcickodes`,
  },

  test: {
    connection: 'postgres://localhost/testcickodes',
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
