const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (specieName, age) => {
  const selectedSpecie = species.find((specie) => specieName === specie.name);
  const areAllAnimalsOlderThanAge = selectedSpecie.residents.every((animal) => animal.age > age);
  return areAllAnimalsOlderThanAge;
};
getAnimalsOlderThan('lions', 6);

module.exports = getAnimalsOlderThan;
