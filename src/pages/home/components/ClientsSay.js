import React, { Component } from 'react';
import Slider from 'react-slick';
import answ1 from '../../../assets/images/answ1.jpg';
import answ2 from '../../../assets/images/answ2.jpg';
import answ3 from '../../../assets/images/answ3.jpg';

export default class ClientsSay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div id="mu-testimonials">
        <Slider {...settings}>
          <div className="mu-single-slide">
            <div className="images">
              <img src={answ1}/>
            </div>
          </div>
          <div className="mu-single-slide">
            <div className="images">
              <img src={answ2}/>
            </div>
          </div>
          <div className="mu-single-slide">
            <div className="images">
              <img src={answ3}/>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
