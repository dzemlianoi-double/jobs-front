import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  review: PropTypes.object.isRequired
};

const Review = ({ review }) => {
  return (
    <section id="mu-testimonials">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-testimonials-area">
              <div className="mu-testimonials-block">
                <ul className="mu-testimonial-slide">
                  <li>
                    <img className="mu-rt-img" src={review['avatar-url']} alt="img" />
                    <h5 className="mu-rt-name">{`${review['first-name']} ${review['last-name']}`}</h5>
                    <p>{review.text}</p>
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

Review.propTypes = propTypes;

export default Review;
