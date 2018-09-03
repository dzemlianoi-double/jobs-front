import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VacancyModal from '../vacancies/components/VacancyModal';

import T from '../../store/translations';

export default class InfoVacancy extends Component {
  static propTypes = {
    openVacancyModal: PropTypes.func.isRequired,
    closeVacancyModal: PropTypes.func.isRequired,
    saveVacancy: PropTypes.func.isRequired,
    currentVacancy: PropTypes.shape({
      country_name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      salary_min: PropTypes.number.isRequired,
      age_min: PropTypes.number.isRequired,
      age_max: PropTypes.number.isRequired,
    }),
    experience: PropTypes.number.isRequired,
    sex: PropTypes.oneOf(['Any', 'Male', 'Female', 'Family']).isRequired
  };

  state = {
    modalVacancy: {}
  }

  openModal = () => {
    this.setState({ modalVacancy: this.props.currentVacancy});
  }

  closeVacancyModal = () => {
    this.setState({ modalVacancy: {} });
  }

  render() {
    return (
      <div className="col-md-5 mt-10">
        <VacancyModal 
          modalVacancy={this.state.modalVacancy}
          closeVacancyModal={this.closeVacancyModal}
          saveVacancy={this.props.saveVacancy}
        />
        <div className="conditions">
          <div className="wrapper-info">
            <div className="row">
              <div className="col-md-6 info">
                <i className="fa fa-money fs-17 mr-2 color-strong-blue-2" aria-hidden="true"></i>
                {T.translate('vacancy.salary')}
              </div>
              <div className="col-md-6 info">{this.props.currentVacancy.salary_min} {T.translate('vacancy.icon_uah')}</div>
            </div>
          </div>
          <div className="wrapper-info">
            <div className="row">
              <div className="col-md-6 info">
                <i className="fa fa-map-pin fs-17 mr-2 color-strong-blue-2" aria-hidden="true"></i>
                {T.translate('vacancy.country')}
              </div>
              <div className="col-md-6 info">{this.props.currentVacancy.country_name}, {this.props.currentVacancy.city}</div>
            </div>
          </div>
          <div className="wrapper-info">
            <div className="row">
              <div className="col-md-6 info">
                <i className="fa fa-venus-mars fs-17 mr-2 color-strong-blue-2"></i>
                {T.translate('vacancy.sex')}
              </div>
              <div className="col-md-6 info">{this.props.sex}</div>
            </div>
          </div>
          <div className="wrapper-info">
            <div className="row">
              <div className="col-md-6 info">
                <i className="fa fa-user-times fs-17 mr-2 color-strong-blue-2"></i>
                {T.translate('vacancy.age')}
              </div>
              <div className="col-md-6 info">{this.props.currentVacancy.age_min} - {this.props.currentVacancy.age_max} {T.translate('vacancy.years')}</div>
            </div>
          </div>
          <div className="wrapper-info">
            <div className="row">
              <div className="col-md-6 info">
                <i className="fa fa-child fs-17 mr-2 color-strong-blue-2"></i>
                {T.translate('vacancy.experience')}
              </div>
              <div className="col-md-6 info">{this.props.experience}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mt-25 text-center">
              <button onClick={this.openModal} className="btn-contacts">{T.translate('vacancy.respond')}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
