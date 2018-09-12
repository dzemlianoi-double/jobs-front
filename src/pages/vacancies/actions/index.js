import axios from 'axios';
import external_routes from '../../../config/external_routes';

function receiveVacancies(vacancies) {
  return { type: 'RECEIVE_VACANCIES', payload: vacancies };
}

function receiveVacancy(vacancy) {
  return { type: 'RECEIVE_VACANCY', payload: vacancy };
}

function setBaseFilters(vacancies) {
  return { type: 'SET_BASE_FILTERS', payload: vacancies };
}

function updateFilters(changedData) {
  return { type: 'UPDATE_FILTERS', payload: changedData };
}

function openVacancyModal(vacancy) {
  return { type: 'OPEN_VACANCY_MODAL', payload: vacancy};
}

function closeVacancyModal() {
  return { type: 'CLOSE_VACANCY_MODAL' };
}

function customSearch(text) {
  return { type: 'CUSTOM_SEARCH', payload: text };
}

function resetSearch() {
  return (dispatch) => {
    dispatch(resetSearchResults());
    dispatch(resetAllFilters());
  };
}

function changeOrder(order) {
  return { type: 'CHANGE_ORDER', payload: order };
}

function resetSearchResults() {
  return { type: 'RESET_SEARCH' };
}

function resetAllFilters() {
  return { type: 'RESET_ALL_FILTERS' };
}

function saveVacancy() {
  return(dispatch, getState) => {
    const formValues = getState().form.vacancy.values;
    const fullParams = { ...formValues, vacancy_id: getState().vacancies.modalVacancy.id };
    axios.post(process.env.API_HOST + external_routes.create_claim, { claim: fullParams }).then(() => {
      dispatch(closeVacancyModal());
    });
  };
}

function requestVacancies() {
  return (dispatch) => {
    axios.get(process.env.API_HOST + external_routes.vacancies_list).then(resp => {
      dispatch(receiveVacancies(resp.data.vacancies));
      dispatch(setBaseFilters(resp.data.vacancies));
    }).then(() => {
      dispatch(stopVacanciesLoading());
    });
  };
}

function stopVacanciesLoading() {
  return { type: 'STOP_VACANCIES_LOADING' };
}

function requestVacancy(id) {
  return (dispatch) => {
    axios.get(process.env.API_HOST + external_routes.vacancy(id)).then(resp => {
      dispatch(receiveVacancy(resp.data.vacancy));
    }).then(() => {
      dispatch(stopVacanciesLoading());
    });
  };
}

module.exports = {
  requestVacancies,
  updateFilters,
  requestVacancy,
  openVacancyModal,
  closeVacancyModal,
  saveVacancy,
  customSearch,
  resetSearch,
  resetAllFilters,
  changeOrder
};
