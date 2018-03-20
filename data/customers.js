'use strict';

const faker = require('faker')

module.exports.generateCustomers = () => {
  let customers = [];

  for (let i = 0; i < 50; i++) {
    let first_name = faker.name.firstName();
    let last_name = faker.name.lastName();
    let phone_number = faker.phone.phoneNumberFormat();
    let email = faker.internet.email();
    let address_street = faker.address.streetAddress();
    let address_city = faker.address.city();
    let address_state = faker.address.state();
    let address_zip = faker.address.zipCode();
    let account_creation_date = faker.date.recent();
    //what will the necessary date params be?
 
    customers.push({
      first_name,
      last_name,
      phone_number,
      email,
      address_city,
      address_state,
      address_zip,
      account_creation_date,
    });
  }

  return customers;
}