const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

const getEmployeeByName = (name) => {
  if (name === undefined) {
    return {};
  }
  const employe = employees.find((person) => name === person.firstName || name === person.lastName);
  return employe;
};
getEmployeeByName();
module.exports = getEmployeeByName;
