import React, { Component } from 'react';
import BasicInfo from './BasicInfo';
import _ from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Services extends Component {
  static propTypes = {
    services: PropTypes.array.isRequired
  };

  render () {
    return (
      <section id="mu-pricing">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-pricing-area">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mu-title">
                      <h2>Our Pricing Table</h2>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis.</p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mu-pricing-content">
                      <ul className="mu-pricing-table">
                        {_.map(this.props.services, (service) => <BasicInfo key={service.id} service={service.attributes} />)}
                      </ul>
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
