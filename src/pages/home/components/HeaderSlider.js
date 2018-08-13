import React, { Component } from 'react';
import Slider from 'react-slick';
import slider_1 from '../../../assets/images/slider_1.jpg';
import slider_3 from '../../../assets/images/slider_3.jpg';
import slider_5 from '../../../assets/images/slider_5.jpg';

export default class HeaderSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div id="mu-slider">
        <Slider {...settings}>
          <div className="img-carousel mu-single-slide">
            <div className="image">
              <img src={slider_5}/>
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
              <img src={slider_1}/>
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
              <img src={slider_3}/>
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
      </div>
    );
  }
}