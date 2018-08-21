import React, { Component } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';

import Review from './Review';

const SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  autoplaySpeed: 2000,
  cssEase: 'linear'
};

class ClientsSay extends Component {
  static propTypes = {
    reviews: PropTypes.array.isRequired
  };

  render() {
    return (
      <div>
        <div className="mu-testimonials">
          <Slider {...SLIDER_SETTINGS}>
            {_.map(this.props.reviews, (review) => <Review key={review.id} review={review.attributes} />)}
          </Slider>
        </div>
        <div className="horizontal-line pull-left"></div>
      </div>
    );
  }
}

function select(store) {
  return {
    reviews: store.basic.reviews
  };
}

export default connect(select)(ClientsSay);
