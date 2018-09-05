import axios from 'axios';
import external_routes from '../../../config/external_routes';

function saveContacts() {
  return(dispatch, getState) => {
    const data = getState().form.contacts.values;
    axios.post(process.env.API_HOST + external_routes.create_claim, data);
  };
}

module.exports = {
  saveContacts
};
