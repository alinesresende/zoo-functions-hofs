const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === undefined) {
    const quantAnimal = species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
    return quantAnimal;
  }
  if (animal.sex === undefined) {
    const quantSpecie = species.find((specie) => animal.species === specie.name);
    return quantSpecie.residents.length;
  }
  if (animal.sex !== undefined) {
    const quantAnimal = species.find((specie) => animal.species === specie.name);
    const sexAnimal = quantAnimal.residents.filter((bicho) => animal.sex === bicho.sex);
    return sexAnimal.length;
  }
};
countAnimals({ species: 'giraffes', sex: 'female' });

module.exports = countAnimals;
