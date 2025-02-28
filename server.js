const express = require('express');
const app = express();
const faker = require('faker');
const _ = require('lodash');
const { Pool } = require('pg');

// Database connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'fake_data_generator',
  password: 'your_password',
  port: 5432,
});

// Generate fake bank account information
function generateBankAccount() {
  return {
    accountNumber: faker.finance.account(),
    routingNumber: faker.finance.routingNumber(),
    accountType: faker.finance.accountType(),
    bankName: faker.company.companyName(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zip: faker.address.zipCode(),
  };
}

// Generate fake name information
function generateName() {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    middleName: faker.name.middleName(),
    suffix: faker.name.suffix(),
    title: faker.name.title(),
  };
}

// Generate fake address information
function generateAddress() {
  return {
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zip: faker.address.zipCode(),
    country: faker.address.country(),
  };
}

// Generate fake phone number information
function generatePhoneNumber() {
  return {
    phoneNumber: faker.phone.phoneNumber(),
    phoneType: faker.phone.phoneType(),
  };
}

// Generate fake email information
function generateEmail() {
  return {
    email: faker.internet.email(),
    emailType: faker.internet.emailType(),
  };
}

// API Endpoints
app.get('/api/name', (req, res) => {
  const name = generateName();
  pool.query('INSERT INTO names (first_name, last_name, middle_name, suffix, title) VALUES ($1, $2, $3, $4, $5) RETURNING *', [name.firstName, name.lastName, name.middleName, name.suffix, name.title], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: 'Error generating name' });
    } else {
      res.json(results.rows[0]);
    }
  });
});

app.get('/api/address', (req, res) => {
  const address = generateAddress();
  pool.query('INSERT INTO addresses (street_address, city, state, zip, country) VALUES ($1, $2, $3, $4, $5) RETURNING *', [address.streetAddress, address.city, address.state, address.zip, address.country], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: 'Error generating address' });
    } else {
      res.json(results.rows[0]);
    }
  });
});

app.get('/api/phone', (req, res) => {
  const phoneNumber = generatePhoneNumber();
  pool.query('INSERT INTO phones (phone_number, phone_type) VALUES ($1, $2) RETURNING *', [phoneNumber.phoneNumber, phoneNumber.phoneType], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: 'Error generating phone number' });
    } else {
      res.json(results.rows[0]);
    }
  });
});

app.get('/api/email', (req, res) => {
  const email = generateEmail();
  pool.query('INSERT INTO emails (email, email_type) VALUES ($1, $2) RETURNING *', [email.email, email.emailType], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: 'Error generating email' });
    } else {
      res.json(results.rows[0]);
    }
  });
});

app.get('/api/bank-account', (req, res) => {
  const bankAccount = generateBankAccount();
  pool.query('INSERT INTO bank_accounts (account_number, routing_number, account_type, bank_name, address, city, state, zip) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [bankAccount.accountNumber, bankAccount.routingNumber, bankAccount.accountType, bankAccount.bankName, bankAccount.address, bankAccount.city, bankAccount.state, bankAccount.zip], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: 'Error generating bank account' });
    } else {
      res.json(results.rows[0]);
    }
  });
});

app.get('/api/full-profile', (req, res) => {
  const name = generateName();
  const address = generateAddress();
  const phoneNumber = generatePhoneNumber();
  const email = generateEmail();
  const bankAccount = generateBankAccount();
  pool.query('INSERT INTO full_profiles (name, address, phone_number, email, bank_account) VALUES ($1, $2, $3, $4, $5) RETURNING *', [JSON.stringify(name), JSON.stringify(address), JSON.stringify(phoneNumber), JSON.stringify(email), JSON.stringify(bankAccount)], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: 'Error generating full profile' });
    } else {
      res.json(results.rows[0]);
    }
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});