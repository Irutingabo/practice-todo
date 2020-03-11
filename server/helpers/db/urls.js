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
    connectionString: process.env.DATABASE_URL || 'postgres://mckdbplteolquq:c764ceea7aaf933541cc3eb5574988af8d1a8948a51d282c29631e5960065858@ec2-52-23-14-156.compute-1.amazonaws.com:5432/db119irnqevrse',
  },
};

export default envir;
