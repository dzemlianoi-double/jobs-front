import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Service from './Service';

import { requestServices } from '../actions';

class Services extends Component {
  static propTypes = {
    requestServices: PropTypes.func.isRequired,
    services: PropTypes.object.isRequired
  };

  componentDidMount = () => {
    this.props.requestServices();
  };
  

  render () {
    return (
      <section id="mu-pricing">
        <a className="scrollToTop" href="#">
          <i className="fa fa-angle-up"></i>
        </a>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-pricing-area">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mu-title">
                      <h2>Услуги</h2>
                      <p>Мы предоставляем широкий спектр услуг, каждая из которых позволит вам гарантировать комфортное трудоустройство в любой точке мира</p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mu-pricing-content">
                      <ul className="mu-pricing-table">
                        {this.props.services.map((service) => <Service key={service.id} service={service} />)}
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
    services: store.services.list,
  };
}

function mapPropsToDispatch(dispatch) {
  return {
    requestServices: () => dispatch(requestServices())
  };
}

export default connect(select, mapPropsToDispatch)(Services);

