import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestService, openServiceModal, closeServiceModal, saveService } from '../services/actions';

class Service extends Component {
  static propTypes = {
    requestService: PropTypes.func.isRequired,
    openServiceModal: PropTypes.func.isRequired,
    closeServiceModal: PropTypes.func.isRequired,
    saveService: PropTypes.func.isRequired,
    modalService: PropTypes.func.isRequired,
    currentService: PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  }

  render() {
    return (
      <section>
        <div>service</div>
      </section>
    );
  }
}
  
function select(store) {
  return {
    currentService: store.services.currentService
  };
}
  
function mapPropsToDispatch(dispatch) {
  return {
    requestService: (id) => dispatch(requestService(id)),
    openServiceModal: (services) => dispatch(openServiceModal(services)),
    closeServiceModal: () => dispatch(closeServiceModal()),
    saveService: () => dispatch(saveService())
  };
}

export default connect(select, mapPropsToDispatch)(Service);
