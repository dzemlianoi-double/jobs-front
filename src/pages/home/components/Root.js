import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Reviews from './reviews';
import Services from './services';
import HeaderSlider from './header_slider';
import LastVacancies from './last_vacancies';
import WhoWe from './WhoWe';
import CallBack from './CallBack';

class Home extends Component {
  static propTypes = {
    services: PropTypes.array.isRequired,
    reviews: PropTypes.array.isRequired,
    last_vacancies: PropTypes.array.isRequired
  };

  render() {
    const { services, reviews, last_vacancies } = this.props;
    return (
      <div>
        <HeaderSlider />
        <WhoWe />
        <Services services={services} />
        <Reviews reviews={reviews} />
        <CallBack />
        <LastVacancies last_vacancies={last_vacancies} />
      </div>
    );
  }
}

function select(store) {
  return {
    services: store.basic.services,
    reviews: store.basic.reviews,
    last_vacancies: store.basic.last_vacancies
  };
}

export default connect(select)(Home);
