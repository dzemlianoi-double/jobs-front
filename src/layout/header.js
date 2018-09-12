import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import T from '../store/translations';
import routes from '../config/internal_routes';
import logo from '../assets/images/worker_logo.png';

export default class Header extends Component {
  static propTypes = {
    phone_numbers: PropTypes.object.isRequired,
    addresses: PropTypes.object.isRequired,
  };

  state = {
    scrolled: false
  }

  componentDidMount() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY && !this.state.scrolled) { this.setState({ scrolled: true }); }
    if (!window.scrollY && this.state.scrolled) { this.setState({ scrolled: false }); }
  }

  renderNumbers = () => {
    return Object.values(this.props.phone_numbers).map((phone_number) => {
      return (
        <div className="fs-13 c-white numbers mr-10" key={`header-${phone_number.toString()}`}>
          <span className="fa mr-1 fa-phone"></span>
          <a href={'tel:' + phone_number}>{phone_number}</a>
        </div>
      );
    });
  }

  renderAddresses = () => {
    return Object.values(this.props.addresses).map((address) => {
      return (
        <div className="fs-13 c-white addresses" key={`header-${address.toString()}`}>
          <span className="fa fa-home icon mr-1"></span>
          <span>{address}</span>
        </div>
      );
    });
  }

  render() {
    return (
      <header className={`mu-hero ${this.state.scrolled ? 'opacity-07' : null}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg navbar-light mu-navbar">
                <Link to={routes.home} className="navbar-brand mu-logo"><img src={logo} /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto mu-navbar-nav">
                    <li className="nav-item">
                      <Link to={routes.home} className='active'><T.span text="menu.main" /></Link>
                    </li>
                    <li className="nav-item">
                      <Link to={routes.about_us}><T.span text="menu.about_us" /></Link>
                    </li>
                    <li className="nav-item">
                      <Link to={routes.services}><T.span text="menu.services" /></Link>
                    </li>
                    <li className="nav-item">
                      <Link to={routes.vacancies}><T.span text="menu.vacancies" /></Link>
                    </li>
                    <li className="nav-item">
                      <Link to={routes.contacts}><T.span text="menu.contacts" /></Link>
                    </li>

                    <li className="nav-item last-nav-item">
                      <div>
                        <div className="nav-numbers-block inline-block">
                          {this.renderNumbers()}
                        </div>
                        <div className="nav-addresses-block inline-block">
                          {this.renderAddresses()}
                        </div>
                        <div>
                          <span className="fs-13 c-white">Мы работаем с 10:00 - 18:00 c ПН по ПТ!</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
