import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const propTypes = {
  service: PropTypes.object.isRequired
};

const Service = ({ service }) => {
  return (
    <li>
      <div className="mu-pricing-single">
        <div className="mu-pricing-single-icon">
          <span className="fa fa-user"></span>
        </div>
        <div className="mu-pricing-single-title">
          <h3>{service['name']}</h3>
        </div>
        <div className="mu-pricing-single-content">
          <ul>
            <li>{_.truncate(service['full-description'], { length: 200 })}</li>
          </ul>
        </div>
        <div className="mu-single-pricebox">
          <h4>{service['price']}<span>грн</span></h4>
        </div>
        <a className="mu-buy-now-btn" href="#">Купить</a>
      </div>
    </li>    
  );
};

Service.propTypes = propTypes;

export default Service;