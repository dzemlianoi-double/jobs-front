import React from 'react';

import internal_routes from '../../../../config/internal_routes';
import Slider from 'react-slick';
import slide1 from '../../../../assets/images/home/header_slider/1.jpg';
import slide2 from '../../../../assets/images/home/header_slider/2.jpg';
import slide3 from '../../../../assets/images/home/header_slider/2.jpg';
import HeaderSlide from './header_slide';

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


const HeaderSlider = () => {
  return (
    <div className="mu-slider mb-10">
      <Slider {...settings}>
        <HeaderSlide
          image={slide1}
          h1Text="Только проверенные вакансии"
          mainText="Каждый день список вакансий пополняется новыми предложениями из разных стран для специалистов разных направлений"
          route={internal_routes.vacancies}
          buttonText="Вакансии"
        />
        <HeaderSlide
          image={slide2}
          h1Text="Качественное предоставление услуг"
          mainText="Кроме комплексного процесса трудоустройства, мы можем предоставить ряд отдельных услуг, которые могут быть полезными для вашего трудоустройства за границей"
          route={internal_routes.services}
          buttonText="Услуги"
        />
        <HeaderSlide
          image={slide3}
          h1Text="Опытная команда"
          mainText="Мы сертифицированная команда специалистов, которая всегда поможет вам в вопросах трудоустройства"
          route={internal_routes.about_us}
          buttonText="О нас"
        />
      </Slider>
    </div>
  );
};

export default HeaderSlider;