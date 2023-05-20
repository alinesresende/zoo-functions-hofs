const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const listName = species.map((specie) => specie.name);
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const getScheduleByDays = (daysList) => {
  const newObjeto = {};
  daysList.forEach((day) => {
    const speciesDays = species.filter((specie) =>
      specie.availability.includes(day));
    const speciesNames = speciesDays.map((specie) => specie.name);
    const { open, close } = hours[day];
    const operatingHoursPhrase = `Open from ${open}am until ${close}pm`;
    newObjeto[day] = {
      officeHour: day === 'Monday' ? 'CLOSED' : operatingHoursPhrase,
      exhibition: day === 'Monday' ? 'The zoo will be closed!' : speciesNames,
    };
  });
  return newObjeto;
};

const getSchedule = (scheduleTarget) => {
  if (listName.includes(scheduleTarget)) {
    const specieSelected = species.find((animal) => scheduleTarget === animal.name);
    return specieSelected.availability;
  }
  if (weekDays.includes(scheduleTarget)) {
    const scheduleObject = getScheduleByDays([scheduleTarget]);
    return scheduleObject;
  }
  const scheduleObject = getScheduleByDays(weekDays);
  return scheduleObject;
};
getSchedule();

module.exports = getSchedule;
