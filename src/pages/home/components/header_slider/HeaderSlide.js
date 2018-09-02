import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  image: PropTypes.string.isRequired,
  h1Text: PropTypes.string.isRequired,
  mainText: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

const HeaderSlide = ({ image, h1Text, mainText, route, buttonText }) => {
  return (
    <div className="img-carousel mu-single-slide">
      <div className="image">
        <img src={image} />
      </div>
      <div className="mu-single-slide-content-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-single-slide-content">
                <h1>{h1Text}</h1>
                <p>{mainText}</p>
                <Link className="mu-primary-btn" to={route}>{buttonText} 
                  <span className="ml-2 fa fa-long-arrow-right"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeaderSlide.propTypes = propTypes;

export default HeaderSlide;