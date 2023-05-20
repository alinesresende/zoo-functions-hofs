const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) => {
  const idManager = employees.some((empregado) => empregado.managers.includes(id));
  return idManager;
};
isManager('9e7d4524-363c-416a-8759-8aa7e50c0992');

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    const pessoasLideradas = employees.filter((pessoa) => pessoa.managers.includes(managerId));
    const nomeSobrenome = pessoasLideradas.map((p) => `${p.firstName} ${p.lastName}`);
    return nomeSobrenome;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};
getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992');

module.exports = { isManager, getRelatedEmployees };
