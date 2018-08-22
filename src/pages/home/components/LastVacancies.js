import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import internal_routes from '../../../config/internal_routes';

const propTypes = {
  last_vacancies: PropTypes.object.isRequired
};

const LastVacancies = ({ last_vacancies }) => {
  const vacancy_attr = last_vacancies.attributes;
  return (
    <section id="mu-testimonials" className="mb-25">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-testimonials-area">
              <div className="mu-testimonials-block">
                <ul className="mu-testimonial-slide">
                  <li>
                    <img className="mu-rt-img" src={vacancy_attr['main-photo']} alt="img" />
                    <h5 className="mu-rt-name">{vacancy_attr['title']}</h5>
                    <p>{vacancy_attr.city}</p>
                    <p>{_.truncate(vacancy_attr.info, { length: 150 })}</p>
                    <Link to={internal_routes.vacancy(last_vacancies.id)} className="mu-primary-btn">Перейти <span className="fa fa-long-arrow-right"></span></Link>
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
