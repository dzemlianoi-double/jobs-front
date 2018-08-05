import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import T from '../store/translations';

export default class Header extends Component {
  render() {
    return (
      <header id="mu-hero">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light mu-navbar">
            <Link to="/" className="navbar-brand mu-logo">{process.env.APP_NAME}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto mu-navbar-nav">
                <li className="nav-item active">
                  <Link to="/"><T.span text="menu.main" /></Link>
                </li>
                <li className="nav-item">
                  <Link to="/about-us"><T.span text="menu.about_us" /></Link>
                </li>
                <li className="nav-item">
                  <Link to="/services"><T.span text="menu.services" /></Link>
                </li>
                <li className="nav-item">
                  <Link to="/vacancies"><T.span text="menu.vacancies" /></Link>
                </li>
                <li className="nav-item">
                  <Link to="/contacts"><T.span text="menu.contacts" /></Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
