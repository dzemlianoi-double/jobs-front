import React, { Component } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import avatar_1 from '../../../assets/images/avatar_1.jpg';

class ClientsSay extends Component {
  static propTypes = {
    feedback: PropTypes.array.isRequired
  }

  renderFeedback = () => {
    return _.map(this.props.feedback, function (value, key) {// eslint-disable-line no-unused-vars
      return (
        <section id="mu-testimonials">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-testimonials-area">
                  <div className="mu-testimonials-block">
                    <ul className="mu-testimonial-slide">
                      <li>
                        <img className="mu-rt-img" src={avatar_1} alt="img"/>
                        <h5 className="mu-rt-name">{value.name}</h5>
                        <p>{value.text}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: 'linear'
    };
    return (
      <div id="mu-testimonials">
        <Slider {...settings}>
          {this.renderFeedback()}
        </Slider>
      </div>
    );
  }
}

function select(store) {
  return {
    feedback: store.basic.feedback
  };
}

export default connect(select)(ClientsSay);