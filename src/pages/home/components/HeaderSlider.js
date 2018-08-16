import React, { Component } from 'react';
import Slider from 'react-slick';
import slider_7 from '../../../assets/images/slider_7.jpg';
import slider_6 from '../../../assets/images/slider_6.jpg';

export default class HeaderSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: 'linear'
    };
    return (
      <div className="mu-slider">
        <Slider {...settings}>
          <div className="img-carousel mu-single-slide">
            <div className="image">
              <img src={slider_7}/>
            </div>
            <div className="mu-single-slide-content-area">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mu-single-slide-content">
                      <p>
                        Множество проверенных вакансий Каждый день список вакансий пополняется новыми предложениями для специалистов разных направлений
                      </p>
                      <a className="mu-primary-btn" href="#">Read more <span className="fa fa-long-arrow-right"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="img-carousel mu-single-slide">
            <div className="image">
              <img src={slider_6}/>
            </div>
            <div className="mu-single-slide-content-area">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mu-single-slide-content">
                      <p>
                        Качественное предоставление услуги. Кроме комплексного процесса трудоустройства, мы можем предоставить  ряд отдельных услуг, которые нужны для вашего трудоустройства
                      </p>
                      <a className="mu-primary-btn" href="#">Read more <span className="fa fa-long-arrow-right"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="img-carousel mu-single-slide">
            <div className="image">
              <img src={slider_6}/>
            </div>
            <div className="mu-single-slide-content-area">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mu-single-slide-content">
                      <p>
                        Мы опытная команда специалистов! Мы сертифицированная команда специалистов, которая всегда поможет вам в вопросах трудоустройства.
                      </p>
                      <a className="mu-primary-btn" href="#">Read more <span className="fa fa-long-arrow-right"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="horizontal-line"></div>
      </div>
    );
  }
}