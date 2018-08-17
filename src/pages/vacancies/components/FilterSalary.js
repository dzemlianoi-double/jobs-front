import React, { Component } from 'react';
import InputRange from 'react-input-range';

export default class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 2, max: 2000 }
    };
  }
  render(){
    return (
      <div className="filter-salary">
        <p>Заработная плата</p>
        <div className="block-salary">
          <div className="row">
            <div className="col-md-6">
              <input value={this.state.value.min}/>
            </div>
            <div className="col-md-6">
              <input value={this.state.value.max}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mt-25">
              <InputRange
              maxValue={20000}
              minValue={0}
              value={this.state.value}
              onChange={value => this.setState({ value })} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mt-25 apply">
              <button>Применить</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
}