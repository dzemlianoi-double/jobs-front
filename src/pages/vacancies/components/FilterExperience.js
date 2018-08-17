import React, { Component } from 'react';
import InputRange from 'react-input-range';

export default class FilterExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exper: 0
    };
  }
  render(){
    return (
      <div className="filter-experience-block">
        <p>Опыт Работы</p>
        <div className="row">
          <div className="col-md-12">
            <div className="filter-experience">
              <span>не более</span>
              <input readOnly value={this.state.exper} />
              <span>лет</span>
              <div className="row">
                <div className="col-md-12 mt-15">
                  <InputRange
                    maxValue={10}
                    value={this.state.exper}
                    onChange={exper => this.setState({ exper })} 
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 apply">
                  <button>применить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}