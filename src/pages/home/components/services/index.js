import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import T from '../../../../store/translations';
import Service from './Service';
import internal_routes from '../../../../config/internal_routes';

const propTypes = {
  services: PropTypes.array.isRequired
};

const Services = ({ services }) => {
  return(
    <section id="mu-service">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-service-area">
              <div className="row mb-30">
                <div className="col-md-12">
                  <div className="mu-title">
                    <h2 className="text-center">{T.translate('services.caption_services')}</h2>
                    <T.p text="services.some_text" className="text-center"/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="mu-service-content">
                    <div className="row">
                      {services.map((service) => <Service key={service.id} service={service.attributes} />)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <Link to={internal_routes.services} className="mu-primary-btn mt-50">
                    <T.span text={'services.all_services'} className="mr-3" /> 
                    <span className="fa fa-long-arrow-right"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Services.propTypes = propTypes;

export default Services;
