import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import internal_routes from '../../../../config/internal_routes';
import T from '../../../../store/translations';

const propTypes = {
  service: PropTypes.object.isRequired
};

const Service = ({ service }) => {
  const DEFAULT_ICON = 'user';
  const service_attr = service.attributes;
  const servicePrice = service_attr['by-agreement'] ? 'По договоренности' : service_attr.price ? `${service_attr.price} грн` : 'Бесплатно';
  return (
    <li>
      <div className="mu-pricing-single">
        <div className="mu-pricing-single-icon">
          <span className={`fa fa-${service.icon || DEFAULT_ICON}`}></span>
        </div>
        <div className="mu-pricing-single-title">
          <h3 className="fs-16">{service_attr.name}</h3>
        </div>
        <div className="mu-pricing-single-content">
          <ul>
            <li>{_.truncate(service_attr['full-description'], { length: 200 })}</li>
          </ul>
        </div>
        <div className="mu-single-pricebox">
          <h4 className="fs-30">{servicePrice}</h4>
        </div>
        <Link className="mu-buy-now-btn" to={internal_routes.service(service.id)}>
          {T.translate('services.more')}
        </Link>
      </div>
    </li>
  );
};

Service.propTypes = propTypes;

export default Service;
