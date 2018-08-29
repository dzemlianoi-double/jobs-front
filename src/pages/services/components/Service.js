import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import T from '../../../store/translations';

const propTypes = {
  service: PropTypes.object.isRequired
};

const Service = ({ service }) => {
  const DEFAULT_ICON = 'user';
  const servicePrice = service.price ? `${service.price} грн` : 'Бесплатно';

  return (
    <li>
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
        <a className="mu-buy-now-btn" href="#">{T.translate('services.more')}</a>
      </div>
    </li>    
  );
};

Service.propTypes = propTypes;

export default Service;