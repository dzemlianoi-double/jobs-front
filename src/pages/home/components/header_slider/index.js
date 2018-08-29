import React from 'react';

import internal_routes from '../../../../config/internal_routes';
import Slider from 'react-slick';
import slide1 from '../../../../assets/images/home/header_slider/1.jpg';
import slide2 from '../../../../assets/images/home/header_slider/2.jpg';
import slide3 from '../../../../assets/images/home/header_slider/3.jpg';
import T from '../../../../store/translations';
import HeaderSlide from './HeaderSlide';

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
          h1Text={T.translate('header_slider.text_vacancy')}
          mainText={T.translate('header_slider.main_text_vacancy')}
          route={internal_routes.vacancies}
          buttonText={T.translate('menu.vacancies')}
        />
        <HeaderSlide
          image={slide2}
          h1Text={T.translate('header_slider.text_services')}
          mainText={T.translate('header_slider.main_text_services')}
          route={internal_routes.services}
          buttonText={T.translate('menu.services')}
        />
        <HeaderSlide
          image={slide3}
          h1Text={T.translate('header_slider.text_about_us')}
          mainText={T.translate('header_slider.main_text_about_us')}
          route={internal_routes.about_us}
          buttonText={T.translate('menu.about_us')}
        />
      </Slider>
    </div>
  );
};

export default HeaderSlider;