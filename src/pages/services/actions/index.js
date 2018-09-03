import axios from 'axios';
import external_routes from '../../../config/external_routes';

function receiveServices(services) {
  return { type: 'RECEIVE_SERVICES', payload: services };
}

function stopServicesLoading() {
  return { type: 'STOP_SERVICES_LOADING' };
}

function requestServices() {
  return (dispatch) => {
    axios.get(process.env.API_HOST + external_routes.services).then(resp => {
      dispatch(receiveServices(resp.data.services));
    }).then(() => {
      dispatch(stopServicesLoading());
    });
  };
}

module.exports = {
  requestServices
};
