import React, { Component } from 'react';
import Turn from './Turn';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Services extends Component {
  static propTypes = {
    services: PropTypes.array.isRequired
  };

  render() {
    return(
      <section id="mu-service">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-service-area">
                <div className="row mb-30">
                  <div className="col-md-12">
                    <div className="mu-title">
                      <h2 className="text-center">Услуги</h2>
                      <p className="text-center">Мы предоставляем широкий спектр услуг, которые помогут вам в вашем трудоустройстве в любой точке мира</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="mu-service-content">
                      <div className="row">
                        {_.map(this.props.services, (service) => <Turn key={service.id} service={service.attributes} />)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function select(store) {
  return {
    services: store.basic.services
  };
}

export default connect(select)(Services);
