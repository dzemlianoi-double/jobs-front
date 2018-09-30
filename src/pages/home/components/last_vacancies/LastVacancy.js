import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import T from '../../../../store/translations';
import internal_routes from '../../../../config/internal_routes';
import Only from '../../../basic/components/Only';

const propTypes = {
  last_vacancies: PropTypes.object.isRequired
};

const LastVacancy = ({ last_vacancies }) => {
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
                    <Only if={!_.isEmpty(vacancy_attr['main-photo'])} skipDiv>
                      <img className="mu-rt-img" src={vacancy_attr['main-photo']} alt="img" />
                    </Only>
                    <Only if={!vacancy_attr['main-photo']} skipDiv>
                      <div className="mu-rt-noimg">
                        <i className="fa fa-briefcase" aria-hidden="true"></i>
                      </div>
                    </Only> 
                    <h5 className="mu-rt-name">{vacancy_attr.title}</h5>
                    <p>{vacancy_attr.city}</p>
                    <p>{_.truncate(vacancy_attr.info, { length: 150 })}</p>
                    <Link to={internal_routes.vacancy(last_vacancies.id)} className="mu-primary-btn">
                      {T.translate('last_vacancy.go_over')}
                      <span className="ml-2 fa fa-long-arrow-right"></span>
                    </Link>
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

LastVacancy.propTypes = propTypes;

export default LastVacancy;
