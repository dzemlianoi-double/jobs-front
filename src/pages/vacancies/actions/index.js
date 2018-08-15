import axios from 'axios';
import external_routes from '../../../config/external_routes';

function receiveVacancies(vacancies) {
  return { type: 'RECEIVE_VACANCIES', payload: vacancies };
}

function stopVacanciesLoading() {
  return { type: 'STOP_VACANCIES_LOADING' };
}

function requestVacancies() {
  return (dispatch) => {
    axios.get(process.env.API_HOST + external_routes.vacancies_list).then(resp => {
      dispatch(receiveVacancies(resp.data.vacancies));
    }).then(() => {
      dispatch(stopVacanciesLoading());
    });
  };
}

module.exports = {
  requestVacancies
};
