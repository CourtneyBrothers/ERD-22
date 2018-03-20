'use strict';

const faker = require('faker')

module.exports.generateComputers = () => {
  let computers = [];
  //set to length of employees but there could be more computers than employees
  for (let i = 0; i < 50; i++) {
    // TODO: let decomission_date ?? is a decom date necessary or optional();
    //what will the necessary date params be?
    let purchase_date = faker.date.recent();
    let emp_id_assigned = i;

    computers.push({
      purchase_date,
      //TODO: decomission date
      emp_id_assigned

    });
  }

  return computers;
}