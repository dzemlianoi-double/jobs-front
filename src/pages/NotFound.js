import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../config/internal_routes';
import T from '../store/translations';

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
                    <h2>{T.translate('page_404.some_text')} </h2>
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
                  <T.span text="page_404.main" />
                  <span className="fa fa-long-arrow-right ml-2"></span>
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