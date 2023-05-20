const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

const countEntrants = (entrant) => {
  const filterChild = entrant.filter((pessoa) => pessoa.age < 18);
  const filteradult = entrant.filter((pessoa) => pessoa.age >= 18 && pessoa.age < 50);
  const filterSenior = entrant.filter((pessoa) => pessoa.age >= 50);
  return { child: filterChild.length, adult: filteradult.length, senior: filterSenior.length };
};
countEntrants(entrants);

const calculateEntry = (entrant) => {
  if (entrant === undefined || entrant.length === 0 || Object.keys(entrant).length === 0) {
    return 0;
  }
  const sum = countEntrants(entrant);
  const priceAdult = sum.adult * prices.adult;
  const priceChild = sum.child * prices.child;
  const priceSenior = sum.senior * prices.senior;
  return priceAdult + priceChild + priceSenior;
};
calculateEntry(entrants);

module.exports = { calculateEntry, countEntrants };
