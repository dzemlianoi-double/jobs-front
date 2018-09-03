import React, { Component } from 'react';
import SimpleMap from './Map';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Reviews from '../..//home/components/reviews';

class Contacts extends Component {
  static propTypes = {
    phone_nums: PropTypes.object.isRequired,
    emails: PropTypes.array.isRequired,
    reviews: PropTypes.array.isRequired,
    addresses: PropTypes.object.isRequired
  };

  renderNumbers = () => {
    return Object.values(this.props.phone_nums).map((phone_number) => {
      return (
        <div className="row" key={`contacts-${phone_number.toString()}`}>
          <div className="col-sm-12">
            <span>{phone_number}</span>
          </div>
        </div>
      );
    });
  }

  renderEmails = () => {
    return Object.values(this.props.emails).map((email) => {
      return (
        <div className="row" key={`emails-${email.toString()}`}>
          <div className="col-sm-12">
            <span>{email}</span>
          </div>
        </div>
      );
    });
  }

  renderAddresses = () => {
    return Object.values(this.props.addresses).map((address) => {
      return (
        <div className="row" key={`address-${address.toString()}`}>
          <div className="col-sm-12">
            <span>{address}</span>
          </div>
        </div>
      );
    });
  }

  render () {
    return (
      <section className="contact-part d-inline">
        <div className="container-fluid">
          <div className="row mb-60">
            <div className="col-sm-1"></div>
            <div className="col col-sm-5">
              <div className="row">
                <div className="col col-sm-12">
                  <div className="row mb-30">
                    <div className="col-sm-12">
                      <h2>Контакты</h2>
                    </div>
                  </div>
                  <div className="row mt-20">
                    <div className="col-2 col-sm-2 d-flex">
                      <div className="img-contact-us-title">
                        <span className="fa fa-envelope icon-letter-call-home"></span>
                      </div>
                    </div>
                    <div className="col-10 col-sm-10 self-d-flex">
                      {this.renderEmails()}
                    </div>
                  </div>
                  <div className="row mt-20">
                    <div className="col-2 col-sm-2 d-flex">
                      <div className="img-contact-us-title">
                        <span className="fa fa-phone icon-letter-call-home"></span>
                      </div>
                    </div>
                    <div className="col-10 col-sm-10 self-d-flex">
                      {this.renderNumbers()}
                    </div>
                  </div>
                  <div className="row mt-20">
                    <div className="col-2 col-sm-2 d-flex">
                      <div className="img-contact-us-title">
                        <span className="fa fa-home icon-letter-call-home"></span>
                      </div>
                    </div>
                    <div className="col-10 col-sm-10 self-d-flex">
                      {this.renderAddresses()}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="row">
                    <div className="col-sm-12 contact-map">
                      <SimpleMap/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="row mb-30">
                <div className="col-sm-12 text-center">
                  <h2 className="title-part-contact">Форма обратной связи</h2>
                </div>
              </div>
              <form id="ajax-contact" method="post" action="mailer.php" className="contact-form">
                <div className="form-group">
                  <span className="titles-input">Имя</span>
                  <input type="text" className="form-control inputs-fields" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <span className="titles-input">Email</span>
                  <input type="email" className="form-control inputs-fields" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <span className="titles-input">Дополнительная информация</span>
                  <textarea className="form-control inputs-fields" id="message" rows="6" name="message" required></textarea>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <button type="submit" className="btn-contact-form-send">Отправить<span className="ml-1 fa fa-long-arrow-right"></span></button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-sm-1"></div>
          </div>
          <div className="row">
            <Reviews reviews={this.props.reviews}/>
          </div>
        </div>
      </section>
    );
  }
}

function select(store){
  return {
    phone_nums: store.basic.phone_numbers,
    emails: store.basic.emails,
    addresses: store.basic.addresses,
    reviews: store.basic.reviews,
  };
}

export default connect(select)(Contacts);
