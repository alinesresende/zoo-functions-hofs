const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const pessoaColaboradora = employees.find((pessoa) => id === pessoa.id);
  const firstAnimal = pessoaColaboradora.responsibleFor[0];
  const specieFound = species.find((animal) => animal.id === firstAnimal);
  const firstAnimalOld = specieFound.residents.reduce((acc, curr) =>
    (acc.age > curr.age ? acc : curr), 0);
  return Object.values(firstAnimalOld);
};
getOldestFromFirstSpecies('b0dc644a-5335-489b-8a2c-4e086c7819a2');

module.exports = getOldestFromFirstSpecies;
