import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import T from '../store/translations';
import internal_routes from '../config/internal_routes';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Footer extends Component {
  static propTypes = {
    phone_numbers: PropTypes.object.isRequired,
    social_links: PropTypes.object.isRequired,
    coordinates: PropTypes.object.isRequired,
    addresses: PropTypes.object.isRequired,
    emails: PropTypes.array.isRequired,
    vacancies: PropTypes.array.isRequired
  };

  renderNumbers = () => {
    return Object.values(this.props.phone_numbers).map((phone_number) => {
      return (
        <div key={phone_number.toString()}>
          <span className="fa fa-phone"></span>
          <span>{phone_number}</span>
        </div>
      );
    });
  }

  renderSocialLinks = () => {
    return _.map(this.props.social_links, function (value, key){
      const social_icon = 'fa fa-' + key;
      const style_icons = 'mu-' + key;
      return (
        <a className={style_icons} href={value}>
          <span key={value.toString()}><i className={social_icon}></i></span>
        </a>
      );
    });
  }

  renderCoordinates = () => {
    return Object.values(this.props.coordinates).map((coordinat) => {
      return coordinat;
    });
  }

  renderAddresses = () => {
    return Object.values(this.props.addresses).map((address) => {
      return (
        <div key={address.toString()}>
          <span className="fa fa-home"></span>
          <span>{address}</span>
        </div>
      );
    });
  }

  renderEmails = () => {
    return this.props.emails.map((email) => {
      return (
        <div key={email.toString()}>
          <span className="fa fa-envelope"></span>
          <span>{email}</span>
        </div>
      );
    });
  }

  renderVacancies = () => {
    return _.map(this.props.vacancies, function (value, key) {// eslint-disable-line no-unused-vars
      return (
        <li className="media">
          <span className="fa fa-clock-o icon"></span>
          <div className="media-body">
            <span key={value.title}><b>{value.title}</b></span>
            <span key={value.country}>{value.country}, {value.city}</span><br/>
            <p key={value.salary_min}>{value.salary_min}-{value.salary_max} rub</p>
            <a href="#">Посмотреть</a>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <footer id="mu-footer">
        <div className="mu-footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="mu-single-footer">
                  <img className="mu-footer-logo" src="../images/logo.png" alt="logo" />
                  <p>Оставьте свои контакты и мы свяжемся с вами в самое ближайшее время </p>
                  <div className="mu-social-media">
                    {this.renderSocialLinks()}
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mu-single-footer">
                  <h3>Последние вакансии</h3>
                  <ul className="list-unstyled">
                    {this.renderVacancies()}
                    <li className="media">
                      <span className="fa fa-twitter"></span>
                      <div className="media-body">
                        <p><strong>@b_hero</strong> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        <a href="#">2 hours ago</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mu-single-footer">
                  <h3>Разделы</h3>
                  <ul className="mu-useful-links">
                    <li>
                      <Link to={internal_routes.home}>
                        <T.span text="menu.main" />
                      </Link>
                    </li>
                    <li>
                      <Link to={internal_routes.about_us}>
                        <T.span text="menu.about_us" />
                      </Link>
                    </li>
                    <li>
                      <Link to={internal_routes.services}>
                        <T.span text="menu.services" />
                      </Link>
                    </li>
                    <li>
                      <Link to={internal_routes.vacancies}>
                        <T.span text="menu.vacancies" />
                      </Link>
                    </li>
                    <li>
                      <Link to={internal_routes.contacts}>
                        <T.span text="menu.contacts" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mu-single-footer">
                  <h3>Contact Information</h3>
                  <ul className="list-unstyled">
                    <li className="media">
                      {this.renderCoordinates()}
                      <div className="media-body">
                        {this.renderAddresses()}
                      </div>
                    </li>
                    <li className="media">
                      <div className="media-body">
                        {this.renderNumbers()}
                      </div>
                    </li>
                    <li className="media">
                      <div className="media-body">
                        {this.renderEmails()}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mu-footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-footer-bottom-area">
                  <p className="mu-copy-right">&copy; Copyright <a rel="nofollow" href="http://markups.io">markups.io</a>. All right reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

function select(store) {
  return {
    emails: store.contacts.emails,
    phone_numbers: store.contacts.phone_numbers,
    social_links: store.contacts.social_links,
    coordinates: store.contacts.coordinates,
    addresses: store.contacts.addresses,
    vacancies: store.jobs.last_vacancies
  };
}

export default connect(select)(Footer);
