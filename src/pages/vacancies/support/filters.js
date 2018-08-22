import _ from 'lodash';

function filterSalary(vacancies, filters) {
  const { salary_min, salary_max } = filters;

  if (salary_max !== null && salary_min !== null) {
    return _.filter(vacancies, (vacancy) => vacancy.salary_min >= salary_min && vacancy.salary_min <= salary_max);
  } else {
    return vacancies;
  }
}

function filterExperience(vacancies, filters) {
  const { experience } = filters;

  if (experience !== null) {
    return _.filter(vacancies, (vacancy) => vacancy.experience <= experience);
  } else {
    return vacancies;
  }
}

function filterAge(vacancies, filters) {
  const { age_min, age_max } = filters;

  if (age_min !== null && age_max !== null) {
    return _.filter(vacancies, (vacancy) => {
      let age_min_is_between_range = vacancy.age_min >= age_min && vacancy.age_min <= age_max;
      let age_max_is_between_range = vacancy.age_max >= age_min && vacancy.age_max <= age_max;
      return age_min_is_between_range || age_max_is_between_range;
    });
  } else {
    return vacancies;
  }
}

function filterCountry(vacancies, filters) {
  const { country_name } = filters;

  if (country_name !== null) {
    return _.filter(vacancies, (vacancy) => vacancy.country_name == country_name);
  } else {
    return vacancies;
  }
}

function filterSex(vacancies, filters) {
  const { sex_list } = filters;

  if (sex_list.length === 0 || sex_list.includes('Any')) {
    return vacancies;
  } else {
    return _.filter(vacancies, (vacancy) => sex_list.includes(vacancy.sex));
  }
}

function filterSpeciality(vacancies, filters) {
  const { specialities_list } = filters;
  
  if (specialities_list.length === 0) {
    return vacancies;
  } else {
    return _.filter(vacancies, (vacancy) => {
      return _.intersection(_.map(vacancy.specialities, 'title'), specialities_list).length > 0;
    });
  }
}

export default function filteredVacancies(vacancies, filters) {
  let vacanciesBySalary = filterSalary(vacancies, filters);
  let vacanciesByExperience = filterExperience(vacanciesBySalary, filters);
  let vacanciesByAge = filterAge(vacanciesByExperience, filters);
  let vacanciesByCountry = filterCountry(vacanciesByAge, filters);
  let vacanciesBySex = filterSex(vacanciesByCountry, filters);
  let vacanciesBySpeciality = filterSpeciality(vacanciesBySex, filters);
  return vacanciesBySpeciality;
}