import React, { Component } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';

import LastVacancies from './LastVacancies';

const SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  autoplaySpeed: 2000,
  cssEase: 'linear'
};

class SliderLastVacancies extends Component {
  static propTypes = {
    last_vacancies: PropTypes.array.isRequired
  };

  render() {
    return (
      <div>
        <div className="horizontal-line pull-left"></div>
        <div className="mu-testimonials">
          <Slider {...SLIDER_SETTINGS}>
            {_.map(this.props.last_vacancies, (last_vacancies) => <LastVacancies key={last_vacancies.id} last_vacancies={last_vacancies.attributes} />)}
          </Slider>
        </div>
      </div>
    );
  }
}

function select(store) {
  return {
    last_vacancies: store.basic.last_vacancies
  };
}

export default connect(select)(SliderLastVacancies);
