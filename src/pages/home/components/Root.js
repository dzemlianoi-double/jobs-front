import React, { Component } from 'react';

import WhoWe from './WhoWe';
import HeaderSlider from './HeaderSlider';
import ClientsSay from './ClientsSay';
import Counter from './Counter';
import CallBack from './CallBack';
import SliderLastVacancies from './SliderLastVacancies';

export default class Home extends Component {
  render() {
    return (
      <div>
        <HeaderSlider />
        <CallBack />
        <WhoWe />
        <ClientsSay/>
        <Counter />
        <SliderLastVacancies />
      </div>
    );
  }
}
