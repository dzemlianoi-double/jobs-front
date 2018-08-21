import React, { Component } from 'react';

import WhoWe from './WhoWe';
import HeaderSlider from './HeaderSlider';
import ClientsSay from './ClientsSay';
import Counter from './Counter';
import CallBack from './CallBack';
import SliderLastVacancies from './SliderLastVacancies';
import Services from './Services';

export default class Home extends Component {
  render() {
    return (
      <div>
        <HeaderSlider />
        <WhoWe />
        <Counter />
        <Services />
        <ClientsSay/>
        <CallBack />
        <SliderLastVacancies />
      </div>
    );
  }
}
