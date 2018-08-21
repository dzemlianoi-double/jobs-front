import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const propTypes = {
  last_vacancies: PropTypes.object.isRequired
};

const LastVacancies = ({ last_vacancies }) => {
  return (
    <section id="mu-testimonials" className="mb-25">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-testimonials-area">
              <div className="mu-testimonials-block">
                <ul className="mu-testimonial-slide">
                  <li>
                    <img className="mu-rt-img" src={last_vacancies['main-photo']} alt="img" />
                    <h5 className="mu-rt-name">{last_vacancies['title']}</h5>
                    <p>{last_vacancies.city}</p>
                    <p>{_.truncate(last_vacancies.info, { length: 150 })}</p>
                    <Link className="mu-primary-btn" to="">Перейти <span className="fa fa-long-arrow-right"></span></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

LastVacancies.propTypes = propTypes;

export default LastVacancies;
