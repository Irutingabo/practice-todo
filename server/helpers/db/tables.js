import { query } from './connect';

const createTable = () => {
  const snippetsTable = `
  CREATE TABLE IF NOT EXISTS snippets(
    snippetid serial PRIMARY KEY,
    username text,
    title text,
    category text,
    status text,
    description text,
    tag text,
    createdat text
);`;

  const usersTable = `
  CREATE TABLE IF NOT EXISTS users(
    userid serial PRIMARY KEY,
    email text NOT NULL,
    username text,
    firstname text,
    lastname text,
    type text,
    password text,
    isadmin boolean,
    createdat text
);`;

  const feedbackTable = `

  CREATE TABLE IF NOT EXISTS feedbacks(
    reviewid serial PRIMARY KEY,
    username text,
    snippetid text,
    status text,
    owner boolean,
    createdat text
  );`;

  query(snippetsTable);
  query(usersTable);
  query(feedbackTable);
};

export default createTable;
