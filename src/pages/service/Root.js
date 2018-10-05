import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestService, openServiceModal, closeServiceModal, saveService } from '../services/actions';
import T from '../../store/translations';
import ServiceModal from './ServiceModal';
import CallBack from '../services/components/CallBack';

class Service extends Component {
  static propTypes = {
    requestService: PropTypes.func.isRequired,
    currentService: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      full_description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      main_photo: PropTypes.string.isRequired,
      photos: PropTypes.array,
      icon: PropTypes.string,
      by_agreement: PropTypes.bool.isRequired
    }),
    openServiceModal: PropTypes.func.isRequired,
    closeServiceModal: PropTypes.func.isRequired,
    saveService: PropTypes.func.isRequired,
    modalService: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  };
  
  componentDidMount() {
    this.props.requestService(this.props.match.params.id);
  }

  openModal = () => {
    this.props.openServiceModal(this.props.currentService);
  }

  render() {
    const { name, full_description, main_photo, } = this.props.currentService;
    const servicePrice = this.props.currentService.by_agreement ? 'По договоренности' : this.props.currentService.price ? `Стоимость: ${this.props.currentService.price} ₴` : 'Бесплатно';
    return (
      <div className="info-service">
        <div className="container mt-50 mb-50">
          <ServiceModal
            modalService={this.props.modalService}
            closeServiceModal={this.props.closeServiceModal}
            saveService={this.props.saveService}
          />
          <div className="row">
            <div className="wrapper-service">
              <div className="col-md-12">
                <p className="title-service">{name}</p>
                <div className="row">
                  <div className="col-md-12">
                    <img src={main_photo}/>
                    <span className="about-service">{full_description}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="payload-service">
                      <span>{servicePrice}</span>
                      <button onClick={this.openModal} className="mu-buy-now-btn">
                        {T.translate('services.more')}
                      </button>
                    </div>
                  </div>
                </div>
                <CallBack />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
  
function select(store) {
  return {
    currentService: store.services.currentService,
    modalService: store.services.modalService
  };
}
  
function mapPropsToDispatch(dispatch) {
  return {
    requestService: (id) => dispatch(requestService(id)),
    openServiceModal: (services) => dispatch(openServiceModal(services)),
    closeServiceModal: () => dispatch(closeServiceModal()),
    saveService: () => dispatch(saveService())
  };
}

export default connect(select, mapPropsToDispatch)(Service);
