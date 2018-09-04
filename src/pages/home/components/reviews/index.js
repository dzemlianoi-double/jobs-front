import React from 'react';
import Slider from 'react-slick';
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

const propTypes = {
  reviews: PropTypes.array.isRequired
};

const Reviews = ({ reviews }) => {
  return (
    <div className="mu-testimonials mt-100">
      <Slider {...SLIDER_SETTINGS}>
        {reviews.map((review) => <Review key={review.id} review={review.attributes} />)}
      </Slider>
    </div>
  );
};

Reviews.propTypes = propTypes;

export default Reviews;