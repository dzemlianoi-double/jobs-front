import React, { Component } from 'react';
import WhoWe from './WhoWe';
import HeaderSlider from './HeaderSlider';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="hidden">HELLO</h1>
        <HeaderSlider />
        <WhoWe />
      </div>
    );
  }
}
