import React, { Component } from 'react';
import SimpleMap from './Map';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Reviews from '../..//home/components/reviews';
import ContactForm from './ContactForm';

import { saveContacts } from '../actions';
import T from '../../../store/translations';
import MetaTitle from '../../utils/components/MetaTitle';

class Contacts extends Component {
  static propTypes = {
    phone_nums: PropTypes.object.isRequired,
    emails: PropTypes.array.isRequired,
    reviews: PropTypes.array.isRequired,
    addresses: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    social_links: PropTypes.object.isRequired
  };

  renderNumbers = () => {
    return Object.values(this.props.phone_nums).map((phone_number) => {
      return (
        <div className="row" key={`contacts-${phone_number.toString()}`}>
          <div className="col-sm-12">
            <a className="link-and-nums-contacts" href={'tel:' + phone_number}>{phone_number}</a>
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

  renderSocialLinks = () => {
    return Object.values(this.props.social_links).map((social_link) => {
      return (
        <div className="row" key={`social_link-${social_link.toString()}`}>
          <div className="col-sm-12">
            <a className="link-and-nums-contacts" href={social_link} >{social_link}</a>
          </div>
        </div>
      );
    });
  }

  render () {
    return (
      <section className="contact-part d-inline">
        <MetaTitle title="contacts" />
        <div className="container-fluid">
          <div className="row mb-60">
            <div className="col-sm-1"></div>
            <div className="col col-sm-5">
              <div className="row">
                <div className="col col-sm-12">
                  <div className="row mb-30">
                    <div className="col-sm-12">
                      <h2>{T.translate('contacts_titles.contacts_info')}</h2>
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
                  <div className="row mt-20">
                    <div className="col-2 col-sm-2 d-flex">
                      <div className="img-contact-us-title">
                        <span className="fa fa-facebook icon-letter-call-home"></span>
                      </div>
                    </div>
                    <div className="col-10 col-sm-10 self-d-flex">
                      {this.renderSocialLinks()}
                    </div>
                  </div>
                  <div className="row mt-20">
                    <div className="col-2 col-sm-2 d-flex">
                      <div className="img-contact-us-title">
                        <span className="fa fa-clock-o icon-letter-call-home"></span>
                      </div>
                    </div>
                    <div className="col-10 col-sm-10 self-d-flex">
                      <div className="row">
                        <div className="col-sm-12">
                          <span>Мы работаем с 10:00 - 18:00 c ПН по ПТ!</span>
                        </div>
                      </div>
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
                  <h2 className="title-part-contact">{T.translate('contacts_titles.message_from_user')}</h2>
                </div>
              </div>
              <ContactForm onSubmit={this.props.onSubmit} />
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
    social_links: store.basic.social_links
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: () => dispatch(saveContacts())
  };
}

export default connect(select, mapDispatchToProps)(Contacts);
