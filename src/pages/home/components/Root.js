import React, { Component } from 'react';

import WhoWe from './WhoWe';
import HeaderSlider from './HeaderSlider';
import ClientsSay from './ClientsSay';
import Counter from './Counter';
import CallBack from './CallBack';

export default class Home extends Component {
  render() {
    return (
      <div>
        <HeaderSlider />
        <WhoWe />
        <CallBack />
        <ClientsSay/>
        <Counter />
      </div>
    );
  }
}
