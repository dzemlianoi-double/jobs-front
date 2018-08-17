import React, { Component } from 'react';
import InputRange from 'react-input-range';

export default class FilterAge extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 18, max: 65 }
    };
  }
  render(){
    return (
      <div className="filter-age-block">
        <p>Возраст</p>
        <div className="filter-age">
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
                maxValue={65}
                minValue={18}
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
  }
}