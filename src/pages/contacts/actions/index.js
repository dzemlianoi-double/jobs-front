import axios from 'axios';
import external_routes from '../../../config/external_routes';

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

function finishLoading() {
  return { type: 'FINISH_LOADING' };
}

function addReceiveData(dispatch) {
  axios.post(process.env.API_HOST + external_routes.basic_conf).then(resp => {
    const data = resp.data;
    dispatch(addEmails(data.emails)),
    dispatch(addNumbers(data.phone_numbers)),
    dispatch(addSocialLinks(data.social_links)),
    dispatch(addCoordinates(data.coordinates)),
    dispatch(addAddresses(data.addresses));
  });
}

module.exports = {
  addReceiveData,
  finishLoading
};
