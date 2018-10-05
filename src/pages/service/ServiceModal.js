import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import _ from 'lodash';

import T from '../../store/translations';

import ServiceForm from './ServiceForm';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : '#1c85c4'
  }
};

export default class ServiceModal extends Component {
  static propTypes = {
    modalService: PropTypes.object.isRequired,
    closeServiceModal: PropTypes.func.isRequired,
    saveService: PropTypes.func.isRequired
  }

  get isModalOpen(){
    return !_.isEmpty(this.props.modalService);
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.isModalOpen}
          onRequestClose={this.props.closeServiceModal}
          style={customStyles}
        >
          <div className="header-modal-vacancy">
            <span className="title-vacancy">
              {T.translate('vacancy_modal.response_to')}
              <b>{this.props.modalService.name}</b>
            </span>
            <div className="btn-close ml-2">
              <button onClick={this.props.closeServiceModal}>X</button>
            </div>
          </div>
          <div className="horizontal-line"></div>
          <ServiceForm
            onSubmit={this.props.saveService}
          />
        </Modal>
      </div>
    );
  }
}

Modal.setAppElement('#app');