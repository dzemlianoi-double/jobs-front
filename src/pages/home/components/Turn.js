import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const propTypes = {
  service: PropTypes.object.isRequired
};

const Turn = ({ service }) => {
  return (
    <div className="col-md-4">
      <div className="mu-single-service">
        <div className="mu-single-service-icon">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>    
        </div>
        <div className="mu-single-service-content">
          <h3>{service['name']}</h3>
          <p>{_.truncate(service['full-description'], { length: 200 })}</p>
        </div>
      </div>
    </div>
  );
};

Turn.propTypes = propTypes;

export default Turn;
