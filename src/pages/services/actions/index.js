import axios from 'axios';
import external_routes from '../../../config/external_routes';

function receiveServices(services) {
  return { type: 'RECEIVE_SERVICES', payload: services };
}

function openServiceModal(service) {
  return { type: 'OPEN_SERVICES_MODAL', payload: service };
}

function closeServiceModal() {
  return { type: 'CLOSE_SERVICES_MODAL' };
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

function saveService() {
  return(dispatch, getState) => {
    const formValues = getState().form.services.values;
    const fullParams = { ...formValues, service_id: getState().services.modalService.id };
    axios.post(process.env.API_HOST + external_routes.create_claim, { claim: fullParams }).then(() => {
      dispatch(closeServiceModal());
    });
  };
}

module.exports = {
  requestServices,
  openServiceModal,
  closeServiceModal,
  saveService
};
