import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import T from '../store/translations';
import internal_routes from '../config/internal_routes';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Footer extends Component {
  static propTypes = {
    phone_numbers: PropTypes.object.isRequired,
    social_links: PropTypes.object.isRequired,
    coordinates: PropTypes.object.isRequired,
    addresses: PropTypes.object.isRequired,
    emails: PropTypes.array.isRequired
  };

  renderNumbers = () => {
    return Object.values(this.props.phone_numbers).map((phone_number) => {
      return phone_number;
    });
  }

  renderSocialLinks = () => {
    return Object.values(this.props.social_links).map((social_link) => {
      return social_link;
    });
  }

  renderCoordinates = () => {
    return Object.values(this.props.coordinates).map((coordinat) => {
      return coordinat;
    });
  }

  renderAddresses = () => {
    return Object.values(this.props.addresses).map((address) => {
      return address;
    });
  }

  renderEmails = () => {
    return this.props.emails.map((email) => {
      return email;
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
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a className="mu-twitter" href="#"><i className="fa fa-twitter"></i></a>
                    <a className="mu-pinterest" href="#"><i className="fa fa-pinterest-p"></i></a>
                    <a className="mu-google-plus" href="#"><i className="fa fa-google-plus"></i></a>
                    <a className="mu-youtube" href="#"><i className="fa fa-youtube"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mu-single-footer">
                  <h3>Twitter feed</h3>
                  <ul className="list-unstyled">
                    <li className="media">
                      <span className="fa fa-twitter"></span>
                      <div className="media-body">
                        <p><strong>@b_hero</strong> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        <a href="#">2 hours ago</a>
                      </div>
                    </li>
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
                      <span className="fa fa-home">{this.renderCoordinates()}</span>
                      <div className="media-body">
                        <p>{this.renderAddresses()}</p>
                      </div>
                    </li>
                    <li className="media">
                      <span className="fa fa-phone"></span>
                      <div className="media-body">
                        <p>{this.renderNumbers()}</p>
                        <p>+ 00 254 632 548 00</p>
                      </div>
                    </li>
                    <li className="media">
                      <span className="fa fa-envelope"></span>
                      <div className="media-body">
                        <p>{this.renderSocialLinks()}</p>
                        <p>{this.renderEmails()}</p>
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
  };
}

export default connect(select)(Footer);
