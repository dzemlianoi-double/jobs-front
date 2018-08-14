import React, { Component } from 'react';

import WhoWe from './WhoWe';
import HeaderSlider from './HeaderSlider';
import ClientsSay from './ClientsSay';
import Counter from './Counter';

export default class Home extends Component {
  render() {
    return (
      <div>
        <HeaderSlider />
        <WhoWe />
        <ClientsSay/>
        <Counter />
      </div>
    );
  }
}
