import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import _ from 'lodash';

import VacancyForm from './VacancyForm';
 
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

export default class VacancyModal extends Component {
  static propTypes = {
    modalVacancy: PropTypes.object.isRequired,
    closeVacancyModal: PropTypes.func.isRequired,
    saveVacancy: PropTypes.func.isRequired,
  }

  closeModal = () => this.props.closeVacancyModal();
  
  get isModalOpen(){
    return !_.isEmpty(this.props.modalVacancy);
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <VacancyForm vacancy={this.props.closeVacancyModal} onSubmit={this.props.saveVacancy} />
        </Modal>
      </div>
    );
  }
}

Modal.setAppElement('#app');