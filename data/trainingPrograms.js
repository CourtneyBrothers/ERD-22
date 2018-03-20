'use strict';

const faker = require('faker')

module.exports.generateTrainingPrograms = () => {
  let trainingPrograms = [];

  for (let i = 0; i < 10; i++) {
    let name = faker.company.bs();
    let start_date = faker.date.recent().split("T")[0];
    //what will the necessary date params be?
    let end_date = faker.date.soon().split("T")[0];
    let description = faker.hacker.phrase();
    let max_attendance = faker.random.number({min:1, max:10});

    trainingPrograms.push({
      name,
      start_date,
      end_date,
      max_attendance,
      description

    });
  }

  return trainingPrograms;
}