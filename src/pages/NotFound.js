import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../config/internal_routes';

const NotFound = () => {
  return (
    <section className="mu-error">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-error-area">
              <div className="row">
                <div className="col-md-12">
                  <div className="mu-title">
                    <h2>Упс! Этой страницы не существует</h2>
                  </div>
                </div>
              </div>
              <div className="mu-error-content">
                <div className="mu-error-text">
                  <div className="mu-backdrop">
                    <p className="mu-text">404</p>
                    <div className="mu-overlay"></div>
                  </div>
                </div>
                <Link to={routes.home} className="mu-back-to-home">
                    На главную
                  <span className="fa fa-long-arrow-right"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NotFound;