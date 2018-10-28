import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Reviews from './reviews';
import Services from './services';
import LastVacancies from './last_vacancies';
import WhoWe from './WhoWe';
import CallBack from './CallBack';
import MetaTitle from '../../utils/components/MetaTitle';

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
        <MetaTitle title="main" />
        <LastVacancies last_vacancies={last_vacancies} />
        <WhoWe />
        <Services services={services} />
        <CallBack />
        <Reviews reviews={reviews} />
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
