import axios from 'axios';
import external_routes from '../../../config/external_routes';
import { reset } from 'redux-form';

function saveContacts() {
  return(dispatch, getState) => {
    const data = getState().form.contacts.values;
    axios.post(process.env.API_HOST + external_routes.create_claim, data).then(() => {
      dispatch(reset('contacts'));
    });
  };
}

module.exports = {
  saveContacts
};
