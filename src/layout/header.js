import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import T from '../store/translations';
import routes from '../config/internal_routes';
import logo from '../assets/images/worker_logo.png';

export default class Header extends Component {
  render() {
    return (
      <header id="mu-hero">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light mu-navbar">
            <Link to="/" className="navbar-brand mu-logo"><img src={logo}/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto mu-navbar-nav">
                <li className="nav-item active">
                  <Link to={routes.home}><T.span text="menu.main" /></Link>
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
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
