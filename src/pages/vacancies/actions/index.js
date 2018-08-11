import axios from 'axios';
import external_routes from '../../../config/external_routes';

function addDataLastVacancies(last_vacancies) {
  return { type: 'ADD_VACANCIES_LAST', payload: last_vacancies };
}

function addReceiveDataLastVacancies(dispatch) {
  axios.get(process.env.API_HOST + external_routes.vacancies_last).then(resp => {
    dispatch(addDataLastVacancies(resp.data));
  });
}

module.exports = {
  addReceiveDataLastVacancies
};
