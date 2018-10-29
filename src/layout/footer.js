import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

import img from '../assets/images/home/Viber-PNG.png';
import T from '../store/translations';
import internal_routes from '../config/internal_routes';
import logo from '../assets/images/worker_logo.png';

export default class Footer extends Component {
  static propTypes = {
    phone_numbers: PropTypes.object.isRequired,
    social_links: PropTypes.object.isRequired,
    addresses: PropTypes.object.isRequired,
    emails: PropTypes.array.isRequired,
    vacancies: PropTypes.array.isRequired
  };

  renderSocialLinks = () => {
    return _.map(this.props.social_links, (href, socialName) => {
      const social_icon = 'fa fa-' + socialName;
      const style_icons = 'mu-' + socialName;
      return (
        <a  key={socialName.toString()} className={style_icons} href={href}>
          <span><i className={social_icon}></i></span>
        </a>
      );
    });
  }

  renderAddresses = () => {
    return Object.values(this.props.addresses).map((address) => {
      return (
        <li key={address.toString()} className="media">
          <span className="fa fa-home icon"></span>
          <div className="media-body">
            <span>{address}</span>
          </div>
        </li>
      );
    });
  }

  renderEmails = () => {
    return this.props.emails.map((email) => {
      return (
        <div key={email.toString()}>
          <span className="fa fa-envelope icon"></span>
          <a href={'mailto:' + email}>{email}</a>
        </div>
      );
    });
  }

  renderVacancies = () => {
    return _.map(this.props.vacancies.slice(0, 3), (vacancy) => {
      const vacancy_attr = vacancy.attributes;
      return (
        <li className="media" key={vacancy.id}>
          <span className="fa fa-clock-o icon"></span>
          <div className="media-body">
            <span><b>{vacancy_attr.title}</b></span>
            <span>{vacancy_attr.country}, {vacancy_attr.city}</span><br/>
            <p>Зарплата от {vacancy_attr['salary-min']} грн</p>
            <Link to={internal_routes.vacancy(vacancy.id)}>{T.translate('footer.watch')}</Link>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <footer className="mu-footer">
        <div className="mu-footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="mu-single-footer">
                  <img className="mu-footer-logo" src={logo} alt="logo" />
                  <p>Оставьте свои контакты и мы свяжемся с вами в самое ближайшее время </p>
                  <div className="mu-social-media">
                    {this.renderSocialLinks()}
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mu-single-footer">
                  <h3>{T.translate('footer.last_vacancies')}</h3>
                  <ul className="list-unstyled vacancies-list-footer">
                    {this.renderVacancies()}
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mu-single-footer">
                  <h3>{T.translate('footer.sections')}</h3>
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
                  <h3>{T.translate('footer.contact_inform')}</h3>
                  <ul className="list-unstyled">
                    {this.renderAddresses()}
                    <li className="media">
                      <div className="media-body">
                        <div className="fs-13 c-white numbers mr-10">
                          <span className="fa mr-1 fa-phone"></span>
                          <a href='tel:+380970507970'>+380970507970</a>
                          <a href="https://api.whatsapp.com/send?phone=380970507970">
                            <i className="ml-2 fs-18 c-green fa fa-whatsapp" aria-hidden="true"></i>
                          </a>
                          <a href="viber://chat?number=380970507970">
                            <img src={img} className="ml-2 mb-1 w-18px viber-icon" />
                          </a>
                        </div>
                        <div className="fs-13 c-white numbers mr-10">
                          <span className="fa mr-1 fa-phone"></span>
                          <a href='tel:+380734291700'>+380734291700</a>
                          <a href="viber://chat?number=380734291700">
                            <img src={img} className="ml-2 mb-1 w-18px viber-icon" />
                          </a>
                        </div>
                        <div className="fs-13 c-white numbers mr-10">
                          <span className="fa mr-1 fa-phone"></span>
                          <a href='tel:+38099061339'>+380990613039</a>
                          <a href="tg://resolve?domain=Interjobs">
                            <i className="ml-2 fs-15 fa fa-telegram" aria-hidden="true"></i>
                          </a>
                        </div>
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
      </footer>
    );
  }
}
