CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

CREATE TABLE addresses (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  street VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(255) NOT NULL,
  zip VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE phones (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE emails (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  email VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE bank_accounts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  account_number VARCHAR(255) NOT NULL,
  routing_number VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);