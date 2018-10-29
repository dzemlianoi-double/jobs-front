import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import img from '../assets/images/home/Viber-PNG.png';
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
                          <div className="fs-13 c-white numbers mr-10">
                            <span className="fa mr-1 fa-phone"></span>
                            <a href='tel:+380970507970'>+380970507970</a>
                            <a href="https://api.whatsapp.com/send?phone=380970507970">
                              <i className="ml-2 fs-18 c-green fa fa-whatsapp" aria-hidden="true"></i>
                            </a>
                            <a href="viber://chat?number=380970507970">
                              <img src={img} className="ml-2 mb-1 w-18px viber-icon"/>
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
