import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../../../assets/styles/_services.scss';
import '../../../assets/styles/_pricing.scss';
import T from '../../../store/translations';
import Service from './Service';
import { requestServices, openServiceModal, closeServiceModal, saveService } from '../actions';
import CallBack from './CallBack';
import MetaTitle from '../../utils/components/MetaTitle';

class Services extends Component {
  static propTypes = {
    requestServices: PropTypes.func.isRequired,
    openServiceModal: PropTypes.func.isRequired,
    closeServiceModal: PropTypes.func.isRequired,
    saveService: PropTypes.func.isRequired,
    modalService: PropTypes.func.isRequired,
    services: PropTypes.array.isRequired
  };

  componentDidMount = () => {
    this.props.requestServices();
  };

  render () {
    return (
      <section id="mu-pricing">
        <MetaTitle title="services" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-pricing-area">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mu-title">
                      <h2 className="text-center">{T.translate('services.caption_services')}</h2>
                      <T.p text="services.some_text" className="text-center"/>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mu-pricing-content">
                      <ul className="mu-pricing-table">
                        {this.props.services.map((service) =>
                          <Service
                            key={service.id}
                            service={service}
                            openServiceModal={this.props.openServiceModal}
                            closeServiceModal={this.props.closeServiceModal}
                            saveService={this.props.saveService}
                            modalService={this.props.modalService}
                          />
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CallBack />
      </section>
    );
  }
}

function select(store) {
  return {
    services: store.services.list,
    modalService: store.services.modalService
  };
}

function mapPropsToDispatch(dispatch) {
  return {
    requestServices: () => dispatch(requestServices()),
    openServiceModal: (services) => dispatch(openServiceModal(services)),
    closeServiceModal: () => dispatch(closeServiceModal()),
    saveService: () => dispatch(saveService())
  };
}

export default connect(select, mapPropsToDispatch)(Services);
