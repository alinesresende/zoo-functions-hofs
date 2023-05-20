/* eslint-disable max-len */
const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const listID = employees.map((list) => list.id);
const listName = employees.map((list) => list.firstName);
const listLName = employees.map((list) => list.lastName);

const newInformationEmployees = (employee) => {
  const animalResponsible = species.filter((animal) =>
    employee.responsibleFor.includes(animal.id));
  const nameSpecies = animalResponsible.map((specie) => specie.name);
  const animalLocation = animalResponsible.map((specie) => specie.location);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: nameSpecies,
    locations: animalLocation,
  };
};

const getEmployeesCoverage = (object) => {
  if (object === undefined) {
    const employeeAll = employees.map((employee) => newInformationEmployees(employee));
    return employeeAll;
  }
  if (!listID.includes(object.id) && !listLName.includes(object.name)
   && !listName.includes(object.name)) {
    throw new Error('Informações inválidas');
  }
  const employeeFound = employees.find((employee) =>
    employee.id === object.id
    || employee.firstName === object.name || employee.lastName === object.name);
  return newInformationEmployees(employeeFound);
};

console.log(getEmployeesCoverage({ id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1' }));

module.exports = getEmployeesCoverage;
