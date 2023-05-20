const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) {
    return [];
  }
  const newArraySpecies = species.filter((animal) => ids.includes(animal.id));
  return newArraySpecies;
};

getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');

module.exports = getSpeciesByIds;
