import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  last_vacancies: PropTypes.object.isRequired
};

const LastVacancies = ({ last_vacancies }) => {
  return (
    <section id="mu-testimonials">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-testimonials-area">
              <div className="mu-testimonials-block">
                <ul className="mu-testimonial-slide">
                  <li>
                    <img className="mu-rt-img" src={last_vacancies['main-photo']} alt="img" />
                    <h5 className="mu-rt-name">{last_vacancies['title']}</h5>
                    <p>{last_vacancies.info}</p>
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
