import axios from 'axios';
import external_routes from '../../../config/external_routes';

function addDataLastVacancies(last_vacancies) {
  return { type: 'ADD_VACANCIES_LAST', payload: last_vacancies };
}

function addReceiveDataLastVacancies() {
  return (dispatch) => {
    axios.get(process.env.API_HOST + external_routes.vacancies_last).then(resp => {
      dispatch(addDataLastVacancies(resp.data));
    });
  };
}

function addEmails(emails) {
  return { type: 'RECEIVE_EMAILS', payload: emails };
}

function addNumbers(phone_numbers) {
  return { type: 'RECEIVE_NUMBERS', payload: phone_numbers };
}

function addSocialLinks(social_links) {
  return { type: 'RECEIVE_SOCIAL_LINKS', payload: social_links };
}

function addCoordinates(coordinates) {
  return { type: 'RECEIVE_COORDINATES', payload: coordinates };
}

function addAddresses(addresses) {
  return { type: 'RECEIVE_ADDRESSES', payload: addresses };
}

// function addFeedback(feedback) {
//   return {type: 'RECEIVE_FEEDBACK', payload: feedback};
// }

function finishLoading() {
  return { type: 'FINISH_LOADING' };
}

function receiveBasicData() {
  return (dispatch) => {
    axios.post(process.env.API_HOST + external_routes.basic_conf).then(resp => {
      const data = resp.data;
      dispatch(addEmails(data.emails)),
      dispatch(addNumbers(data.phone_numbers)),
      dispatch(addSocialLinks(data.social_links)),
      dispatch(addCoordinates(data.coordinates)),
      dispatch(addAddresses(data.addresses));
      dispatch(addReceiveDataLastVacancies());
    }).then(() => {
      dispatch(finishLoading());
    });
  };
}

module.exports = {
  receiveBasicData,
  addReceiveDataLastVacancies,
  finishLoading
};
