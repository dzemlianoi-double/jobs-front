import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import internal_routes from '../../../config/internal_routes';
import ServiceModal from './ServiceModal';
import T from '../../../store/translations';

export default class Service extends Component {
  static propTypes = {
    service: PropTypes.object.isRequired,
    openServiceModal: PropTypes.func.isRequired,
    modalService: PropTypes.func.isRequired,
    closeServiceModal: PropTypes.func.isRequired,
    saveService: PropTypes.func.isRequired
  };

  openModal = () => {
    this.props.openServiceModal(this.props.service);
  }

  render() {
    const { service } = this.props;
    const DEFAULT_ICON = 'user';
    const servicePrice = service.by_agreement ? 'По договоренности' : service.price ? `${service.price} грн` : 'Бесплатно';
    return(
      <li>
        <ServiceModal 
          modalService={this.props.modalService}
          closeServiceModal={this.props.closeServiceModal}
          saveService={this.props.saveService}
        />
        <div className="mu-pricing-single">
          <div className="mu-pricing-single-icon">
            <span className={`fa fa-${service.icon || DEFAULT_ICON}`}></span>
          </div>
          <div className="mu-pricing-single-title">
            <h3 className="fs-16">{service.name}</h3>
          </div>
          <div className="mu-pricing-single-content">
            <ul>
              <li>{_.truncate(service.full_description, { length: 200 })}</li>
            </ul>
          </div>
          <div className="mu-single-pricebox">
            <h4 className="fs-30">{servicePrice}</h4>
          </div>
          <Link className="mu-buy-now-btn" to={internal_routes.service(service.id)}>{service.id}</Link>

          <button onClick={this.openModal} className="mu-buy-now-btn">
            {T.translate('services.more')}
          </button>
        </div>
      </li>
    );
  }
}