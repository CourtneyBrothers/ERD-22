'use strict';

const faker = require('faker')

module.exports.departments = () => {
  let departments = [];

  for (let i = 0; i < 10; i++) {
    let name = `Department of ${faker.company.bs()}`;
    let start_date = faker.date.recent();
    //what will the necessary date params be?
    let end_date = faker.date.soon().split("T")[0];

    traingPrograms.push({
      name,
      start_date,
      end_date
    });
  }

  return trainingPrograms;
}