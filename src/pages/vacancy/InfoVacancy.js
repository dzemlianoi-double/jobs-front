import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FacebookShareButton, FacebookIcon, TelegramShareButton, TelegramIcon, ViberShareButton, ViberIcon } from 'react-share';

import VacancyModal from '../vacancies/components/VacancyModal';
import T from '../../store/translations';

export default class InfoVacancy extends Component {
  static propTypes = {
    openVacancyModal: PropTypes.func.isRequired,
    closeVacancyModal: PropTypes.func.isRequired,
    saveVacancy: PropTypes.func.isRequired,
    currentVacancy: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
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
    modalVacancy: {},
    showShare: false
  }

  get shareUrl() {
    return `https://worker.dp.ua/vacancy/${this.props.currentVacancy.id}`;
  }

  get title() {
    return `Worker.dp.ua - Трудоустройство за границей | Вакансия - ${this.props.currentVacancy.title} - ${this.props.currentVacancy.salary_min} - ${this.props.currentVacancy.city}`;
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
          <div className="row">
            <div className="col-md-12 mt-25 text-center">
              <div className="block-share inline-block text-center align-middle">
                <p className="inline-block float-left date-added mt-6 mr-15">{T.translate('vacancy.share')}</p>
                <FacebookShareButton url={this.shareUrl} quote={this.title} className="inline-block text-center mr-6 ml-6" round={true}>
                  <FacebookIcon round={true} size={30} />
                </FacebookShareButton>
                <TelegramShareButton url={this.shareUrl} title={this.title} className="inline-block mr-6 ml-6" round={true}>
                  <TelegramIcon round={true} size={30} />
                </TelegramShareButton>
                <ViberShareButton url={this.shareUrl} title={this.title} className="inline-block mr-6 ml-6" >
                  <ViberIcon round={true} size={30} />
                </ViberShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
