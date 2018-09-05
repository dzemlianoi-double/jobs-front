import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import LastVacancy from './LastVacancy';

const SLIDER_SETTINGS = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  autoplaySpeed: 2000,
  cssEase: 'linear'
};

const propTypes = {
  last_vacancies: PropTypes.array.isRequired
};

const LastVacancies = ({ last_vacancies }) => {
  return (
    <div className="mu-testimonials">
      <Slider {...SLIDER_SETTINGS}>
        {last_vacancies.map((last_vacancies) => <LastVacancy key={last_vacancies.id} last_vacancies={last_vacancies} />)}
      </Slider>
    </div>
  );
};

LastVacancies.propTypes = propTypes;

export default LastVacancies;
