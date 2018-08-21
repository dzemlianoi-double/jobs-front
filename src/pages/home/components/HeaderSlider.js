import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import internal_routes from '../../../config/internal_routes';
import Slider from 'react-slick';
import slider_7 from '../../../assets/images/slider_1.jpg';
import slider_6 from '../../../assets/images/slider_2.jpg';

export default class HeaderSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 5000,
      cssEase: 'linear'
    };
    return (
      <div className="mu-slider mb-10">
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
                      <h1>Только проверенные вакансии</h1>
                      <p>
                         Каждый день список вакансий пополняется новыми предложениями из разных стран для специалистов разных направлений 
                      </p>
                      <Link className="mu-primary-btn" to={internal_routes.vacancies}>Вакансии <span className="fa fa-long-arrow-right"></span></Link>
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
                      <h1>Качественное предоставление услуг.</h1>
                      <p>
                        Кроме комплексного процесса трудоустройства, мы можем предоставить ряд отдельных услуг, которые могут быть полезными для вашего трудоустройства за границей
                      </p>
                      <Link className="mu-primary-btn" to={internal_routes.services}>Услуги <span className="fa fa-long-arrow-right"></span></Link>
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
                      <h1>Опытная команда</h1>
                      <p>
                        Мы сертифицированная команда специалистов, которая всегда поможет вам в вопросах трудоустройства.
                      </p>
                      <Link className="mu-primary-btn" to={internal_routes.about_us}>О нас <span className="fa fa-long-arrow-right"></span></Link>
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