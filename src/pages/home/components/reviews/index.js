import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import Review from './Review';

const SLIDER_SETTINGS = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  speed: 500,
  autoplaySpeed: 2000,
};

const propTypes = {
  reviews: PropTypes.array.isRequired
};

const Reviews = ({ reviews }) => {
  return (
    <div className="mu-testimonials">
      <Slider {...SLIDER_SETTINGS}>
        {reviews.map((review) => <Review key={review.id} review={review.attributes} />)}
      </Slider>
    </div>
  );
};

Reviews.propTypes = propTypes;

export default Reviews;
